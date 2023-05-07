class Platform {
    constructor({x, y}) {
        this.position = {
            x,
            y
        }
        this.width = 250
        this.height = 20
    }

    draw(ctx) {
        ctx.fillStyle = "#88E873"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}


export default Platform;