import Platform from "./platform";

class Word {
    constructor(string, { x, y }) {
        this.string = string;
        this.position = {
            x: x,
            y: y
        };
        this.index = 0;
        this.letterStates = {};
        for (let i = 0; i < this.string.length; i++) {
            this.letterStates[i] = "red";
        }
    }

    draw(ctx) {
        ctx.font = '32px CuteFrog';
      
        const textWidth = ctx.measureText(this.string).width;
        const centerX = this.position.x + Platform.WIDTH / 2 - textWidth / 2;
      
        let accumulatedWidth = 0; // Accumulated width of the drawn letters
      
        for (let i = 0; i < this.string.length; i++) {
          const letterState = this.letterStates[i];
      
          ctx.fillStyle = letterState === 'green' ? '#00BD00' : '#BF0436';
      
          const letterX = centerX + accumulatedWidth;
          ctx.fillText(this.string[i], letterX, this.position.y + Platform.HEIGHT, Platform.WIDTH);
      
          // Add the current letter's width to the accumulated width
          accumulatedWidth += ctx.measureText(this.string[i]).width;
        }
      }
      
      
    
    update(position) {
        this.position.x = position.x;
        this.position.y = position.y;
    }

    handleCorrectKey() {
        if (this.index < this.string.length) {
            this.letterStates[this.index] = "green";
            this.index += 1;
        }
    }

    handleBadKey() {
        this.resetIndex();
    }

    resetIndex() {
        this.index = 0;
        for (let i = 0; i < this.string.length; i++) {
            this.letterStates[i] = "red";
        }
    }
}

export default Word;
