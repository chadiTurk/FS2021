import axios from 'axios'
const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () =>{
    const response = await axios.get(baseUrl)
    return response
}

const addAnecdote = async() =>{

}

const axiosRoutes = {
    getAll,
    addAnecdote
}

export default axiosRoutes