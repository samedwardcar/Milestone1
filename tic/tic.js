// ticCodePartI:const
let cells = document.querySelectorAll(".cell");
// const statusText =document.querySelector("#statusText");
// const restartBtn = document.querySelector("#restartBtn");
//fillerCodePartI:colorBtn
Array.from(cells);
const redButton = document.getElementById('#red');
const greenButton = document.getElementById('#green');
const yellowButton = document.getElementById('#yellow');
const blueButton = document.getElementById('#blue');
const purpleButton = document.getElementById('#purple');
const blackButton = document.getElementById('#black');
const colors = ["red", "green", "yellow", "blue", "purple", "black"];

// ticCodePartII:winStatement

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let options = ["", "", "", "", "", "", "", "",""]
let currentPlayer = "SC";
let running =true;


// ticCodePartIII:Functions
initializeGame();
setTileColor()

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContext =`${currentPlayer}'s turn`; 
}



function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");
    if(options[cellIndex]!= "" || !running){
        return;
    }
}

function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "SC") ? "EC" : "SC";
    statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "SC";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}

function setTileColor(){
    for(i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        if(cells[6].style.backgroundColor === cells[6].style.backgroundColor){
            // 
        }

        else(){
            // 
        };    
    }
    return
};