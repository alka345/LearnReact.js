import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
let [counter , setCounter]= useState(15)

  // let counter = 15;
const addValue = ( )=>{
  setCounter(counter+1)
  console.log('clicked',counter);
}

const removeValue = () =>{
  setCounter(counter-1);
  // console.log('clicked',counter);
}

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter Value: {counter} </h2>

    <button
    onClick={addValue}
    >Add Value</button>
    <br />
    <button
    onClick={removeValue}>Remove Value</button>
    <p>footer: {counter}</p>
     </>
  )
}

export default App
