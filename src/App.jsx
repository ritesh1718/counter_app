import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(prevCounter => {
      if (prevCounter >= 20) return prevCounter
      return prevCounter + 1
    })
  }

  const removeValue = () => {
    setCounter(prevCounter => {
      if (prevCounter <= 0) return prevCounter
      return prevCounter - 1
    })
  }

  return (
    <>
      <h1>Ritesh's First React App</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>
        Increase value
      </button>
      <br />
      <button onClick={removeValue}>
        Decrease value
      </button>
    </>
  )
}

export default App

