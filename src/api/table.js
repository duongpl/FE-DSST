import request from '@/utils/request'

export function getListUser(data) {
  return request({
    url: '/lecturers/filter',
    method: 'post',
    data:data
  })
}

export function addUser(data) {
  return request({
    url: '/lecturers',
    method: 'post',
    data: data.data
  })
}

export function updateUser(data) {
  return request({
    url: '/lecturers',
    method: 'put',
    data: data.data
  })
}

export function deleteUser(data) {
  return request({
    url: `/lecturers/${data.data}`,
    method: 'delete'
  })
}

export function changeHOD(data) {
  return request({
    url: '/lecturers/transferRole',
    method: 'put',
    params: data.data
  })
}

export function changeStatus(data) {
  return request({
    url: `/lecturers/${data.data.lecturerGoogleId}/updateStatus`,
    method: 'put',
    params: data.data.params
  })
}
