from lxml import etree

with open('name.txt', 'r') as fp:
    name_list = [i.strip('\n') for i in fp.readlines()]

for name in name_list:
    print(name)
    # target = open('csv/{}.csv'.format(name), 'w')
    target = open('AD.csv', 'w',encoding='utf-8')

    # with open('source/{}.html'.format(name), 'r') as fp:
    with open('source/AD.html', 'r',encoding='utf-8') as fp:
        source = fp.read()

    tree = etree.HTML(source)

    if tree.xpath('//table[@class="wikitable sortable"]'):
        table = tree.xpath('//table[@class="wikitable sortable"]')[0]
    elif tree.xpath('//table[@class="wikitable sortable jquery-tablesorter"]'):
        table = tree.xpath('//table[@class="wikitable sortable jquery-tablesorter"]')[0]
    else:
        target.close()
        continue

    # 1 写入表头th
    ths = table.xpath('.//th/text()')
    for i in range(len(ths)):
        ths[i] = ths[i].strip('\n')
        print(ths[i].rstrip())
    target.write(','.join(ths).replace(' (,)', '') + '\n')

    # 2 循环tr写入td
    trs = table.xpath('.//tr')[1:]
    for tr in trs:
        result = ''
        tds = tr.xpath('.//td')
        for td in tds:
            content = ''
            if [i for i in td.xpath('./text()') if i not in ('\n', ' ')]:
                # print([i for i in td.xpath('./text()') if i != '\n'])
                print('数据在td中')
                if td.xpath('./text()')[0].strip('\n') == '[':
                    content = '[' + td.xpath('./span/text()')[0].strip('\n').replace(',', '') + ']'
                else:
                    content = td.xpath('./text()')[0].strip('\n').replace(',', '')
                print(content)
            elif td.xpath('./a/text()'):
                print('数据在a中')
                content = td.xpath('./a/text()')[0].strip('\n').replace(',', '')
                print(content)
            elif td.xpath('./span/text()'):
                print('数据在span中')
                content = td.xpath('./span/text()')[0].strip('\n').replace(',', '')
                print(content)
            elif td.xpath('./span/a/text()'):
                print('数据在span的a中')
                content = td.xpath('./span/a/text()')[0].strip('\n').replace(',', '')
                print(content)
            elif td.xpath('./a/span/text()'):
                print('数据在a的span中')
                content = td.xpath('./a/span/text()')[0].strip('\n').replace(',', '')
                print(content)
            result += content + ','
        target.write(result[:-1] + '\n')
        print('-----------------')
    # quit()
        # result = ''
        # if tr.xpath('.//td/span/text()'):
        #     result += ','.join(tr.xpath('.//td/span/text()'))
        #
        # # !!!!!
        # tds_1 = tr.xpath('.//td/span/text()')
        # print(tds_1)
        # tds_2 = tr.xpath('.//td/a/text()')
        # print(tds_2)
        # target.write(','.join(tds_1) + ',' + ','.join(tds_2) + '\n')
        # tds = tr.xpath('.//td/text()')
        # if tds:
        #     target.write(','.join(tds))
        # else:
        #     tds = tr.xpath('.//td/span/text()')
        #     if tds:
        #         target.write(','.join(tds))
        #     else:
        #         tds = tr.xpath('.//td/a/text()')
        #         target.write(','.join(tds))
        # print(tds)

    target.close()

    # quit()
