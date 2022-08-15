const hzhMock = require('mockjs');

const hzhArticleCovers = [
    require('@/assets/img/darwin.webp'),
    require('@/assets/img/einstein.webp'),
    require('@/assets/img/lavoisier.webp'),
    require('@/assets/img/newton.webp'),
    require('@/assets/img/turing.webp'),
    require('@/assets/img/vonneumann.webp'),
]

const hzhLaboratoryList = [{
    hzhId: 0,
    hzhTitle: '基于Vue3的高德地图实践',
    hzhArticleCover: hzhArticleCovers[0],
    hzhSummary: '黄子涵使用Vue3开发了高德地图',
}]

const hzhCount = 7

for (let i = 0; i < hzhCount; i++) {
    hzhLaboratoryList.push(hzhMock.mock({
        'hzhArticleCover|+1': hzhArticleCovers,
        hzhTitle: hzhMock.Random.ctitle(10,15),
        hzhSummary: hzhMock.Random.cparagraph(10,30)
    }))
}

export default [
    {
        url: '/hzh-my-laboratory',
        type: 'get',
        response: config => {
            return {
                code: 20000,
                data: hzhLaboratoryList
            }
        }
    }
]