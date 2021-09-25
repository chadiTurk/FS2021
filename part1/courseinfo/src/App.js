import React from 'react'

const Header = ({course}) => {

  return(
    <h1>{course.name}</h1>
  )

}

const Part = ({part,exercise} ) => {

  return <p> {part} {exercise} </p>
}

const Content = ({course}) => {

  let parts = course["parts"]

  return(
    <>
    <Part part = {parts[0].name} exercise = {parts[0].exercises}/>
    <Part part = {parts[1].name} exercise = {parts[1].exercises}/>
    <Part part = {parts[2].name} exercise = {parts[2].exercises}/>
    </>
  )

}

const Total = ({course}) => {

  let total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises 
  
  return(
    <p> Number of exercises {total} </p>
  )
 
}

const App = () => {

  const course = {

    name:'Half stack application development',
    parts:[
      {
        name: 'Fundamentals of react',
        exercises :10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises:14
      }
      
    ]

  }

 return(
   <>
   <Header course = {course}/>
   <Content course = {course}/>
   <Total course = {course}/>
   </>
 )
  
}

export default App