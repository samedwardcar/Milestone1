sixColors = ["red", "green", "yellow", "blue", "purple", "black"];
const colorBtns = Array.from(document.querySelectorAll(".color"));



boardHeight = 7;
boardWidth = 8;

board = new Array(boardHeight * boardWidth);

/*find better method
const winConditions = [
  
]*/

let playerOneTiles = [48];
var squareNumber = playerOneTiles;
let playerTwosTiles = [7];
let currentPlayer = "Player One";
let playerOneColor
let playerTwoColor
let playerOneScore
let playerTwoScore

renderBoard();
enableButtons();
startGame();
updateBoard();

function startGame() {
  for (idx = 0; idx < board.length; idx++) {
    colors = getAdjacentColors(idx)
    let color
    if(idx === 48){
      colors.push(board[7])
    }    
    do{
      color = sixColors[Math.floor(Math.random() * sixColors.length)]
    } while(colors.includes(color))
    board[idx] = color;
  }
  playerOneColor = board[48];
  playerOneColor = board[7];
  playOneScore = 0;
  playerTwoScore = 0;
  
}

function renderBoard() {
  cellContainer = document.getElementById("cellContainer");
  for (idx = 0; idx < board.length; idx++) {
    cell = document.createElement("div");
    cell.setAttribute("id", "cell" + idx);
    cell.setAttribute("class", "cell");
    cell.setAttribute("cellIndex", idx);
    cell.innerHTML = idx + 1; // $emove + 1 to display cell number
    cellContainer.appendChild(cell);
  }
}

function updateBoard() {
  for (idx = 0; idx < board.length; idx++) {
    cell = document.getElementById("cell" + idx);
    cell.style.backgroundColor = board[idx];
  }
}

function enableButtons(){
  colorBtns.forEach(color => color.addEventListener('click', colorSelectionHandler));
  
}

function colorSelectionHandler(e) {
  // toDo selectCurrentPlayer
  
  
  const color = e.target.id.replace("Btn","")
  adjacentOfColor = getAdjacentOfClaimedByColor(playerOneTiles/*${currentPlayer}*/, color)
  if(adjacentOfColor.length){
    for(tile of playerOneTiles){
      board[tile] = color
    }
    playerOneTiles = playerOneTiles.concat(adjacentOfColor)
  }
  playerOneTileCount.textContext = `${playerOneTiles.length-1}`;
  playerTwoTileCount.textContext = `${playerTwosTiles.length-1}`;
  
  updateBoard();
  switchPlayer();
  /*
  setNewPlayercolor = ${currentColor}
  */
}

function selectCurrentPlayer() {
    currentPlayer = (currentPlayer == "playerOne") ? "playerTwo" : "playerOne";
    statusText.textContent = `${currentPlayer}'s turn!`;
  };

/*get adjacent*/
function getAdjacentColors(squareNumber) {
  const adjacentColors = [];
  const adjacents = getAdjacents(squareNumber);
  for(adjacent of adjacents){
    const color = board[adjacent]
    if(!adjacentColors.includes(color)){
      adjacentColors.push(color);
    }
  }
  
  return adjacentColors;
}

function getAdjacentOfClaimedByColor(claimed,color){
  const stuff = [];
  for(c of claimed){
    adj = getAdjacents(c);
    for(a of adj){
      if(board[a] === color && !stuff.includes(c)){
        stuff.push(a)
      }
    }
  }
  return stuff
}



  
function squareNumberToCoordinates(squareNumber) {
  return [(squareNumber % boardWidth), Math.floor(squareNumber / boardWidth)]
}

function coordinatesToSquareNumber(coordinates) {
  return boardWidth * coordinates[1] + coordinates[0];
}

function getAdjacents(squareNumber) {
  adjacents = []
  coordinates = squareNumberToCoordinates(squareNumber);
  

  // Left
  if (coordinates[0] > 0) {
    adjacents.push(coordinatesToSquareNumber([coordinates[0] - 1, coordinates[1]]));
  }

  // Right
  if (coordinates[0] < boardWidth - 1) {
    adjacents.push(coordinatesToSquareNumber([coordinates[0] + 1, coordinates[1]]));
  }

  // Top
  if (coordinates[1] > 0) {
    adjacents.push(coordinatesToSquareNumber([coordinates[0], coordinates[1] - 1]));
  }selectedColor.textContent = `Red, Green, Yellow, Blue, Purple, Black`;

  // Bottom
  if (coordinates[1] < boardHeight - 1) {
    adjacents.push(coordinatesToSquareNumber([coordinates[0], coordinates[1] + 1]))
  }

  return adjacents;
}
/*End adjcent*/




function restartGame() {
  // currentPlayer = "currentPlayer";
  // options = ["", "", "", "", "", "", "", "", "", "", "", "", "", ""];
  statusText.textContent = `${currentPlayer}'s turn`;
  selectedColor.text.Content = `Color is: ${currentColor}`;
  cells.forEach(cell => cell.textContent = "");
  running = true;
};


score = playerOneTiles
/*player actions end*/