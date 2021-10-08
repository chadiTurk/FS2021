import axios from 'axios'

const login = async credentials =>{
    const response = await axios.post('/user/login',credentials)
    return response
}

const loginRoutes = {login}

export default loginRoutes
