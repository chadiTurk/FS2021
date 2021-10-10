import React,{useState} from 'react'
import blogService from '../services/blogs'
const Blog = (props) => {

  const [visibility,setVisibility] = useState(true)
  const [buttonLabel,setButtonLabel] = useState('show')
  const hideWhenVisible = {display : visibility ? 'none' : ''}

  const toggleVisibility = () =>{
    setVisibility(!visibility)
    if(buttonLabel === 'none'){
      setButtonLabel('show')
    }
    else{
      setButtonLabel('none')
    }
  }

  const addLike = async () =>{
    try{
      const response = await blogService.addLike(props.blog.id)
      props.handleUpdateLike(response)
      console.log(response)
    }
    catch(error){
      console.log(error)
    }
   
  }

  const deleteBlog = async () =>{
    const result = window.confirm(`Are you sure you want to delete ${props.blog.title} ?`)

    if(!result)
      return

    console.log('result val')
    try{
      const response = await blogService.deleteBlog(props.blog.id)
      props.handleDeleteBlog(response)
      console.log('delete response',response)
    }catch(error){
      console.log(error)
    }
  }
  

  return(
    <div>
      <span> Title: {props.blog.title}</span><button onClick={toggleVisibility}>{buttonLabel}</button>
      <p style = {hideWhenVisible}>Url:{props.blog.url}</p>
      <div style = {hideWhenVisible} className ="likesAndUrlContainer">
        <span>Likes:{props.blog.likes}</span> <button onClick = {addLike}>like</button>
        <br/>
        <button onClick = {deleteBlog}>delete</button>
      </div>
      <br/>
    </div>
  )
}

export default Blog