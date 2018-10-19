/* eslint-disable */
import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

const UserName = 'userName'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUserName(token) {
  return Cookies.get(UserName)
}
