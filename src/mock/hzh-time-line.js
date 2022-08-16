const hzhMock = require('mockjs');

const hzhTimeLineList = [
    {
        id: 0,
        hzhCreateDate: "2021-04-07",
        hzhTextContent: "在阿里云上购买域名huangzihan.top",
    },
    {
        id: 1,
        hzhCreateDate: "2021-04-30",
        hzhTextContent: "在阿里云上购买云服务器huangzihan",
    },
    {
        id: 3,
        hzhCreateDate: "2021-07-01",
        hzhTextContent: "域名首次通过GitHub的静态网页试点成功，并且可以通过固定的IP地址访问到网站",
    },
    {
        id: 4,
        hzhCreateDate: "2021-08-01",
        hzhTextContent: "首次部署在阿里云的云服务器上，环境使用的是Windows 2008 sever R2 Enterprise，代码托管部分是IIS管理器，并且可以通过不同的IP地址访问到网站的IP地址，页面主要特性：静态、非弹性",
    },
    {
        id: 5,
        hzhCreateDate: "2022-07-11",
        hzhTextContent: "首次使用vue框架开发",
    },
    {
        id: 6,
        hzhCreateDate: "2022-07-15",
        hzhTextContent: "第一次使用Webpack进行性能优化，网站加载时间从5290ms缩短到了1950ms",
    },
    {
        id: 7,
        hzhCreateDate: "2022-07-17",
        hzhTextContent: "第一次使用Lighthouse进行性能优化，网站可交互时间从6800ms降至6600ms，总阻塞时间从540ms降至420ms，最大内容绘制从6400ms降至6000ms，累积布局偏移从0.149降至0.137",
    },
    {
        id: 8,
        hzhCreateDate: "2022-07-23",
        hzhTextContent: "网站服务端环境从window切换至企业级操作系统centos和nginx服务器",
    },
]

export default [
    {
        url: '/hzh-time-line',
        type: 'get',
        response: config => {
            return {
                code: 20000,
                data: hzhTimeLineList
            }
        }
    }
]