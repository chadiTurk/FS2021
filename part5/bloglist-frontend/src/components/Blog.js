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
  

  return(
    <div>
      <span> Title: {props.blog.title}</span><button onClick={toggleVisibility}>{buttonLabel}</button>
      <p style = {hideWhenVisible}>Url:{props.blog.url}</p>
      <div style = {hideWhenVisible}>
        <span>Likes:{props.blog.likes}</span> <button onClick = {addLike}>like</button>
      </div>

    </div>
  )
}

export default Blog