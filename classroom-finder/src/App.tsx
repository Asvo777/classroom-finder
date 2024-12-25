import { useState } from 'react'
import './App.css'

function App() {
  const [mapVisibility, setMapVisibility] = useState(false)

  if (!mapVisibility) {
  return (
    <>
      <div className=''>
        <div>
          <h1>
            UOttawa Campus
          </h1>
          </div>
        <div>
          <button onClick={() => setMapVisibility(true)}>AVAILABLE SPOTS</button>
        </div>
      </div>
    </>
  )
  } else {
    return (
      <>
      <div>
        <div>
          <h1>
            UOttawa Campus
          </h1>
          <img src="src\assets\uottawa-campus--map.jpg" alt="University of Ottawa' campus map " />
        </div>
        <div>
          <button onClick={() => setMapVisibility(false)}>HIDE MAP</button>
        </div>
      </div>
      </>
    )
  }
}

export default App
