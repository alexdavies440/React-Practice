import { useState } from 'react'
import './App.css'

import Header from './assets/Header'
import Footer from './assets/Footer'
import Food from './assets/Food'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Food></Food>
      <Footer></Footer>
    </>
  )
}

export default App
