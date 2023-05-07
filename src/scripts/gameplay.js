
class Gameplay {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
    }

    //
    // ***REMEMBER THAT THIS IS ALL PLAGIARIZED AT THE MOMENT. MAKE IT YOUR OWN***
    //
    animate() { //the animation loop (also contains player movement)
        requestAnimationFrame(animate)
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        player.update()
        platforms.forEach(platform => {
            platform.draw()
        })
    
        if (keys.right.pressed && player.position.x < 400) { // added <400 for screen bounds
            player.velocity.x = 5
        } else if (keys.left.pressed && player.position.x > 100) {
            player.velocity.x = -5 
        } else {
            player.velocity.x = 0
    
            if (keys.right.pressed) {
                platforms.forEach(platform => {
                    platform.position.x -= 5
                })
                // for your project, put in a background.forEach(river => { river.position.y -= 2}) or something like that for your parallax effect (might not be fully necessary though, tbh)
            } else if (keys.left.pressed) {
                platforms.forEach(platform => {
                    platform.position.x += 5
                })
            }
        }
        
        // PLATFORM COLLISION DETECTION
        platforms.forEach(platform => {
            if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
                player.velocity.y = 0
            }
        })
    }


    animate() //this is calling the loop ^
}


