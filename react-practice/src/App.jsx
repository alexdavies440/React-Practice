import { useState } from 'react'
import './App.css'
import List from './assets/List'

function App() {

  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 105 },
    { id: 3, name: "orange", calories: 45 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
    { id: 6, name: "lime", calories: 20 },
    { id: 7, name: "kiwi", calories: 42 },
    { id: 8, name: "watermelon", calories: 85 }];

  const vegetables = [
    { id: 9, name: "potatoes", calories: 110 },
    { id: 10, name: "celery", calories: 15 },
    { id: 11, name: "carrots", calories: 25 },
    { id: 12, name: "corn", calories: 63 },
    { id: 13, name: "broccoli", calories: 50 },
  ]

  const fruitList = <List items={fruits} category="fruits"/>

  const veglist = <List items={vegetables} category="vegetables"/>


  return (
    <>
    {fruits.length > 0 ? fruitList : null}
    {vegetables.length > 0 ? veglist : null}
    </>
  )
}

export default App
