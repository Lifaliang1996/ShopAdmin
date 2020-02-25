import axios from 'axios'
import CONFIG from './config'
import router from '@/router/router.js'
import store from '@/store/store.js'
import { Message } from 'element-ui'

const instance = axios.create({
  baseURL: CONFIG.api,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
})

instance.interceptors.request.use((config) => {
  config.withCredentials = true;
  if (config.type == 'form' && config.file != 'image') {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  } else {
    config.headers['Content-Type'] = 'application/json; charset=UTF-8';
  }
  return config
}, (err) => {
  Message.error('请求超时')
  return Promise.reject(err)
})

instance.interceptors.response.use(response => {
  if (response.data.errno == 200) {
    return response.data.data
  } else if (response.data.errno == 416) {
    Message.error('登录失效')
    setTimeout(() => {
      store.commit('clearUserInfo')
      router.push('/')
    }, 500);
  } else {
    return response
  }
}, error => {
  return Promise.reject(error);
});

export default instance
