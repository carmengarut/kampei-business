import axios from 'axios'
const baseUrl = '/api/users/'

export const registerUser = async userObject => {
  const { data } = await axios.post(baseUrl, userObject, {})
  return data
}
