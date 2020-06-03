import request from '@/utils/request'

export function getListYear(data) {
  return request({
    url: '/semesters/filter',
    method: 'post',
    data
  })
}

export function getDataExpected(data) {
  return request({
    url: 'expects',
    method: 'get',
    params: data.data
  })
}

export function saveDataExpected(data) {
  return request({
    url: 'expects',
    method: data.data.method,
    data: data.data
  })
}

export function reuseExected(data) {
  return request({
    url: 'expects/reuse',
    method: 'get',
    params: data.data
  })
}
export function listExpectedForView(data) {
  return request({
    url: 'expects/listedForView',
    method: 'get',
    params: data.data
  })
}
