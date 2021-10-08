import axios from 'axios'
const baseUrl = '/blogs'

const getAll = () => {
  const request = axios.get(`${baseUrl}/all`)
  return request.then(response => response.data)
}

const getAllUserBlogs = username =>{
  const request = axios.get(`${baseUrl}/user/${username}`)
  console.log(request)
  return request.then(response => response.data)
}

const blogRoutes = {
  getAll,
  getAllUserBlogs
}

export default  blogRoutes