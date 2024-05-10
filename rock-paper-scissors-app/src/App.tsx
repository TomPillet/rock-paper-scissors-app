import './App.css'

function App() {
  
  return (
    <>
    
    <div className='game-container'>
      <header className='game-header'>
        <div className="game-title">ROCK PAPER SCISSORS</div>
        <div className="game-score">SCORE <span id="score">12</span></div>
      </header>
      
      <div className="game-board">
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
        </div>*/}
      </div>
    </div>

     <footer className='game-footer'>
      <div className="game-rules">
        <button id="btn-rules">RULES</button>
      </div>
     </footer>
    </>
    )
  }
  
  export default App
  