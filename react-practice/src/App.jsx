import { useState } from 'react'
import './App.css'
import Dog from './assets/Dog'
import Button from './assets/Button';

function App() {

  const [xAxis, setXAxis] = useState(700);

  const [yAxis, setYAxis] = useState(500);

  function moveUp() {
    setYAxis(yAxis - 50);
  }
  function moveDown() {
    setYAxis(yAxis + 50);
  }
  function moveLeft() {
    setXAxis(xAxis - 50);
  }
  function moveRight() {
    setXAxis(xAxis + 50);
  }

  return (
    <>
        
        <Button direction="Up" method={moveUp} />
        <Button direction="Down" method={moveDown} />
        <Button direction="Left" method={moveLeft} />
        <Button direction="Right" method={moveRight} />
        <Dog xAxis={xAxis} yAxis={yAxis} />
    </>
  )
}

export default App
