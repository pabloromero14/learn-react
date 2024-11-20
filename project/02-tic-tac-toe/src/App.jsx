import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'

import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'
import { resetGameStorage, saveGameToStorage } from './logic/storage/index.js'

function App() {
  const [board,setBoard] = useState(() => {
    //si hay partida guardada
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  
  const [turn, setTurn] = useState(() =>{
    //turno de la partida guardada
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  //null => no hay ganador, false => empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    //si hay alguna partida guardada, la eliminamos
    resetGameStorage()
  }

  const updateBoard = (index) => {
    
    //si tiene algo la posicion no actualiza
    if(board[index] || winner) return
    
    //actualizar tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    
    //cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //guardar aquí partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    //comprobar ganador
    const newWinner = checkWinnerFrom(newBoard)
    if(newWinner){
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return(
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button> 
      <section className='game'>
        {
          board.map((square,index) => {
            return (
              <Square
                key = {index}
                index = {index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  ) 
}

export default App
