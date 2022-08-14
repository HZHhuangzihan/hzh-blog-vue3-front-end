const hzhMock = require('mockjs');
const hzhCount = 100

const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

const hzhBanners = [
    require('@/assets/img/hzh-icon-hcq1.webp'),
    require('@/assets/img/hzh-icon-hcq2.webp'),
    require('@/assets/img/hzh-icon-hcq3.webp'),
]

const hzhList = [{
    id: 0,
    isTop: true,
    banner: hzhBanners[0],
    isHot: true,
    pubTime: +hzhMock.Random.date('T'),
    title: '看一遍闭着眼都会安装Lua了',
    summary: 'Lua 是一种轻量小巧的脚本语言，能为应用程序提供灵活的扩展和定制功能。',
    content: '',
    viewsCount: 4045,
    commentsCount: 99
}]

for (let i = 0; i < hzhCount; i++) {
    hzhList.push(hzhMock.mock({
        id: '@increment',
        'isTop|1-4': true,
        'banner|+1': hzhBanners,
        'isHot|1-3': true,
        pubTime: +hzhMock.Random.date('T'),
        title: hzhMock.Random.ctitle(10,20),
        summary: hzhMock.Random.cparagraph(),
        content: baseContent,
        viewsCount: '@integer(300, 5000)',
        commentsCount: '@integer(10, 200)'
    }))
}

export default [
    {
        url: '/hzh-post/hzh-list',
        type: 'get',
        response: config => {
            let {hzhPage = 1, hzhSize = 10} = config.query;
            hzhPage = hzhPage instanceof Number ? hzhPage : parseInt(hzhPage)
            hzhSize = hzhSize instanceof Number ? hzhSize : parseInt(hzhSize)
            const hzhPageList = hzhList.filter((item, index) => index < hzhSize * hzhPage && index >= hzhSize * (hzhPage - 1));
            return {
                code: 20000,
                data: {
                    total: hzhList.length,
                    hzhItems: hzhPageList.sort((a,b)=>a.isTop===b.isTop?0:a.isTop?-1:1),
                    hzhHasNextPage: hzhPage * hzhSize < hzhList.length,
                    hzhPage: hzhPage,
                    hzhSize: hzhSize
                }
            }
        }
    }
]