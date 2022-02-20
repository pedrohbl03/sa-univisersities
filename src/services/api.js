import { api } from './api.config'

export const getUniversities = async (country) => {
  return await api.get(`/search?country=${country}`)
    .then((response) => response.data)
    .catch((error) => error)
}