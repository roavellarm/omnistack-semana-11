import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://g2-s2d.anonymous.mobile.exp.direct:3333',
  baseURL: 'http://192.168.0.191:3333/',
})

export default api
