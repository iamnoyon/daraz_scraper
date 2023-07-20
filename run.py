import subprocess
import json

spiders = ['category', 'product']

try:
    with open('data/category.json', 'r') as categories_json:
        categories_json = json.load(categories_json)[0]
        categories_done = categories_json['categories_done']
except FileNotFoundError:
    categories_done = False

if categories_done is True:
    spiders.remove('category')

for spider in spiders:
    command = f"scrapy crawl {spider} -O data/{spider}.json"
    subprocess.run(command, shell=True)

