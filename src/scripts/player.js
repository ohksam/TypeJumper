class Player {
    constructor() {
        this.position = {
            x: 260,
            y: 550
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