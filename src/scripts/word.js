import Platform from "./platform";

class Word {
    constructor(string, { x, y }) {
        this.string = string;
        this.position = {
            x: x,
            y: y
        }
        this.index = 0;
    }

    paintLastGreen(ctx) {
        if (this.index < this.string.length - 1) {
            ctx.font = '32px CuteFrog';
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            const textToDraw = this.string.slice(0, this.index);
            const textWidth = ctx.measureText(textToDraw).width;
            const centerX = this.position.x + (Platform.WIDTH - textWidth) / 2;
            ctx.fillText(textToDraw, centerX, this.position.y + Platform.HEIGHT, Platform.WIDTH);
        } else if (this.index === this.string.length) {
            ctx.font = '32.px CuteFrog';
            ctx.fillStyle = '#00BD00';
            const centerX = this.position.x + (Platform.WIDTH - ctx.measureText(this.string).width) / 2;
            ctx.fillText(this.string, centerX, this.position.y + Platform.HEIGHT, Platform.WIDTH);
        }
    }

    drawGreen(ctx) {
        ctx.font = '32px CuteFrog';
        ctx.fillStyle = '#00BD00';
        const textToDraw = this.string.slice(0, this.index);
        const textWidth = ctx.measureText(textToDraw).width;
        const centerX = this.position.x + (Platform.WIDTH - textWidth) / 2;
        ctx.fillText(textToDraw, centerX, this.position.y + Platform.HEIGHT, Platform.WIDTH);
    }

    draw(ctx) {
        ctx.font = '32px CuteFrog';
        ctx.fillStyle = '#BF0436';

        // Calculate the width of the rendered text
        const textWidth = ctx.measureText(this.string).width;

        // Calculate the x-coordinate to center the text
        const centerX = this.position.x + (Platform.WIDTH - textWidth) / 2;

        ctx.fillText(this.string, centerX, this.position.y + Platform.HEIGHT, Platform.WIDTH);

        this.drawGreen(ctx);
        this.paintLastGreen(ctx);
    }

    update(position) {
        this.position.x = position.x;
        this.position.y = position.y;
    }

    handleCorrectKey() {
        this.index += 1;
    }

    handleBadKey() {
        this.resetIndex();
    }

    resetIndex() {
        this.index = 0;
    }
}

export default Word;
