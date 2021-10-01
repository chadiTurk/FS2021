import axios from 'axios'
const baseUrl = '/api/persons'


const getAll = () =>{
    return axios.get(baseUrl)
}

const getOne = (id) =>{
    return axios.get(`${baseUrl}/${id}`)
}

const create = (newObject) =>{
    return axios.post(baseUrl,newObject)
}

const deleteNumber = (id) =>{
    console.log(baseUrl,id)
    return axios.delete(`${baseUrl}/${id}`)
}

const update = (id,newObject) =>{
    return axios.put(`${baseUrl}/${id}`,newObject)
}

export default { 
    getAll,
    getOne,
    create,
    deleteNumber,
    update,
  }