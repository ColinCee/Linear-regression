class Board {

    constructor() {
        this.rows = 22;
        this.columns = 10;
        this.playingField = new Array(this.rows);
        for(var i=0;i<this.rows;i++) {
          this.playingField[i] = new Array(this.columns);
        }
        this.initPlayingField();
    }

    initPlayingField() {
        for(var i=0;i<this.rows;i++) {
    		for(var j=0;j<this.columns;j++) {
    			this.playingField[i][j] = " ";
    		}
    	}
    }

    updateCell(row, column, value) {
        board.playingField[row][column] = value;
    }

    getHTMLTable() {
        let html = "<table class='table is-bordered is-narrow'>";
        html += "<tbody>";

        for(let i=0;i<this.rows;i++) {
            html += "<tr>";
            for(let j=0;j<this.columns;j++) {
                html += "<td style='width: 20px; height: 20px; background-color:" + this.playingField[i][j] + "'></td>";
            }
            html += "</tr>";
        }
        html += "</tbody>";
        html += "</table>";

        return html;
    }
}
