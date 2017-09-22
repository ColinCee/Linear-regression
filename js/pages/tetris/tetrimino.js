class Tetrimino {
    constructor() {
        //Rotated is where the block is when it is vertical
        this.rotated = false;
        this.position = [[0,0],[0,1],[0,2],[0,3]];
        this.color = 'cyan';
    }

    tick() {
        if(this.position[3][0] < 21) {
            for (let i = 0; i < this.position.length; i++) {
                this.position[i][0] += 1;
            }
        }
    }

    rotate() {
        if (this.rotated) {
            for(let i=0;i<this.position.length; i++) {
                this.position[i][0] = this.position[i][0];
                this.position[i][1] = this.position[0][1] + i;
            }
        } else {
            for(let i=0;i<this.position.length; i++) {
                this.position[i][0] = this.position[i][0] + i;
                this.position[i][1] = this.position[0][1];
            }
        }
    }
    translateLeft() {
        //Check that moving right won't go out of bounds
        if (this.position[0][1] > 0) {
            for (let i = 0; i < this.position.length; i++) {
                this.position[i][1] -= 1;
            }
        }
    }
    translateRight() {
        //Check that moving right won't go out of bounds
        if(this.position[3][1] < 10) {
            for (let i = 0; i < this.position.length; i++) {
                this.position[i][1] += 1;
            }
        }
    }
}