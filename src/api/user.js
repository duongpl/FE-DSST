import request from '@/utils/request'
import requestGoogle from '@/utils/requestGoogle'

export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}

export function loginGoogle(data) {
  const objectToSend = {
    accessToken: data.accessToken
  }
  return requestGoogle({
    url: '/google/login',
    method: 'get',
    params: objectToSend
  })
}

export function getStatus(data) {
  return request({
    url: 'lecturers/filter',
    method: 'post',
    data: data
  })
}
