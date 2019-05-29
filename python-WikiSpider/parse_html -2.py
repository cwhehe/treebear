from lxml import etree

with open('name.txt', 'r') as fp:
    name_list = [i.strip('\n') for i in fp.readlines()]

for name in name_list:
    # with open('source/LV.html', 'r', encoding='utf-8') as fp:
    with open('source/{}.html'.format(name), 'r', encoding='utf-8') as fp:
        source = fp.read()
    tree = etree.HTML(source)
    table = tree.xpath(
        '//table[@class="wikitable sortable" or @class="wikitable sortable jquery-tablesorter" or @class="wikitable sortable mw-collapsible"]')
    tablelen = len(table)
    for num in range(tablelen):
        # print(num)
        target = open('csv44/{}{}.csv'.format(name, num), 'w', encoding='utf-8')#格式为utf-8
        # 1 写入表头th
        ths = table[num].xpath('.//th/text()')
        n = 1
        for i in range(len(ths)):
            print('---------'+ths[i])
            if ths[i] == """)
                    """:
                continue
            if ths[i] =="":
               ths.remove("")  
            print(n)
            n += 1

            ths[i] = ths[i].replace('<br/>','').replace('\n', '').strip(')').strip('\n').strip(' ').strip('(').replace(',','')
           
        if """)\n                """ in ths:
            ths.remove(""")\n                """)#如果某个表头中含有空格 就删除这一项
            print('-11' + ths[i] + '22-')
        while '' in ths:
          ths.remove('')            
        target.write(','.join(ths).replace(' (,)', '') + '\n')#将表头这个数组拼接上逗号 和回车 要写到最外面

        # 2 写td
        trs = table[num].xpath('.//tr')[1:]
        for tr in trs:
            result = ''
            tds = tr.xpath('.//td')
            for td in tds:
                content = ''
                if td.xpath('./a/span/text()'):
                    print('数据在a的span中')
                    content = td.xpath('./a/span/text()')[0].strip('\n').replace(',', '')
                    print(content)
                elif td.xpath('./span/a/text()'):
                    print('数据在span的a中')
                    content = td.xpath('./span/a/text()')[0].strip('\n').replace(',', '')
                    print(content)
                elif td.xpath('./a/text()'):
                    print('数据在a中')
                    content = td.xpath('./a/text()')[0].strip('\n').replace(',', '')
                    print(content)
                elif td.xpath('./span/text()'):
                    print('数据在span中')
                    content = td.xpath('./span/text()')[0].strip('\n').replace(',', '')
                    print(content)
                elif [i for i in td.xpath('./text()') if i not in ('\n', ' ')]:
                    # print([i for i in td.xpath('./text()') if i != '\n'])
                    print('数据在td中')
                    if td.xpath('./text()')[0].strip('\n') == '[':
                        content = '[' + td.xpath('./span/text()')[0].strip('\n').replace(',', '') + ']'
                    else:
                        content = td.xpath('./text()')[0].strip('\n').replace(',', '')
                    print(content)
                result += content.replace('\n', '').replace('                    ', ' ').replace('                ', ' ') + ','
            target.write(result[:-1].strip(' ') + '\n')
            print('-----------------')
        target.close()#文件写完后将文件关闭 
