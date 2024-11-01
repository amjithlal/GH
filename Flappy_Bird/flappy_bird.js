//board

let board;
let boardHeight = 640 ;
let boardWidth = 360;
let context;

//bird

let birdWidth = 494;//ratio = 494:505
let birdHeight = 505;
let birdX = boardWidth


window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d"); //Used for drawing on the board
}