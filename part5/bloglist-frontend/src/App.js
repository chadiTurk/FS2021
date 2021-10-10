import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import LoginForm from './components/LoginForm'
import AddBlog from './components/AddBlog'
import Message from './components/Message'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'
import './App.css'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [user,setUser] = useState(null)
  const [title,setTitle] = useState('')
  const [author,setAuthor] = useState('')
  const [url,setUrl] = useState('')
  const [loginError,setLoginError] = useState(false)
  const [messageAdded,setMessageAdded] = useState(false)

  useEffect(()=>{
    const loggedUserJSON = window.localStorage.getItem('loggedInUser')
    if(loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.data.token)
      blogService.getAllUserBlogs(user.data.username)
      .then(data => setBlogs(data))
      setLoginError(false)
      setMessageAdded(false)
    }
  },[])

  const handleUsername = (event) =>{
    setUsername(event.target.value)
  }

  const handlePassword = (event) =>{
    setPassword(event.target.value)
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
        blogService.setToken(getUser.data.token)
        setLoginError(false)
        console.log('result',result)
      }
      catch(error){
        console.log('error with credentials')
        setLoginError(true)
      }
  }

  const handleTitle = (event) =>{
    setTitle(event.target.value)
  }

  const handleAuthor = (event) =>{
    setAuthor(event.target.value)
  }

  const handleUrl = (event) =>{
    setUrl(event.target.value)
  }

  const handleAddBlog = async (event) =>{
    event.preventDefault()

    const newBlog = {
      title:title,
      url:url,
      user:user.id
    }

    try{
     const result = await blogService.addBlog(newBlog)
     setBlogs(blogs.concat(result))
     setMessageAdded(true)
    }
    catch(error){
      console.log('error',error)
      setMessageAdded(false)
    }
  }

  const handleUpdateLike = updatedBlog =>{

    console.log('')
    const temp = blogs.map(blog =>{
      if(blog.id === updatedBlog.id){
        console.log('blog updated')
        return{...blog,likes:updatedBlog.likes}
      }
      else
        return blog
    })

    setBlogs(temp)
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
    setMessageAdded(false)
    setLoginError(false)
  }

  const renderBlogs = () =>{
    return(
      <div>
        <h2>blogs</h2> 
        <p> {user.data.username} logged in </p>
        <button onClick={userLogout}> logout </button>
        <br/>  <br/>
        <Togglable buttonLabel="new note"> 
          <AddBlog titleHandler = {handleTitle} authorHandler = {handleAuthor} urlHandler = {handleUrl}
            formHandler = {handleAddBlog} titleValue = {title} authorValue = {author} urlValue = {url}
            />
        </Togglable>
        <br/>  <br/>
        {blogs.map(blog =>
          <Blog key={blog.id} blog={blog} handleUpdateLike = {handleUpdateLike}/>
         )}
      </div>
    ) 
  }

  const setMessage = (message,status) =>{
    if(message === "" || message === null)
      return(
        <>
        </>
      )
    else{
      return(
        <Message message = {message} status = {status} />
      )
    }
  }

  return (
    <div>
      {user === null ? renderLoginForm(): renderBlogs()}
      {loginError ? setMessage("wrong password or username","error"): setMessage("","success")}
      {messageAdded ? setMessage(`a new blog named ${title} written by ${author} has been added`,"success"): setMessage("","success")}
    </div>
  )
}

export default App