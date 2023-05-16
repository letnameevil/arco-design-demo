import { Base64 } from 'js-base64'
import { request } from '../index'

let CLIENTID = 'hats'
let CLIENTSECRET = 'hats_secret'
let REDIRECT_URI = 'http://10.248.27.192/hats/'
if (import.meta.env.VITE_USER_NODE_ENV === 'development') {
  CLIENTID = 'hats'
  CLIENTSECRET = 'hats_secret'
  REDIRECT_URI = 'http://10.248.27.192/hats/'
} else {
  CLIENTID = 'hats'
  CLIENTSECRET = 'hats_secret'
  REDIRECT_URI = 'http://10.248.27.192/hats/'
}

// 获取用户信息含token接口
export const $api_login = ({ username, password }) => {
  return request.post({
    url: '/get-token/api/blade-auth/oauth/token',
    headers: {
      Authorization: `Basic ${Base64.encode(`${CLIENTID}:${CLIENTSECRET}`)}`,
      'Tenant-Id': '000000',
    },
    params: {
      username,
      password,
      grant_type: 'password',
      scope: 'all',
      tenantId: '000000',
      accountType: 1,
    },
    isLoading: true,
  })
}

/**
 * 获取权限接口
 * */
export const $api_getAuthorities = () => {
  return request.get({
    url: '/authorities',
  })
}
