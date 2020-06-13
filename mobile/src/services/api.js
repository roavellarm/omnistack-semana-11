import axios from 'axios'

const api = axios.create({
  baseURL: 'https://apibth.herokuapp.com/',
})

export default api
