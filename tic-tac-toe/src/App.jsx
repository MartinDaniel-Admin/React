
import { useState } from 'react'
import Board from './components/Board'
import GameStatus from './components/GameStatus'
import ResetButton from './components/ResetButton'
import { getWinner, isDraw } from './utils/gameLogic'

import './App.css'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [isXTurn, setIsXTurn] = useState(true)

  const result = getWinner(board)
  const winner = result?.winner || null
  const winningCombination = result?.winningCombination || null

  const draw = isDraw(board)
  const gameFinished = Boolean(winner || draw)

  function handleSquareClick(index) {
    if (board[index] || gameFinished) return

    const updatedBoard = [...board]

    updatedBoard[index] = isXTurn ? 'X' : 'O'

    setBoard(updatedBoard)
    setIsXTurn((previousTurn) => !previousTurn)
  }

  function resetGame() {
    setBoard(Array(9).fill(null))
    setIsXTurn(true)
  }

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="w-full max-w-[400px] mx-5">
        <h1 className="text-5xl font-semibold text-white mb-8 text-center">
          Tic Tac Toe
        </h1>

        <GameStatus
          winner={winner}
          isDraw={draw}
          isXTurn={isXTurn}
          />

        <Board
          board={board}
          onSquareClick={handleSquareClick}
          winningCombination={winningCombination}
          gameFinished={gameFinished}
        />

        <ResetButton onReset={resetGame} />
      </div>
    </main>
  )
}

export default App
