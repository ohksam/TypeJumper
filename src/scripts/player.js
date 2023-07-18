class Player {
    // static START_X = 240;
    static START_Y = 400;
    static GRAVITY = 3;

    constructor(x, y) {
        this.position = {
            x: x,
            y: y
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        
        this.width = 90
        this.height = 90
        this.sprite = new Image();
        this.sprite.src = "./src/assets/frogSprite.png";
    }

    draw(ctx) {
        if (this.sprite.complete) {
        ctx.drawImage(this.sprite, this.position.x, this.position.y, this.width, this.height)
        }
    }

    update() {   
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        if (this.position.y + this.height + this.velocity.y <= 600) {
            this.velocity.y += Player.GRAVITY
        } else {
            this.position.y = 600 - this.height;
            this.velocity.y = 0;
        }
    }
}

export default Player;