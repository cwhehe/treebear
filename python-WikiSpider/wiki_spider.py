"""
name url.rsplit(':')[-1]

"""
#encoding=utf-8
import random
import time

from selenium import webdriver

# with open('url.txt', 'r') as fp:
#     url_list = fp.readlines()

chrome = webdriver.Chrome()

# count = 0

# for url in url_list:
#     print(url)
#     print(url.rsplit(':')[-1])

chrome.get('https://en.wikipedia.org/wiki/ISO_4217')

source = chrome.page_source

with open('source/ISO_4217.html', 'w',encoding='utf-8') as fp:
        fp.write(source)

#     print('随机延时中')
#     num = random.randint(5, 15)
#     time.sleep(num)

chrome.close()
