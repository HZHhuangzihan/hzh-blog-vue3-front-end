const hzhMock = require('mockjs');
export default [
    {
        url: '/hzh-focus/hzh-list',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: [
                    {
                        id: 1,
                        title: 'Akina',
                        img: require('@/assets/img/hzh-focus-akina.webp')
                    },
                    {
                        id: 2,
                        title: '使用说明',
                        img:  require('@/assets/img/hzh-focus-instructions.webp')
                    },
                    {
                        id: 3,
                        title: '文章归档',
                        img:  require('@/assets/img/hzh-focus-file.webp')
                    }
                ]
            }
        }
    }
]