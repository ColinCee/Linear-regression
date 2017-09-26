class Board {

    constructor() {
        this.rows = 22;
        this.columns = 10;
        this.playingField = new Array(this.columns);
        this.currentTetrimino = this.getNextTetrimino();
        this.initPlayingField();
    }

    initPlayingField() {
        for(let i=0;i<this.columns;i++) {
            this.playingField[i] = new Array(this.rows);
    		for(let j=0;j<this.rows;j++) {
    			this.playingField[i][j] = "";
    		}
    	}
    }

    getNextTetrimino() {
        let rand = Math.floor(Math.random() * 2) + 1
        switch (rand) {
            case 1: return new IBlock();
            case 2: return new ZBlock();
        }
    }

    setCurrentTetriminoValue(value) {
        for (let i = 0; i < this.currentTetrimino.position.length; i++) {
            let x = this.currentTetrimino.position[i][0];
            let y = this.currentTetrimino.position[i][1];
            this.playingField[x][y] = value;
        }
    }

    isGameOver() {
        let bottomPositions = this.currentTetrimino.getBottomMostPositions();
        for (let i=0;i<bottomPositions.length;i++) {
            let x = bottomPositions[i][0];
            let y = bottomPositions[i][1];

            if (y === 1 && this.playingField[x][y+1] !== "") {
                return true;
            }
        }
        return false;
    }

    isTetriminoColliding() {
        let positions = this.currentTetrimino.getBottomClearFacingPositions();
        for (let i=0; i<positions.length; i++){
            let x = positions[i][0];
            let y = positions[i][1];
            if (y < this.rows - 1 && this.playingField[x][y+1] !== "") {
                return true;
            }
        }

        return false;
    }

    tick(){
        if(!this.currentTetrimino.stopped && !this.isTetriminoColliding()) {
            this.setCurrentTetriminoValue("");
            this.currentTetrimino.tick();
        } else {
            this.currentTetrimino = this.getNextTetrimino();
        }

    }

    printPlayingField() {
        this.setCurrentTetriminoValue(this.currentTetrimino.color);
        $('.game-container').html(board.getHTMLTable());
    }

    getHTMLTable() {
        let html = "<table class='table is-bordered is-narrow'>";
        html += "<tbody>";

        for(let i=0;i<this.rows;i++) {
            html += "<tr>";
            for(let j=0;j<this.columns;j++) {
                html += "<td style='width: 20px; height: 20px; background-color:" + this.playingField[j][i] + "'></td>";
            }
            html += "</tr>";
        }
        html += "</tbody>";
        html += "</table>";

        return html;
    }
}
