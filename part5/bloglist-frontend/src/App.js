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

  useEffect(()=>{
    const loggedUserJSON = window.localStorage.getItem('loggedInUser')
    if(loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.getAllUserBlogs(user.data.username)
      .then(data => setBlogs(data))
    }
  },[])

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
        const getBlogs = await blogService.getAllUserBlogs(getUser.data.username)
        const result = await Promise.all([getUser,getBlogs])
        setUser(getUser)
        setUsername('')
        setPassword('')
        setBlogs(getBlogs)

        window.localStorage.setItem(
          'loggedInUser',JSON.stringify(getUser)
        )

        console.log('result',result)
      }
      catch(error){
        console.log('error with credentials')
      }
  }

  const renderLoginForm = () =>{
    return(
      <LoginForm usernameVal ={username} passwordVal = {password} onChangePassword = {handlePassword} 
      onChangeUsername = {handleUsername} handleLogin = {handleLogin} />
    )

  }

  const userLogout = () =>{
    window.localStorage.clear()
    setUser(null)
  }

  const renderBlogs = () =>{
    return(
      <div>
        <h2>blogs</h2> 
        <p> {user.data.username} logged in </p>
        <button onClick={userLogout}> logout </button>
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