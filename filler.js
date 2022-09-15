const redButton = document.getElementById('#red');
const greenButton = document.getElementById('#green');
const yellowButton = document.getElementById('#yellow');
const blueButton = document.getElementById('#blue');
const purpleButton = document.getElementById('#purple');
const blackButton = document.getElementById('#black');

const colors = ["red", "green", "yellow", "blue", "purple", "black"];
var gameBoard = document.querySelectorAll('.tile');
Array.from(gameBoard);
/*this is what I was missing from before. DON'T second guess yourself!*/
// let gameBoardTile = [gameBoard[0]]
// let gameBoardTiles = Array.from(gameBoard)*/
setBoard()    
function setBoard(){
    for(i = 0; i< gameBoard.length; i++){
        gameBoard[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    };
    return
}



/* This is practice code I used in making the game*/


/*
Used to generate random color from an array:
var colors = ["red", "green", "yellow", "blue", "purple", "black"];
var tile1 = document.getElementsById("tile1");
var rand = Math.floor(Math.random()*colors.length);
tile1.style.backGroundColor = colors[rand];*/