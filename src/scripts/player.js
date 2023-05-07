class Player {
    constructor() {
        this.position = {
            x: 360,
            y: 500
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