/* GLOBALS */
var counter = 0;
const updateSpeed = 5;
var board = new Board();


//REMOVE THIS SHIT AND USE A THE BULMA TABLE GOD DAMN IT
function printPlayingField() {
    clearBoard();
    $('.game-container').html(board.getHTMLTable());
}

function clearBoard() {
    $('.game-container').html("");
}

var tetrimino = new Tetrimino();

function updateDiagonals() {
    setTimeout(function() {
        for(let i=0;i<tetrimino.position.length;i++) {
            let position = tetrimino.position[i];
            board.updateCell(position[0], position[1], tetrimino.color);
        }
        printPlayingField();
        //Clear old positions
        for(let i=0;i<tetrimino.position.length;i++) {
            let position = tetrimino.position[i];
            board.updateCell(position[0], position[1], "");
        }
        tetrimino.tick();

        counter++;
        if(counter<board.rows) {
            updateDiagonals();
        }

    }, 1000);
}

updateDiagonals();
