class ZBlock {
    constructor() {
        this.stopped = false
        //Rotated is where the block is when it is vertical
        this.rotated = false;
        this.position = [[3,0],[4,0],[4,1],[5,1]];
        this.color = 'red';
    }

    tick() {
        if(this.getBottomMostPositions()[0][1] < 21) {
            for (let i = 0; i < this.position.length; i++) {
                this.position[i][1] += 1;
            }
        } else {
            this.stopped = true;
        }
    }

    rotate() {
        if (this.rotated) {
            this.position[0][1] -= 1;
            this.position[1][0] += 1;
            this.position[2][1] += 1;
            this.position[3] = [this.position[3][0] + 1, this.position[3][1] + 2];
        } else {
            this.position[0][1] += 1;
            this.position[1][0] -= 1;
            this.position[2][1] -= 1;
            this.position[3] = [this.position[3][0] - 1, this.position[3][1] - 2];
        }
        this.rotated = !this.rotated;
    }
    translateLeft() {
        //Check that moving right won't go out of bounds
        if (this.position[0][0] > 0) {
            for (let i = 0; i < this.position.length; i++) {
                this.position[i][0] -= 1;
            }
			return true;
        }
    }
    translateRight() {
        //Check that moving right won't go out of bounds
        if(this.position[3][0] < 9) {
            for (let i = 0; i < this.position.length; i++) {
                this.position[i][0] += 1;
            }
			return false;
        }
    }

    getBottomClearFacingPositions() {
        if (this.rotated) {
            return [this.position[0], this.position[2]];
        } else {
            return [this.position[0], this.position[2], this.position[3]];
        }
    }

    getBottomMostPositions() {
        if (this.rotated) {
            return [this.position[0]];
        } else {
            return [this.position[2], this.position[3]];
        }
    }
}
