import request from '@/utils/request'

export function uploadFile(data) {
  return request({
    url: '/requests/generate',
    method: 'post',
    data: data.data.formData,
    params: data.data.headers,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
export function exportFile(data) {
  return request({
    url: '/requests/export',
    method: 'post',

    params: data.data.params,
    responseType:'blob'
  })
}

export function getList(data) {
  return request({
    url: '/expects/filter',
    method: 'post',
    data: data
  })
}

export function getListGeneration(data) {
  console.log('data', data)

  return request({
    url: 'timetables/generations',
    method: 'get',
    params: data
  })
}

export function startArrange(data) {
  return request({
    url: 'timetables/auto-arrange',
    method: 'post',
    params: data.queryParam,
    data: data.postData
  })
}

export function stopArrange(data) {
  return request({
    url: 'timetables/stop',
    method: 'post',
    data: data
  })
}

export function setAsDefault(data) {
  return request({
    url: 'timetables/setDefault',
    method: 'post',
    params: data
  })
}
