// ticCodePartI:const
let cells = document.querySelectorAll(".cell");
const statusText =document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
//fillerCodePartI:colorBtn
Array.from(cells);

let redBtn = document.getElementById("redBtn");
let greenBtn = document.getElementById('#greenBtn');
let yellowBtn = document.getElementById('#yellow');
let blueBtn = document.getElementById('#blue');
let purpleBtn = document.getElementById('#purple');
let blackBtn = document.getElementById('#black');
// colorButtons = ["redBtn, greenBtn, yellowBtn, blueBtn, purpleBtn, blackBtn"];


const sixColors = ["red", "green", "yellow", "blue", "purple", "orange"];
/*work on if time permits:

const fiveColors = sixColors.slice(0);
const fourColors = fiveColors.slice(0);*/

// ticCodePartII:winStatement

const winConditions = [
    [0, 1, 2],
    [1, 2, 3],
    [4, 5, 6],
    [5, 6, 7],
    [8, 9, 10],
    [9, 10, 11],
    [0, 4, 8],
    [1, 5, 9],
    [2, 6, 10],
    [3, 7, 11],
    [0, 5, 10],
    [1, 6, 11],
    [2, 5, 8],
    [3, 6, 9],    
];

// const fillerConditions = [
//     [],
//     [],
// ]

let options = ["", "", "", "", "", "", "", "","", "", "", "", "", ""];
let currentPlayer = "P1";
let running = true;

initializeGame();

setTileColor()
// ticCodePartIII:Functions


    
    function startingTiles(){
        if(cells[8].style.backgroundColor === cells[9].style.backgroundColor && cells[9].style.backgroundColor === cells[4].style.backgroundColor);{
            setTileColor(cells[4,9]);
        }; elseif(cells[9].style.backgroundColor != cells[8].style.backgroundColor || cells[8].style.backgroundColor === cells[4].style.backgroundColor){
            setTileColor(cells[4]);
        }; elseif(cell[9].style.backgroundColor === cells[8].style.backgroundColor ||);
        {setTileColor(cells[9]);
        };  else{ 
            initializeGame();
        };
         return;
    };







    function setTileColor(){
    for(i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = sixColors[Math.floor(Math.random() * sixColors.length)];
    };
    return;
};
function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn!`;
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
function updateCell(cell, index, selectColor){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
};
/* Start on Tile Color selection */
// function selectColor(){
//     if(redBtn => redBtn.addEventListener("click")){this.style.backGroundColor === sixColors[0];};
//     else if(greenBtn => greenBtn.addEventListener("click")){this.style.backGroundColor === sixColors[1];};
//     else if(yellowBtn => yellowBtn.addEventListener("click")){this.style.backGroundColor === sixColors[2];};
//     else if(blueBtn => blueBtn.addEventListener("click")){this.style.backGroundColor === sixColors[3];};
//     else if(purpleBtn => purpleBtn.addEventListener("click")){this.style.backGroundColor === sixColors[4];};
//     else if(blackBtn => blackBtn.addEventListener("click")){this.style.backGroundColor === sixColors[5];};
//     else {};
//             return;       
// };
// statusText.textContent = `${currentPlayer} Please select a color first`};
/* End of Tile Color selection*/
function changePlayer(){
    currentPlayer = (currentPlayer == "P1") ? "P2" : "P1";
    statusText.textContent = `${currentPlayer}'s turn!`;
};
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
    };
};

function restartGame(){
    currentPlayer = currentPlayer;
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    setTileColor();
    running = true;
};