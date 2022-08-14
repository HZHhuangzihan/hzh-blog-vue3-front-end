const hzhMock = require('mockjs');
const hzhList = [{
    hzhId: 0,
    hzhSiteName: "黄子涵的博客",
    hzhPath: "https://www.huangzihan.top",
    hzhDesc: "一个热爱音乐的程序员"
}]
const hzhCount = 17

for (let i = 0; i < hzhCount; i++) {
    hzhList.push(hzhMock.mock({
        hzhId: '@increment',
        hzhSiteName: "@cname",
        hzhPath: "@url",
        hzhDesc: "@ctitle(5,20)"
    }))
}

export default [
    {
        url: '/hzh-my-friend',
        type: 'get',
        response: config => {
            return {
                code: 20000,
                data: hzhList
            }
        }
    }
]