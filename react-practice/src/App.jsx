import { useState } from 'react'
import './App.css'
import Student from './assets/Student'
import Header from './assets/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Student name="Looney" age={11} isCat={true}></Student>
      <Student name="Aldo" age={9} isCat={false}></Student>
      <Student></Student>
    </>
  )
}

export default App
