import request from '@/utils/ajax'

export function getList(params) {
  return request({
    url: '/table/list',
    method: 'get',
    params
  })
}
