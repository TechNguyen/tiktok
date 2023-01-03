import axios from 'axios'
const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
})
export const get = async (path, options = {}) => {
    const response = await instance.request(path, options)
    return response.data
}

export default instance
