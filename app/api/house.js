import { ajax } from 'utils'

export const houseCheckList = ajax.fetchJSONByPost('api/users')
export const houseDetail = ajax.fetchJSONByPost('/house/detail')
