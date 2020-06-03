import request from '@/utils/request'

export function getListReport(data) {
  return request({
    url: '/requests/filter',
    method: 'post',
    data: data.data
  })
}

export function addReport(data) {
  return request({
    url: '/requests',
    method: 'post',
    data: data.data
  })
}

export function approveReport(data) {
  return request({
    url: '/requests',
    method: 'put',
    data: data.data
  })
}
