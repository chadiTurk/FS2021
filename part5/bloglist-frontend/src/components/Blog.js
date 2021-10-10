import React,{useState} from 'react'
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
  

  return(
    <div>
      <span> Title: {props.blog.title}</span><button onClick={toggleVisibility}>{buttonLabel}</button>
      <p style = {hideWhenVisible}>Url:{props.blog.url}</p>
      <p style = {hideWhenVisible}>Likes:{props.blog.likes}</p>
    </div>
  )
}



 


export default Blog