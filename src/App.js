import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';


function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("https://hammerhead-app-5cwy4.ondigitalocean.app/api/lucas-pessoals/1")
      .then((response) => {
        console.log(response.data)
        
      })
      .catch(() => {
        console.log("deu errado")
      })
  }, [])

return(
  <div >
    {posts.map((post, key) => {

      return (
        
        <div key={key}>
          <h1>{post.tittle}</h1>
          <p>olá</p>
          <img src="" alt="" />
        </div>
      )
    })}

    
  </div>
)

}

export default App;
