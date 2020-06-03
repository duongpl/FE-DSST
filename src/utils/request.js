import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 100000000, // request timeout
  headers: { 'X-Custom-Header': 'foobar' }
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is s
    if (getToken()) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['GoogleId'] = getToken()
    }
    return config
  }, error => {
    console.log(error, 'abaddfs') // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(new Error(error || 'Error'))
    // return Promise.reject(error)
  }

)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    return res
  },
  error => {
    Message({
      message: error.response.data,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(new Error(error || 'Error'))
  }
)

export default service
