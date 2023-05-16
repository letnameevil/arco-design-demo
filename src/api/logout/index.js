import { request } from '../index'

/**
 * 登出接口
 * */
export const $api_logout = () => {
  return request.get({
    url: '/blade-auth/oauth/logout',
  })
}
