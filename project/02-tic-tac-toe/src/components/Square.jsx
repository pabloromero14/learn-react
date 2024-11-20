// eslint-disable-next-line react/prop-types
export const Square = ({children, isSelected,updateBoard, index}) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`
  
    //click dentro del div y actualiza el tablero
    const handleClick = () => {
      updateBoard(index)
    }
  
    return(
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }