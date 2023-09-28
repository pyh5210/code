import request from '@/utils/http'


export function getCaptcha (params:any) {
    return request({
        url: '/api/v1/auth/captcha',
        method: 'get',
        data: params
    })
}

export function loginin (params:any) {
    return request({
        url: "/api/v1/auth/login",
        method: 'post',
        data: params,
        headers: {
            "Content-Type": "multipart/form-data",
          },
    })
}

