class Player {
    static START_X = 260;
    static START_Y = 500;
    static GRAVITY = 5;
    constructor() {
        this.position = {
            x: Player.START_X,
            y: Player.START_Y
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        
        this.width = 50
        this.height = 50
    }

    draw(ctx) {
        ctx.fillStyle = "#00FF5B"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {   //CAUTION: this will not have ctx bound
        // this.draw(ctx)
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