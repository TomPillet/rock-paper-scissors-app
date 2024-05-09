import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <header className='game-header'>
      <div className="game-title">ROCK<br/>PAPER<br/>SCISSORS</div>
      <div className="game-score">SCORE <span id="score">12</span></div>
    </header>
    
    <div className='container'>
      
      <div className="round rock">
        <p>rock</p>
      </div>
      <div className="round paper">
        <p>paper</p>
      </div>
      {/* <div className="round scissors">
        <p>scissors</p>
      </div>
      <div className="round lizard">
        <p>lizard</p>
      </div>
      <div className="round spock">
        <p>spock</p>
      </div>
     */}
    </div>
    
    </>
    )
  }
  
  export default App
  