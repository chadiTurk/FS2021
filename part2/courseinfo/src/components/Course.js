import React from 'react'

const Header = ({ course }) => {
    return (
      <h2>{course.name}</h2>
    )
}

const Total = ({ course }) => {
    const sum = course.parts.reduce((sum,part) => {
        return sum + part.exercises
    },0)

    return(
        <h4>total of {sum} exercises </h4>
    ) 
}

const Part = ({part}) => {
    return (
    <p>
        {part.name} {part.exercises}
    </p>    
    )
}

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map((course) => <Part part = {course} key = {course.id}/>)}
        </div>
    )
}

const Course = ({course}) =>{
    return(
        <div>
            <Header course = {course}/>
            <Content course = {course}/>
            <Total course = {course}/>
        </div>
    )
}


export default Course