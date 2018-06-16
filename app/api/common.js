import { ajax } from 'utils'

export const login = ajax.fetchJSONByPost('api/login')
export const register = ajax.fetchJSONByPost('api/register')
export const userInfo = ajax.fetchJSONByPost('/userInfo')
