import axios, { AxiosError } from 'axios'

const api = axios.create({
  baseURL: 'https://tools.texoit.com/backend-java/api/movies',
})

export const get = async (url: string, params?: any) => {
  try {
    const response = await api.get(url, { params })
    return response.data
  } catch (error) {
    const err = error as AxiosError
    throw err.response?.data
  }
}
