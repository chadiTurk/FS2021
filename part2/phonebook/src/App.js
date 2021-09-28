import React, { useState } from 'react'
import People from './components/People'
import Form from './components/Form'



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

    let tempPerson = persons.concat(newPerson)

    setPersons(tempPerson)
    setFilterPersons(tempPerson)
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
      <Form addPerson = {addPerson} newName = {newName}  handleNameChange = {handleNameChange} 
        newNumber = {newNumber} handleNumberChange = {handleNumberChange} />
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