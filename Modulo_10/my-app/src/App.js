import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Form';

const App = () => {
  
  const [marcas,setMarcas] = useState([])

  useEffect(()=> {
    fetch('https://parallelum.com.br/fipe/api/v1/carros/marcas', {
      method:'GET'
    })
    .then(response => response.json())
    .then(data => setMarcas(data))
    .catch(err => console.log(err))
  
  }) 

  return(
    <div className='App'>
      <Form marcas={marcas}/>
    </div>
  )

}

export default App;