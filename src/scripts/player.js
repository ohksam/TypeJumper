class Player {
    static START_X = 260;
    static START_Y = 550;
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

    update(ctx) {   //CAUTION: this will not have ctx bound
        // this.draw(ctx)
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        // if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        //     this.velocity.y += gravity
        // } else {
        //     this.velocity.y = 0
        // }
    }
}



export default Player;