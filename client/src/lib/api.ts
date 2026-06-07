import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  withCredentials: true
})

// Attach token automatically from localStorage (access token)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('df_access_token')
  if (token && config.headers) config.headers['Authorization'] = `Bearer ${token}`
  return config
})

// TODO: add response interceptor to handle 401 + refresh token flow

export default api
