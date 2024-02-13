import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mount from './components/Mount'

function App() {

  return (
    <>
    <h1>React Life Cycle</h1>
      <Mount defaultName = "Coder" />
    </>
  )
}

export default App
