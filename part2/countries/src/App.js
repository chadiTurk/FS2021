import React,{useState,useEffect} from 'react'
import axios from 'axios'

import Countries from './components/Countries'

const App = () =>{
  const [countries,setCountries] = useState()
  const [filterCountry,setFilterCountry] = useState('')

  useEffect(() =>{
    axios.get('https://restcountries.com/v3.1/all')
    .then(response =>{
      console.log('promise fulfilled')
      console.log(response.data[0].name);
      console.log('typeof response data',typeof(response.data[0].name))
      setCountries(response.data)
    })
  },[])

  const filterCountryQuery = (event) =>{
    setFilterCountry(event.target.value)
    console.log(event.target.value)
  }


  return(
    <div>
      <form>
        find countries <input onChange = {filterCountryQuery} value = {filterCountry}/>
      </form>
      <ul>
        {/* {countries.map(country => <Countries countryName = {country.name}/>)} */}
      </ul>
    </div>
  )
}

export default App;
