/* GLOBALS */
var counter = 0;
let updateSpeed = 250;
var board = new Board();

function printPlayingField() {
    clearBoard();
    for (let i = 0; i < tetrimino.position.length; i++) {
        let position = tetrimino.position[i];
        board.updateCell(position[0], position[1], tetrimino.color);
    }
    $('.game-container').html(board.getHTMLTable());

    //Clear old positions
    for (let i = 0; i < tetrimino.position.length; i++) {
        let position = tetrimino.position[i];
        board.updateCell(position[0], position[1], "");
    }
}

function clearBoard() {
    $('.game-container').html("");
}

var tetrimino = new Tetrimino();

function update() {
    setTimeout(function() {
        printPlayingField();
        tetrimino.tick();
        update();
    }, updateSpeed);
}

update();

$("body").keydown(function(e) {
    switch (e.key) {
        case "ArrowLeft":
            tetrimino.translateLeft();
            break;
        case "ArrowRight":
            tetrimino.translateRight();
            break;
    }
    printPlayingField();
});