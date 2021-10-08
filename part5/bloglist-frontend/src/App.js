import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [user,setUser] = useState(null)

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])


  const handleUsername = (event) =>{
    setUsername(event.target.value)
    console.log('username',username)
  }

  const handlePassword = (event) =>{
    setPassword(event.target.value)
    console.log('password',password)
  }

  const handleLogin = async(event) =>{
    event.preventDefault()

    try{
      const getUser = await loginService.login({username,password}) 
      console.log(getUser)
      setUser(getUser)
      setUsername('')
      setPassword('')
    }
    catch(exception){

      console.log('Wrong credentials')
      setTimeout(() => {
        console.log(null)
      }, 5000)
    }

   
    
  }

  const renderLoginForm = () =>{
    return(
      <LoginForm usernameVal ={username} passwordVal = {password} onChangePassword = {handlePassword} 
      onChangeUsername = {handleUsername} handleLogin = {handleLogin} />
    )

  }

  const renderBlogs = () =>{
    return(
      <div>
        <h2>blogs</h2> 
        <p> {user.data.username} logged in </p>
        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} />
         )}
      </div>
    )
  }

  return (
    <div>
      {user === null ? renderLoginForm(): renderBlogs()}
    </div>
  )
}

export default App