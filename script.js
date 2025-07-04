function GameBoard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  //Board generation
  for (let i = 0; i < rows; i++){
    board[i] = [];
    for (let j = 0; j < columns; j++){
      board[i].push(Cell())
    }
  };

  const getBoard = () => board;

  const placeToken = (row, column, player) => {
    const cell = board[row][column];

    if (cell.getValue() != 0) return; 
    
    cell.addToken();
  };

  const printBoard = () => {
    const boardState = board.map((row) => row.map((cell) => cell.getValue()))
    console.log(boardState);
  };

  return { getBoard, placeToken, printBoard };
}

function Cell() {
  let value = 0;

  const addToken = (player) => {
    value = player;
  }

  const getValue = () => value;

  return {
    addToken,
    getValue
  }
}