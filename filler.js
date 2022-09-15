const redButton = document.getElementById('#red');
const greenButton = document.getElementById('#green');
const yellowButton = document.getElementById('#yellow');
const blueButton = document.getElementById('#blue');
const purpleButton = document.getElementById('#purple');
const blackButton = document.getElementById('#black');

let colors = ["red", "green", "yellow", "blue", "purple", "black"];
var gameBoard = document.querySelectorAll('.tile');
Array.from(gameBoard);
//this is what I was missing from before. DON'T second guess yourself!


// let gameBoardTile = [gameBoard[0]]
// function setBoard(){
// let gameBoardTiles = Array.from(gameBoard)    
for(i = 0; i< gameBoard.length; i++){
    gameBoard[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    // return setBoard;
};
// }

// function colorRed(){
//     redButton.addEventListener('click', function(){
//     let gameBoard[49].style.backgroundColor ="red";)
// }

// 	console.log("click");
// });
// var colors = ["red", "green", "yellow", "blue", "purple", "black"];
// var tile1 = document.getElementsById("tile1");
// var rand = Math.floor(Math.random()*colors.length);
// tile1.style.backGroundColor = colors[rand];
// 
