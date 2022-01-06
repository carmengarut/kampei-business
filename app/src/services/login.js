import axios from 'axios'
const baseUrl = '/api/login/'

export const loginUser = async credentials => {
  const { data } = await axios.post(baseUrl, credentials)
  return data
}
