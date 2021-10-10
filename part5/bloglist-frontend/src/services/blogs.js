import axios from 'axios'
const baseUrl = '/blogs'
let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}


const getAll = () => {
  const request = axios.get(`${baseUrl}/all`)
  return request.then(response => response.data)
}

const getAllUserBlogs = username =>{
  const request = axios.get(`${baseUrl}/user/${username}`)
  console.log(request)
  return request.then(response => response.data)
}

const addBlog = body =>{
  const config = {
    headers: { Authorization: token },
  }
  const request = axios.post(baseUrl,body,config)
  return request.then(response =>response.data)
}

const addLike = _id =>{
  const request = axios.put(`${baseUrl}/${_id}`)
  return request.then(response => response.data)
}

const deleteBlog = _id =>{
  const request = axios.delete(`${baseUrl}/${_id}`)
  return request.then(response =>response.data)
}
 
const blogRoutes = {
  getAll,
  getAllUserBlogs,
  addBlog,
  setToken,
  addLike,
  deleteBlog
}

export default  blogRoutes