import request from '@/utils/request'
export function getListcalendar(data) {
  return request({
    url: '/timetableDetails/filter/forView',
    method: 'post',
    data: data.data
  })
}
export function getConfirmByLecturer(data) {
  return request({
    url: '/confirmations',
    method: 'get',
    params: data.data.params
  })
}
export function updateConfirmByLecturer(data) {
  return request({
    url: '/confirmations',
    method: 'put',
    params: data.data.params,
    data: data.data.postData
  })
}
