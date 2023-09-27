import request from '@/utils/http'


export function getCaptcha (params:any) {
    return request({
        url: '/api/v1/auth/captcha',
        method: 'get',
        data: params
    })
}

