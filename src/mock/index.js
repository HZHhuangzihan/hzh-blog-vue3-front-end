const hzhMock = require('mockjs');
import { hzhParam2Obj } from '@/utils/index.js';

// 设置拦截 ajax 请求的相应时间
hzhMock.setup({
    timeout: '200-600'
});

function hzhXHR2ExpressReqWrap(hzhRespond) {
    return function(hzhOptions) {
        let hzhResult = null
        if (hzhRespond instanceof Function) {
            const { body, type, url } = hzhOptions
            hzhResult = hzhRespond({
                methods: type,
                body: JSON.parse(body),
                query: hzhParam2Obj(url)
            })
        } else {
            hzhResult = hzhRespond
        }
        return hzhMock.mock(hzhResult)
    }
}

// 使用 webpack 的 require.context() 遍历所有的 mock 文件
const hzhFiles = require.context('.', true, /\.js$/);
hzhFiles.keys().forEach((hzhKey => {
    if(hzhKey === './index.js') return;
    hzhFiles(hzhKey).default.forEach(item => {
        let {url, type, response} = item;
        // 注册所有的 mock 服务
        hzhMock.mock(new RegExp('^' + url), type, hzhXHR2ExpressReqWrap(response));
    })
}))