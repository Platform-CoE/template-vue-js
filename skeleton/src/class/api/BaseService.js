import apiInstance from '@/api';

export default class BaseService {
  static get(url, params) {
    return apiInstance.get(url, { params });
  }
  static post(url, data) {
    return apiInstance.post(url, data);
  }
  static put(url, data) {
    return apiInstance.put(url, data);
  }
  static delete(url) {
    return apiInstance.delete(url);
  }
}
