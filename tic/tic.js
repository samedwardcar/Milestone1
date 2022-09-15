// ticCodePartI:const
let cells = document.querySelectorAll(".cell");
// const statusText =document.querySelector("#statusText");
// const restartBtn = document.querySelector("#restartBtn");
//fillerCodePartI:colorBtn
Array.from(cells);
const redButton = document.getElementById('#red');
redButton.addEventListener("click")
const greenButton = document.getElementById('#green');
const yellowButton = document.getElementById('#yellow');
const blueButton = document.getElementById('#blue');
const purpleButton = document.getElementById('#purple');
const blackButton = document.getElementById('#black');
const sixColors = ["red", "green", "yellow", "blue", "purple", "black"];
/*work on if time permits:

const fiveColors = sixColors.slice(0);
const fourColors = fiveColors.slice(0);*/

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

const fillerConditions = [
    [],
    [],
]

let options = ["", "", "", "", "", "", "", "",""]
let currentPlayer = "P1";
let running =true;

// ticCodePartIII:Functions

setTileColor()
function setTileColor(){
    for(i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = sixColors[Math.floor(Math.random() * sixColors.length)];
    };
    return;
};

// function adjacentTiles(){
//     if(cells[6].style.backgroundColor === cells[3].style.backgroundColor){
//         console.log("cells[6].style.backgroundColor");
//     }; 
// };
// function changingAdjColorTiles(){
//     if(cells[6].style.backgroundColor === cells[3].style.backgroundColor){
//         for (let j = colors.length - 1; j > 0; j--) {
//             const k = Math.floor(Math.random() * (i + 1));
//             [array[j], array[k]] = [array[k], array[j]];
//             cell[3].style.backgroundColor = 
//         };
//     };
    
//     else (cells[6].style.backgroundColor != cells[3].style.backgroundColor && cells[6].style.backgroundColor != cells[7].style.backgroundColor){
//         // 
//     };
// }; 
initializeGame();

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
/* Start on Tile Color selection */
function selectColor(){
    if (redButton =()=> redButton.addEventListener("click")){
        this.style.backGroundColor = sixColors[0];     
    }; elseif(greenButton.addEventListener("click"));{
        this.style.backGroundColor = sixColors[1];
    }; elseif(yellowButton.addEventListener("click"));{
        this.style.backGroundColor = sixColors[2];
    }; elseif(blueButton.addEventListener("click"));{
        this.style.backGroundColor = sixColors[3];
    }; elseif(purpleButton.addEventListener("click"));{
        this.style.backGroundColor = sixColors[4];
    }; elseif(blackButton.addEventListener("click"));{
        this.style.backGroundColor = sixColors[5];
    }; else {
        alert("`${currentPlayer} Please select a color first.`");    
    };
    return;
}
/* End of Tile Color selection*/
function changePlayer(){
    currentPlayer = (currentPlayer == "P1") ? "P2" : "P1";
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



