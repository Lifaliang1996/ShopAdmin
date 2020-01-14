import axios from 'axios'
import CONFIG from './config'

const instance = axios.create({
  baseURL: CONFIG.api,
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
})

export default instance
