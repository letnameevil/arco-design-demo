import axios from 'axios'
import pinia from '@/store/store'
import { useGlobalLoadingStore } from '@/store'
import { Message } from '@arco-design/web-vue'

/**
 * utils
 **/
import Storage from '@/utils/storage'

const loadingStore = useGlobalLoadingStore(pinia)

class EvRequest {
  constructor(baseConfig) {
    this.axiosInstance = axios.create({
      baseURL: baseConfig?.baseURL,
      timeout: baseConfig?.timeout,
    })

    this.axiosInstance.interceptors.request.use(
      config => {
        if (Storage.get('token')) config.headers['Blade-Auth'] = 'bearer ' + Storage.get('token')
        return config
      },
      err => {
        loadingStore.isGlobalLoading = false
        throw new Error('request err')
      },
    )

    this.axiosInstance.interceptors.response.use(
      response => {
        loadingStore.isGlobalLoading = false
        if (response.status > 300) {
          Message.clear()
          Message.error({
            content: '服务出现了一些问题，请稍后重试',
            closable: true,
          })
          return Promise.resolve('error')
        }
        return response.data
      },
      err => {
        Message.error({
          content: err.response?.data?.msg || '服务出现了一些问题，请稍后重试',
          closable: true,
        })
        loadingStore.isGlobalLoading = false
        throw new Error('response error')
      },
    )
  }

  request(options) {
    this.axiosInstance.interceptors.request.use(config => {
      if (options?.isLoading) {
        loadingStore.isGlobalLoading = true
      }
      return config
    })
    return this.axiosInstance(options)
  }

  get(options) {
    return this.request(options)
  }

  post(options) {
    return this.request({
      method: 'POST',
      ...options,
    })
  }
}

export default EvRequest
