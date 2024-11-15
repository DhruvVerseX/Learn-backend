import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes,setJokes] = useState([]);
  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data);
  })
  .catch((error) => {
    console.log(error);
  })
  })
  return (
   <div>
    <h1>hello
    <p>jokes: {jokes.length}</p>
    {
      jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.question}</h3>
          <p>{joke.answer}</p>
        </div>
      ))
    }
    </h1>
   </div>
  )
}

export default App
