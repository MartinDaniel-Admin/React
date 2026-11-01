
function GameStatus({ winner, isDraw, isXTurn }) {
    let message
  
    if (winner) {
      message = `Winner: ${winner}`
    } else if (isDraw) {
      message = "It's a Draw!"
    } else {
      message = `Next Player: ${isXTurn ? 'X' : 'O'}`
    }
  
    return (
      <div
        aria-live="polite"
        className={`text-center mb-6 ${
          winner
            ? 'text-2xl font-bold text-green-400'
            : 'text-xl text-white'
        }`}
      >
        {message}
      </div>
    )
  }
  
  export default GameStatus
  