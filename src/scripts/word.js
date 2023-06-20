import Platform from "./platform";

class Word {
    constructor(string, {x, y}) {

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
            ctx.fillStyle = '#rgba(255, 255, 255, 0.5)'; 
            ctx.fillText(this.string.slice(0,this.index), this.position.x + Platform.WIDTH/3.3, this.position.y + Platform.HEIGHT, Platform.WIDTH)
        } else if (this.index === this.string.length) {
            ctx.font = '32.px CuteFrog';
            ctx.fillStyle = '#00BD00';
            ctx.fillText(this.string, this.position.x + Platform.WIDTH/3.3, this.position.y + Platform.HEIGHT, Platform.WIDTH)
        }
    }

    drawGreen(ctx) {
        for (let i = 0; i < this.index; i++) {
            
            ctx.font = '32px CuteFrog';
            ctx.fillStyle = '#00BD00'; 
            ctx.fillText(this.string.slice(0,this.index), this.position.x + Platform.WIDTH/3.3, this.position.y + Platform.HEIGHT, Platform.WIDTH)
        }
    }

    draw(ctx) {
        ctx.font = '32px CuteFrog';
        ctx.fillStyle = '#BF0436';
        ctx.fillText(this.string, this.position.x + Platform.WIDTH/3.3, this.position.y + Platform.HEIGHT, Platform.WIDTH)

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