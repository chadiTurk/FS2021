import axios from 'axios'
const baseUrl = '/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const blogRoutes = {
  getAll
}

export default  blogRoutes