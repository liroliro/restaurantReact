import React, { useEffect } from 'react';
import './App.css';

import axios from 'axios'

function App() {

  useEffect(()=> {
    axios.post('http://localhost:8000/', {
      firstName: 'Hanna',
      lastName: 'Goldhammer',
      email: 'hanna@gmail.com',
      phone: 13371379012,
      date: '21-12-22',
      time: '21.00',
      quantity: 133,
      message: 'jättemkt allergier',
    })
    .then(function (response) {
      console.log(response);
    })
  }, [])

  return (
    <div>
      
    </div>
  );
}

export default App;
