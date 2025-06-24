import BaseService from './BaseService'

export default class UserService {
  static list(params) {
    return BaseService.get('/users', params)
  }
  static findById(id) {
    return BaseService.get(`/users/${id}`)
  }
}