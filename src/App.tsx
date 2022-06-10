import React from 'react'
import { Calculator } from './modules/calculator'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Calculator />
    </div>
  )
}

export default App
