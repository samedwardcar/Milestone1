sixColors = ["red", "green", "yellow", "blue", "purple", "black"];
let colorBtns = document.querySelectorAll(".color");

Array.from(colorBtns);

boardHeight = 7;
boardWidth = 8;

board = new Array(boardHeight * boardWidth);

/*find better method
const winConditions = [
  
]*/

let playerOnesTile = [];
let playerTwosTiles = [];
let currentPlayer = "Player One";
let lastBtnColor = `${this.color}`;
let running = false;

initializeBoard();
renderBoard();
updateBoard();

function initializeBoard() {
  for (idx = 0; idx < board.length; idx++) {
    board[idx] = sixColors[Math.floor(Math.random() * sixColors.length)];
  }
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
// 

/*get adjacent*/
function getAdjacentColors(squareNumber) {
  []
  return [];
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
  }

  // Bottom
  if (coordinates[1] < boardHeight - 1) {
    adjacents.push(coordinatesToSquareNumber([coordinates[0], coordinates[1] + 1]))
  }

  return adjacents;
}
/*End adjcent*/

function intializeGame(){
  colorBtns.forEach(color => color.addEventListener("clicked", colorBtnClicked));
  restartBtn.addEventListener("dblclick", restartGame);
  statusText.textContent = `${currentPlayer}'s Turn:`;
  playerColor.textContent = `Color is Now: ${currentColor}`;
}

/*playeraction/responses*/


/*function colorBtnClicked() {
  const  = this.getAttribute("");
  if (options[] != "" || !running) {
    return;
  }
}

function colorBtnClicked() {
  let = this.getAttribute("");

  if (options[] != "" || !running) {
    return;
  }

  updateCell(this,);
  checkWinner();
}

function updateCell(, ,) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}*/

function changePlayer() {
  currentPlayer = (currentPlayer == "Player One") ? "Player Two" : "Player One";
  statusText.textContent = `${currentPlayer}'s turn`;
  selectedColor.text.Content = `Unavailbe Colors Are: ${currentColor}, ${this.color}`;
};

/*Better Method
function checkWinner() {
  let roundWon = false;

  for (let i = 0; i < winConditions.length; i++) {
    const condition = winConditions[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusText.textContent = `${currentPlayer} wins!`;
    selectedColor.text.Content = `Color is: ${currentColor}`;
    running = false;
  }
  else if (!options.includes("")) {
    statusText.textContent = `Draw!`;
    selectedColor.text.Content = `Color is: ${currentColor}`;
    running = false;
  }
  else {
    changePlayer();
  };
*/

function restartGame() {
  // currentPlayer = "currentPlayer";
  // options = ["", "", "", "", "", "", "", "", "", "", "", "", "", ""];
  statusText.textContent = `${currentPlayer}'s turn`;
  selectedColor.text.Content = `Color is: ${currentColor}`;
  cells.forEach(cell => cell.textContent = "");
  running = true;
};
/*player actions end*/