import React, { useState, useEffect } from 'react';
import Racks from './components/racks'
import Map from './components/map'
import axios from 'axios';                                 

const App = () => {
  const [bikes, setBikes] = useState([])

  useEffect( () => {
    axios
    .get('http://data.foli.fi/citybike/smoove')  
    .then(response => {
      setBikes(response.data)
    })
  }, [])

  let result = []

  if(Array.isArray(bikes.result)) {
    result = bikes.result;
  }  

  const list = () => result.map(value => 
    <Racks
    key={value.name}
    value={value}
    />
  )

  console.log('result', result)


  return (
    <div>
      <h1>Turun kaupunkipyörät</h1>
      <div className='mapp'>
        
      </div>
      <div>
        {list()}
      </div>
    </div>
  )
  
}

export default App;