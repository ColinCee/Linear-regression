/* GLOBALS */
let updateSpeed = 200;
var board = new Board();
board.printPlayingField();

function update() {
    setTimeout(function() {
        board.tick();
        board.printPlayingField();
        if(!board.isGameOver()){
            update();
        }
    }, updateSpeed);
}

update();

$("body").keydown(function(e) {
	board.setCurrentTetriminoValue("");
    switch (e.key) {
        case "ArrowLeft":
            translateTetriminoLeft();
            break;
        case "ArrowRight":
            board.currentTetrimino.translateRight();
            break;
        case "ArrowUp":
        case "ArrowDown":
            board.currentTetrimino.rotate();
            break;
    }
    board.printPlayingField();
});

function translateTetriminoLeft() {
    let position = board.currentTetrimino.position;

    for (let i=0;i<position.length; i++) {
        let x = position[i][0];
        let y = position[i][1];

        if (board.playingField[x+1][y] !== "") {
            board.currentTetrimino.translateLeft();
        } else if (position[i+1][0] !== x+1) {
            board.currentTetrimino.translateLeft();
        }
    }

}