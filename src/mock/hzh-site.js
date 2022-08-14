const hzhMock = require('mockjs');
export default [
    // 站点信息
    {
        url: '/hzh-site',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: {
                    name: '黄子涵的博客',
                    domain: 'www.huangzihan.top',
                    desc: '一个热爱音乐的程序员'
                }
            }
        }
    },
    // 站点社交信息
    {
        url: '/hzh-social',
        type: 'get',
        response: () => {
            return {
                code: 20000,
                data: [
                    {
                        id: 1,
                        title: 'QQ',
                        icon: 'iconqq',
                        color: '#1AB6FF ',
                        href: ''
                    },
                    {
                        id: 2,
                        title: 'Gitee',
                        icon: 'icongitee',
                        color: '#d81e06',
                        href: ''
                    },
                    {
                        id: 3,
                        title: 'GitHub',
                        icon: 'icongithub',
                        color: '',
                        href: ''
                    },
                    {
                        id: 4,
                        title: 'CSDN',
                        icon: 'iconcsdn',
                        color: 'red',
                        href: ''
                    }
                ]
            }
        }
    }
]