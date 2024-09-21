import axios from 'axios'
import CustomError from './CustomError'

/**
 * @typedef {Object} results
 * @property {Ref<Object>} data
 * @property {Ref<string>} error
 */

const env = import.meta.env

export const service = axios.create({
  baseURL: env.MODE !== env.VITE_DEVELOPMENT ? env.VITE_HTTP_BASE_URL : '/api',
  timeout: 1000 * 30, // request timeout
  headers: {},
})

service.interceptors.request.use(
  config => {
    // const authStore = useAuthStore()
    // const token = authStore.accessToken
    // if (token) config.headers.token = token

    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  },
)

// response interceptor
service.interceptors.response.use(
  response => {
    const { data, code, msg } = response.data

    if (code != 1) {
      throw new CustomError(msg, code)
    }

    return data
  },
  error => {
    if (error.response.data && error.response.data?.code) {
      const { code, msg = '服务器错误' } = error.response.data
      return Promise.reject(new CustomError(msg, code))
    } else {
      return Promise.reject(new CustomError('服务器错误', null))
    }
  },
)
