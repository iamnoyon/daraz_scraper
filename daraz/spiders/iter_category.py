import scrapy
from daraz.tools.save_log import save_log
from urllib.parse import urljoin

class DarazSpider(scrapy.Spider):
    name = "category"
    
    def start_requests(self):
        url = "https://www.daraz.com.bd/"
        yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        categories = []
        save_log(response)
        menu = response.xpath('//ul[@data-spm="cate"]')
        segments = menu.xpath('./li[contains(@id,"Level_1_Category")]')
        #print(f'segment length: {len(segments)}')
        for i,segment in enumerate(segments, start=1):
            segment_name = segment.xpath('./a/span/text()').get()
            sub_segments = menu.xpath(f'./ul[@data-spm="cate_{i}"]/li')
            #print(f'sub_segment length: {len(sub_segments)}')
            for j, sub_segment in enumerate(sub_segments,start=1):
                sub_segment_name = sub_segment.xpath('./a/span/text()').get()
                sub_sub_segments = sub_segment.xpath(f'./ul[@data-spm="cate_{i}_{j}"]/li')
                #print(f'sub_sub_segment length: {len(sub_sub_segments)}')
                if sub_sub_segments:
                    for k, sub_sub_segment in enumerate(sub_sub_segments, start=1):
                        sub_sub_segment_name = sub_sub_segment.xpath('./a/span/text()').get()
                        sub_sub_sub_segments = sub_sub_segment.xpath(f'./ul[@data-spm="cate_{i}_{j}_{k}"]/li')
                        if sub_sub_sub_segments:
                            raise Exception(f"NOT IMPLEMENTED")
                        else:
                            sub_sub_segment_url = sub_sub_segment.xpath('./a/@href').get().split('?')[0]
                        
                        if sub_sub_segment_url.count("https:")==0 and sub_sub_segment_url[0]=='/' and sub_sub_segment_url[1]=='/':
                            sub_sub_segment_url = urljoin('https:', sub_sub_segment_url)
                        
                        category= {
                                "category":sub_sub_segment_name,
                                "url": sub_sub_segment_url,
                                "segment": segment_name,
                                "sub_segment": sub_segment_name
                            }
                        categories.append(category)
                else:
                    sub_segment_url = sub_segment.xpath('./a/@href').get().split('?')[0]
                        
                    if sub_segment_url.count("https:")==0 and sub_segment_url[0]=='/' and sub_segment_url[1]=='/':
                        sub_segment_url = urljoin('https:', sub_segment_url)
                    
                    category= {
                            "category": sub_segment_name,
                            "url": sub_segment_url,
                            "segment": segment_name
                        }
                    categories.append(category)
        yield {
            "categories" : categories,
            "categories_done" : True
        }
        
    
    