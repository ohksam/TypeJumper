class Player {
    static START_X = 260;
    static START_Y = 550;
    constructor() {
        this.position = {
            x: Player.START_X,
            y: Player.START_Y
        }
        this.width = 50
        this.height = 50
    }

    draw(ctx) {
        ctx.fillStyle = "#00FF5B"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}



export default Player;