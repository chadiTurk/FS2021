import React,{useState} from 'react'

const Display = ({counter,name}) =>{

  return(
    <div> 
      <p>{counter}</p>
      <p>{name}</p>
    </div>
  )

}

const Button = ({onClick,text}) =>{

  return(
    <button onClick = {onClick}>
      {text}
    </button>
  )

}



const App = () =>{
  const [counter,setCounter] = useState(1)
  const [name,setName] = useState("hello there")


  const changeName = () =>{
    setName("Weeee")
  }

  const increaseBy1 = () =>{

   setCounter(counter +1)
   

  }

  const decreaseBy1 = () =>{

    setCounter (counter - 1)

  }

  const resetCounter = () =>{

    setCounter(0)

  }
  
  return(
    <div> 
      <Display counter = {counter} name = {name}/>
      <Button onClick = {increaseBy1} text = "Increment by 1"/>
      <Button onClick = {decreaseBy1} text = "Decrease by 1"/>
      <Button onClick = {resetCounter} text = "Reset counter"/>
      <Button onClick = {changeName} text = "Update name"/>
    </div>
    
  )
  

}
export default App;
