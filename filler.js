const colors = ["red", "green", "yellow", "blue", "purple", "black"];
let gameBoard = document.querySelectorAll('.tile');

let gameBoardTile = [gameBoard[0]]

for(i = 0; i< gameBoard.length; i++){
    gameBoard[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}


// var colors = ["red", "green", "yellow", "blue", "purple", "black"];
// var tile1 = document.getElementsById("tile1");
// var rand = Math.floor(Math.random()*colors.length);
// tile1.style.backGroundColor = colors[rand];
// 
