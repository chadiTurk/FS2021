import React, { useEffect, useState } from 'react'
import People from './components/People'
import Form from './components/Form'
import Server from './services/server'

const App = () => {
  const [persons, setPersons] = useState([
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  const[ filterName, setFilterName] = useState('')

  const [ filterPersons,setFilterPersons] = useState([])

  useEffect(()=>{
    console.log("inside effect")
    Server.getAll()
    .then(response => {
      console.log('promise fulfilled')
      setPersons(response.data)
      setFilterPersons(response.data)
    }).catch(error =>{
      console.log(error)
    })
  },[])



  const addPerson = (event) =>{
    event.preventDefault()
    const checkNameExists = persons.find(person => person.name === newName)

    if(checkNameExists !== undefined){
      alert(`${newName} is already added to the phonebook`)
      return
    }
      
    let newPerson = {
      name:newName,
      number:newNumber
    }

    Server.create(newPerson)
    .then(response =>{
        console.log(`${response.data} has been added to the server`);
      
        setPersons(persons.concat(response.data))
        setFilterPersons(filterPersons.concat(response.data))
      }
    ).catch(error =>{
      console.log('failed to create a new entry',error)
    })

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
    setFilterPersons(filterPersons.concat(tempFilterPersons))
  }

  const deleteRender = (id) =>{
    Server.deleteNumber(id).then(response =>{
    
   })

   Server.getAll().then(response =>{
    setFilterPersons(filterPersons.concat(response.data))
  })
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
         return <People person = {person.name} key = {person.id} number = {person.number}  deleteUser = { () => {
          deleteRender(person.id)}}/> 
        })}
      </ul>
    </div>
  )
}

export default App