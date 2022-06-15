import React from 'react'
import { Calculator } from 'modules/calculator'
import { Splitter } from 'ui/Icons'

function App() {
  return (
    <div className='app'>
      <div className='main'>
        <div className='splitter-icon'>
          <Splitter />
        </div>
        <Calculator />
      </div>
    </div>
  )
}

export default App
