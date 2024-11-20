import { WIN_COMBOS } from "../constants.js"

export const checkWinnerFrom = (boardToCheck) => {
    
    //revisamos las combinaciones ganadoras
    for (const combo of WIN_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] && 
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    //no hay ganador
    return null
  }

  export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)  
  }