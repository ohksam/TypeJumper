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
    
        // Calculate the width of the rendered text
        const textWidth = ctx.measureText(this.string).width;
    
        // Calculate the x-coordinate to center the text
        const centerX = this.position.x + (Platform.WIDTH - textWidth) / 2;
    
        // Draw the green letters
        for (let i = 0; i < this.index; i++) {
            ctx.fillStyle = '#00BD00';
            const letterX = centerX + ctx.measureText(this.string.slice(0, i)).width;
            ctx.fillText(this.string[i], letterX, this.position.y + Platform.HEIGHT, Platform.WIDTH);
        }
    
        // Draw the remaining red letters
        ctx.fillStyle = '#BF0436';
        const remainingText = this.string.slice(this.index);
        const remainingTextX = centerX + ctx.measureText(this.string.slice(0, this.index)).width;
        ctx.fillText(remainingText, remainingTextX, this.position.y + Platform.HEIGHT, Platform.WIDTH);
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
