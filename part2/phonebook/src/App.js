import React, { useState } from 'react'
import People from './components/People'




const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const[ filterName, setFilterName] = useState('')

  const [ filterPersons,setFilterPersons] = useState(persons)



  const addPerson = (event) =>{
    event.preventDefault()
    const checkNameExists = persons.find(person => person.name === newName)

    if(checkNameExists !== undefined){
      alert(`${newName} is already added to the phonebook`)
      return
    }
      
    let newPerson = {
      id:persons.length + 1,
      name:newName,
      number:newNumber
      
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) =>{
    setNewNumber(event.target.value)
  }

  const handleNameFilter = (event) =>{
    setFilterName(event.target.value)

    if(isEmptyOrSpaces(event.target.value)){
      return
    }

    console.log(event.target.value)
    
    const tempFilterPersons = persons.filter(person =>
      (person.name.toLowerCase()).includes((event.target.value).toLowerCase())
    )
    setFilterPersons(tempFilterPersons)
  }
  
  function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}
  

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with<input value = {filterName} onChange = {handleNameFilter}/>
      </div>
      
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value = {newName} onChange = {handleNameChange}/>
        </div>
        <div>
          number: <input value = {newNumber} onChange = {handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filterPersons.map(person => {
         return <People person = {person.name} key = {person.id} number = {person.number} /> 
        })}
      </ul>
    </div>
  )
}

export default App