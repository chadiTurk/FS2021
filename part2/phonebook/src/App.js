import React, { useState } from 'react'
import People from './components/People'




const App = () => {
  const [ persons, setPersons ] = useState([
  ]) 
  const [ newName, setNewName ] = useState('')

  const addPerson = (event) =>{
    event.preventDefault()

    
    let newPerson = {
      name:newName,
      id:persons.length + 1
    }

    setPersons(persons.concat(newPerson))
  }

  const handleNameChange = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)



  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value = {newName} onChange = {handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => {
         return <People person = {person.name} key = {person.id} /> 
        })}
        
      </ul>
    </div>
  )
}

export default App