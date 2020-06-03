import request from '@/utils/request'

export function getListSlot(data) {
  return request({
    url: '/timetableDetails/filter/forEdit',
    method: 'post',
    data: data.data.postData,
    params: data.data.queryParam
  })
}

export function getDataRoom(data) {
  return request({
    url: 'rooms/filter',
    method: 'post',
    data: data.data.postData,
    params: data.data.params
  })
}

export function getDataLecturer(data) {
  return request({
    url: 'lecturers/filter',
    method: 'post',
    data: data.data.postData,
    params: data.data.params
  })
}

export function dataListClass(data) {
  return request({
    url: 'classes/filter',
    method: 'post',
    data: data.data.postData,
    params: data.data.params
  })
}

export function saveCalendar(data) {
  return request({
    url: 'timetableDetails',
    method: 'put',
    data: data.data
  })
}

export function dataListSubject(data) {
  return request({
    url: 'subjects/filter',
    method: 'post',
    data: data.data.postData,
    params: data.data.params
  })
}

export function getDataTeacherDetail(data) {
  return request({
    url: 'lecturers/forUpdate',
    method: 'post',
    data: data.data.postData,
    params: data.data.params
  })
}

export function getDataClassDetail(data) {
  return request({
    url: 'rooms/forUpdate',
    method: 'get',
    data: data.data.postData,
    params: data.data.params
  })
}

export function addConfirm(data) {
  return request({
    url: 'confirmations',
    method: 'post',
    data: data.data.postData.abc,
    params: data.data.params
  })
} swapData

export function swapData(data) {
  return request({
    url: 'timetableDetails/swap',
    method: 'put',
    data: data.data.postData,
    params: data.data.params
  })
}
