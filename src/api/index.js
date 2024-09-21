import { service } from './service'

export function toRegister(id) {
  return service.post('/register', { id })
}

export function getUser() {
  return service.get('/user')
}
