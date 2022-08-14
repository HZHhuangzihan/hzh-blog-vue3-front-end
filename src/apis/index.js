import request from '@/utils/request'

export function hzhFetchList(params) {
    return request({
        url: '/hzh-post/hzh-list',
        method: 'get',
        params: params
    })
}

export function hzhFetchFocus() {
    return request({
        url: '/hzh-focus/hzh-list',
        method: 'get',
        params: {}
    })
}

export function hzhFetchFriend() {
    return request({
        url: '/hzh-my-friend',
        method: 'get',
        params: {}
    })
}

export function hzhFetchSocial() {
    return request({
        url: '/hzh-social',
        method: 'get',
        params: {}
    });
}

export function hzhFetchSiteInfo() {
    return request({
        url: '/hzh-site',
        method: 'get',
        params: {}
    })
}

export function hzhFetchTimeLine() {
    return request({
        url: '/hzh-time-line',
        method: 'get',
        params: {}
    })
}

export function hzhFetchLaboratory() {
    return request({
        url: '/hzh-my-laboratory',
        method: 'get',
        params: {}
    })
}