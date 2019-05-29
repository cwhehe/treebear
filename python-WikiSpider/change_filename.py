import os

print(os.path.abspath(os.path.curdir))

source_dir = '/Users/zk/Desktop/PycharmProjects/WikiSpider/source/'

# print(os.listdir('./source'))

for filename in os.listdir('./source'):
    # 将文件名和缀名分成俩部分
    portion = os.path.splitext(filename)

    if portion[1] == '.html':
        new_name = portion[0].strip('\n') + '.html'
        os.rename(source_dir + filename, source_dir + new_name)
    # quit()
