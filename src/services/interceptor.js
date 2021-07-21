import axios from "axios"

const axioxInterceptor = axios.create({
    timeout: 20000,
})

// interceptors.request
axioxInterceptor.interceptors.request.use((config) => {
    return config
})

// interceptors.response
axioxInterceptor.interceptors.response.use((response) => {
    return response
})

export default axioxInterceptor
