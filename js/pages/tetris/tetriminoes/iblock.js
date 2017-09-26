class IBlock {
    constructor() {
        this.stopped = false
        //Rotated is where the block is when it is vertical
        this.rotated = false;
        this.position = [[3,0],[4,0],[5,0],[6,0]];
        this.color = 'cyan';
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
            this.position[0] = [this.position[1][0] - 1, this.position[1][1]]
            this.position[2] = [this.position[1][0] + 1, this.position[1][1]]
            this.position[3] = [this.position[1][0] + 2, this.position[1][1]]
            this.rotated = !this.rotated;
        } else {
            //Don't rotate if the block has past the 18th row
            if(this.position[0][1] < 18) {
                this.position[0] = [this.position[1][0], this.position[1][1] - 1]
                this.position[2] = [this.position[1][0], this.position[1][1] + 1]
                this.position[3] = [this.position[1][0], this.position[1][1] + 2]
                this.rotated = !this.rotated;
            }
        }

    }
	/*
	* Translation should check for multiple conditions:
	* 1. Translating won't move the tetrimino out of bounds
	* 2. Translating won't move the tetrimino into another tetrimino
	*/
    translateLeft() {
        //Check that moving left won't go out of bounds
        if (this.position[0][0] > 0) {
            for (let i = 0; i < this.position.length; i++) {
                this.position[i][0] -= 1;
            }
			return true;
        }
		return false;
    }
    translateRight() {
        //Check that moving right won't go out of bounds
        if(this.position[3][0] < 9) {
            for (let i = 0; i < this.position.length; i++) {
                this.position[i][0] += 1;
            }
			return true;
        }
		
		return false;
    }

    getBottomClearFacingPositions() {
        if (this.rotated) {
            return [this.position[3]];
        } else {
            return this.position;
        }
    }

    getBottomMostPositions() {
        return this.getBottomClearFacingPositions();
    }
}
