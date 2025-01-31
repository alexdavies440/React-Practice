import { useState } from 'react'
import './App.css'
import Dog from './assets/Dog'
import Controls from './assets/Controls';

function App() {

  const [xAxis, setXAxis] = useState(700);

  const [yAxis, setYAxis] = useState(500);

  return (
    <>
        <Controls xAxis={xAxis} setXAxis={setXAxis} yAxis={yAxis} setYAxis={setYAxis}/>    
        <Dog xAxis={xAxis} yAxis={yAxis} />
    </>
  )
}

export default App
