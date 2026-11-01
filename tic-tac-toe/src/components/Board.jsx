import Square from './Square'

function Board({ board, onSquareClick, winningCombination, gameFinished }) {
  return (
    <div className="grid grid-cols-3 gap-2 mb-6">
      {board.map((square, index) => (
        <Square
          key={index}
          value={square}
          index={index}
          onClick={() => onSquareClick(index)}
          disabled={gameFinished || square !== null}
          isWinning={winningCombination?.includes(index)}
        />
      ))}
    </div>
  )
}

export default Board