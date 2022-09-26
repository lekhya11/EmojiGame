import './index.css'

const NavBar = props => {
  const {isGameInProgress, currentScore, topScore} = props

  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="heading">Emoji Game</h1>
      </div>
      <div>
        {isGameInProgress && (
          <div className="score-container">
            <p className="label">Score: {currentScore}</p>
            <p className="label">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
