import React, { useState } from 'react'
import Timer from '../utils/timer'

function App() {

  const [elaspedTime, setElapsedTime] = useState(0)

  return (
    <div className="bg-black">
      <button >
        <div>
          <button onClick={() => {
            Timer({
              setElapsedTime: setElapsedTime
            })
          }}>Start Timer</button>
          <p>
            {elaspedTime}
          </p>
        </div>
      </button>
    </div>
  )
}

export default App
