import Word from './word'

class Platform {
    static START_X = 200;
    static BASE_Y = 30;
    static HEIGHT = 20;
    static WIDTH = 250;
    static COUNT = 3;
    static GRAVITY = 5;

    constructor(wordString, {x, y}) {
        this.word = new Word(wordString, {x, y});
        this.position = {
            x: x,
            y: y
        }
        this.velocity = {
            x: 0,
            y: 0
        }

        this.falling = false;
    }

    draw(ctx) {
        ctx.fillStyle = "#DEFF55"
        ctx.beginPath();
        ctx.roundRect(this.position.x, this.position.y, Platform.WIDTH, Platform.HEIGHT, [6]);
        ctx.fill();
        ctx.closePath();
        this.word.draw(ctx);
    };

    update() { 
        if (this.falling) {
            this.velocity.y += Platform.GRAVITY;
        } else {
            this.velocity.y = 0;
        }

        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        this.word.update(this.position);
    }

    handleCorrectKey() {
        this.word.handleCorrectKey();
    }

    handleBadKey() {
        this.word.handleBadKey();
    }
}

export default Platform;



