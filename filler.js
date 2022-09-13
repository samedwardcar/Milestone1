var gameBoard = document.querySelectorAll('.tile');

for(i = 0; i< gameBoard.length; i++) {
let colors = ["red", "green", "yellow", "blue", "purple", "black"];
tile32.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}



// const gameBoarder = document.getElementById("board");
// let rows = document.getElementsByClassName("gridRow");
// let cell = document.getElementsByClassName("cell");

// function defaultBoard(){
//     madeRows(7);
//     makeColumns(8);
// }

// var colors = ["red", "green", "yellow", "blue", "purple", "black"];
// var tile1 = document.getElementsById("tile1");
// var rand = Math.floor(Math.random()*colors.length);
// tile1.style.backGroundColor = colors[rand];

