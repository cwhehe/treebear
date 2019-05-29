from lxml import etree
from bs4 import BeautifulSoup
import re
with open('name1.txt', 'r') as fp:
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
        target = open('csv4/{}{}{}.csv'.format(name, '_',num,), 'w', encoding='utf-8')#格式为utf-8
        # 1 写入表头th
        ths = table[num].xpath('.//th/text()')
        n = 1
        for i in range(len(ths)):
            print(ths[i])
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
        if "ELOT 743:1982 = ISO 843:1997 = UN V/19 1987" in ths:
            ths.remove("ELOT 743:1982 = ISO 843:1997 = UN V/19 1987")#如果某个表头中含有空格 就删除这一项
        if  "ELOT 743:1982                  = ISO 843:1997 = UN V/19 1987)" in ths:
            ths.remove( "ELOT 743:1982                  = ISO 843:1997 = UN V/19 1987)")#如果某个表头中含有空格 就删除这一项
        if  "BGN/PCGN 1956" in ths:
            ths.remove( "BGN/PCGN 1956")#如果某个表头中含有空格 就删除这一项
        if  "BGN/PCGN 1967" in ths:
            ths.remove( "BGN/PCGN 1967")#如果某个表头中含有空格 就删除这一项 
        if  "BGN/PCGN 1979" in ths:
            ths.remove( "BGN/PCGN 1979")#如果某个表头中含有空格 就删除这一项  
        if  "BGN/PCGN 1947" in ths:
            ths.remove( "BGN/PCGN 1947")#如果某个表头中含有空格 就删除这一项           
        if  "BGN/PCGN 2007" in ths:
            ths.remove( "BGN/PCGN 2007")#如果某个表头中含有空格 就删除这一项
        if  "National 2010 = UN X/9 2012" in ths:
            ths.remove( "National 2010 = UN X/9 2012")#如果某个表头中含有空格 就删除这一项
        if  "conventional names" in ths:
            ths.remove( "conventional names")#如果某个表头中含有空格 就删除这一项
        if  "BGN/PCGN 1994" in ths:
            ths.remove( "BGN/PCGN 1994")#如果某个表头中含有空格 就删除这一项
        if  "UN III/11 1977" in ths:
            ths.remove( "UN III/11 1977")#如果某个表头中含有空格 就删除这一项
        if  "UN III/11 1972" in ths:
            ths.remove( "UN III/11 1972")#如果某个表头中含有空格 就删除这一项    
        if  "BGN/PCGN 2007" in ths:
            ths.remove( "BGN/PCGN 2007")#如果某个表头中含有空格 就删除这一项    
        if  "BGN/PCGN 1964" in ths:
            ths.remove( "BGN/PCGN 1964")#如果某个表头中含有空格 就删除这一项
        if  "BGN/PCGN 2013" in ths:
            ths.remove( "BGN/PCGN 2013")#如果某个表头中含有空格 就删除这一项
        if  "Provisional UN Draft 1972" in ths:
            ths.remove( "Provisional UN Draft 1972")#如果某个表头中含有空格 就删除这一项
        if  "Provisional UN Draft 1972" in ths:
            ths.remove( "Provisional UN Draft 1972")#如果某个表头中含有空格 就删除这一项    
        if  "National 2000" in ths:
            ths.remove( "National 2000")#如果某个表头中含有空格 就删除这一项
        if  "National draft 2002" in ths:
            ths.remove( "National draft 2002")#如果某个表头中含有空格 就删除这一项     
        if  "ISO 3602:1989" in ths:
            ths.remove( "ISO 3602:1989")#如果某个表头中含有空格 就删除这一项
        if  "National 2006 = UN IX/9 2007" in ths:
            ths.remove( "National 2006 = UN IX/9 2007")#如果某个表头中含有空格 就删除这一项
        if  "since 2016" in ths:
            ths.remove( "since 2016")#如果某个表头中含有空格 就删除这一项 
        if  "before 2016" in ths:
            ths.remove( "before 2016")#如果某个表头中含有空格 就删除这一项 
        if  "conventional names" in ths:
            ths.remove( "conventional names")#如果某个表头中含有空格 就删除这一项
        if  "National 1958 = ISO 7098:2015 = UN III/8 1977" in ths:
            ths.remove( "National 1958 = ISO 7098:2015 = UN III/8 1977")#如果某个表头中含有空格 就删除这一项 
        if  "UN X/6 2012" in ths:
            ths.remove( "UN X/6 2012")#如果某个表头中含有空格 就删除这一项                          
        if  "GOST 1983 = UN V/18 1987" in ths:
            ths.remove( "GOST 1983 = UN V/18 1987")#如果某个表头中含有空格 就删除这一项
        if  "National 1997" in ths:
            ths.remove( "National 1997")#如果某个表头中含有空格 就删除这一项
        if  "National 1996" in ths:
            ths.remove( "National 1996")#如果某个表头中含有空格 就删除这一项
        if  "National 1999 = UN X/7 2012" in ths:
            ths.remove( "National 1999 = UN X/7 2012")#如果某个表头中含有空格 就删除这一项                 
        # National 2006 = UN IX/9 2007
        # National draft 2002
        # since 2016
        # before 2016
        # BGN/PCGN 1967
        # conventional names
        # National 1958 = ISO 7098:2015 = UN III/8 1977
        # BGN/PCGN 1979
        # UN X/6 2012
        # BGN/PCGN 1947

        # GOST 1983 = UN V/18 1987
        # National 1997
        # National 1999 = UN X/7 2012
        # ISO 9985:1996
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
                    # for i in range(20):
                    numa = td.xpath('.//a')
                    for numalist in numa:
                        print(numalist.xpath('text()')[0])
                        content += numalist.xpath('text()')[0].strip('\n').replace(',', '')+','
                    # content = td.xpath('./a/text()')[0].strip('\n').replace(',', '')
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
