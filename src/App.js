import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';


function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
      axios.get("https://hammerhead-app-5cwy4.ondigitalocean.app/api/lucas-pessoals/1")
      .then((response) => {
          setPosts(response.data)
          console.log("conectado")
      })
      .catch(() => {
          console.log("deu errado")
      })
  },[])
  



  {posts.map((posts, key) => {
  
  return (
    
     
        
        
          <div className="App" key={key}>
          <header className="App-header">
          <img src={posts.image} className="App-logo" alt="logo" />
          <p>
            {posts.tittle}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
            </header>
       </div>  

    )})};
  
}

export default App;
