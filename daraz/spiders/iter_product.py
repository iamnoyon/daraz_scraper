import scrapy
from daraz.tools.save_log import save_log
from urllib.parse import urljoin
import json
import re
from fake_useragent import UserAgent
import time, random
import logging

class DarazSpider(scrapy.Spider):
    name = "product"
    file_not_found = False
    ua = UserAgent()

    def start_requests(self):
        with open('data/category.json', 'r') as categories_json:
            categories_json = json.load(categories_json)[0]
            categories = categories_json['categories']
            for category in categories[:30]:
                url = category['url']
                headers = {
                    'User-Agent': self.ua.random,
                    'Referer': 'https://www.daraz.com.bd/'
                }
                time.sleep(random.randint(5,15))
                yield scrapy.Request(url=url, headers=headers, callback=self.parse)

    def parse(self, response):
        save_log(response)
        try:
            page_data = response.xpath('//script[contains(text(), "window.pageData=")]/text()').get()
            page_data = re.findall(r'window\.pageData=(.*)', page_data)[0]
        except TypeError as e:
            raise Exception(f'captcha Maybe {e}')
        page_data_json = json.loads(page_data)
        product_items = page_data_json['mods']['listItems']
        assert product_items
        for i, product_item in enumerate(product_items, start=1):
            #input(f'Product: {product_item}')
            name = product_item['name']
            url = product_item['productUrl'].split('?')[0]
            if url.count("https:")==0 and url[0]=='/' and url[1]=='/':
                url = urljoin('https:', url)
            else:
                raise Exception(logging.ERROR(f'New Structured Url: {url}'))
            price = product_item['price']
            original_price = None
            if 'originalPrice' in product_item:
                original_price = product_item['originalPrice']
            discount = None
            if 'discount' in product_item:
                discount = product_item['discount']
            
            rating = None
            if 'ratingScore' in product_item:
                rating = product_item['ratingScore']
                
            sku = product_item['sku']
            description = ', '.join(product_item['description'])
            brand = product_item['brandName']
            seller_name = product_item['sellerName']
            
            yield {
                'name': name,
                'url': url,
                'price': price,
                'original_price': original_price,
                'discount': discount,
                'rating': rating,
                'sku': sku,
                'brand': brand,
                'seller_name': seller_name,
                'description': description
            }
        next_page_url = response.xpath('//link[@rel="next"]/@href').get()
        if next_page_url is not None:
            #input(next_page_url)
            assert response.request.url.split('?')[0] in next_page_url
            headers = {
                    'User-Agent': self.ua.random
                }
            time.sleep(random.randint(5,15))
            yield scrapy.Request(next_page_url,headers=headers, callback=self.parse)