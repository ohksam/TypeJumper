// think of what we need to inherit here
import Game from "./game";

// THIS SHOULD JUST DETECT KEYBINDS AND START THE ANIMATION LOOP

class Gameplay {
    constructor(ctx) {
        this.ctx = ctx;
        this.game = new Game(ctx);
        
        this.currentWord = this.game.currentPlatform.word.string; // or this.game.platforms[0].word.string?
        this.targetWord = this.currentWord;
        this.bindKeyHandlers()
    }

    //hypothetically make a start() method which will call animate, bindKey, and wordChecker, which will keep checking currentWord's length and send in a new word/platform/etc once you've typed the word out.

    animate() {   // 
        // this.drawBackground(ctx); // this should draw the canvas
        // this.moveObjects();       // this should update all objects position by the scrollSpeed
        // debugger

        this.game.update(this.ctx); //this will call update in game which will then call draw for game

        // ok. right now game.draw calls draw in all classes
        // so what would game.update do? game update needs to change the position of all objects, but taht would be taken care of by their respective classes. 
        // so game.update should just call all objects to update
        // each object's update can then call its own draw
        // game.draw can just draw the canvas




        // this.game.draw(this.ctx);    // and this should re-draw all objects after having been scrolled
        // debugger
        requestAnimationFrame(this.animate.bind(this));
    }

    bindKeyHandlers() {
        let rightChar = false;
        document.addEventListener('keydown', (e) => {
            const keyPressed = e.key;
            // let currentWord = this.game.currentWord(); //THIS IS THE ISSUE RN
            // let nextLetter = currentWord[0];

            // console.log(e.key)
            console.log(this.currentWord)
            // console.log(this.targetWord)

            // just use an index reference here instead of mutating the string value in your words

            //why save a separate variable and mutate it when you can just dive in and READ what's already there?
            // - could save the currentWord to another var and slice that if you wish, but you could also do Game.currentPlatform.word.string[i] or something like
            // let i = 0;
            // could also say let currentWord = Game.Platform[0].word.string[i] (LMAO) then do this:
            // if keyPressed = this.currentWord[i] {
                // handleCorrectKeyPress()
                // else 
                // handleBadKeyPress() and then rest i = 0
            // }


            // if good key press
            //      Game.handleCorrectKeyPress
            // else 
            //      Game.handleBadKeyPress

            // let i = 0; // i is going to get reset after every key press so I can't save an i here..
            
            // let currentWord = this.game.currentPlatform.word.string;
            // let targetWord = currentWord;
            if (keyPressed === this.targetWord[0]) {
                console.log('success'); // for testing
                this.targetWord = this.targetWord.slice(1);
                this.game.handleCorrectKey();
                if (this.targetWord.length === 0) {
                    this.currentWord = this.game.currentPlatform.word.string;
                    this.targetWord = this.currentWord;
                }
            } else {
                console.log('miss'); //also for testing
                this.targetWord = this.currentWord;
                this.game.handleBadKey();
            }


            //we're refactoring this right now.
            // if (keyPressed === this.currentWord[0]) {
            //     console.log('success')
            //     this.currentWord = this.currentWord.slice(1);
            //     // nextLetter = currentWord[0];
            //     //some logic to change the index value in your letter painting
            //     // rightChar = true;
            //     //THIS CODE NEEDS TO GO IN A DIFF FUNCTION, but for now...
            //     if (this.currentWord.length === 0) {this.game.player.position = {x: 400, y: 400}} 
            //     // ^ that code isn't working. will i need to make a new Player instance when I want to teleport? we'll figure this out in a bit
            //     } else {
            //         console.log('miss')
            // }
        })
    }



// if (currentWord.length === 0) {
//     player.position = {
//         x: (platforms[1].position.x + platform.width) / 2,
//         y: platforms[1].position.y + platform.height
//     } 
//         // change this to make sure player is on top of, not inside, platform
//     currentWord = remainingWords.shift();
// }


}

    // start() {
    //     this.
    // }

    //regarding scrolling... 
    // if player.position.y <= 60% canvas height, give all objects extra velocity to scroll them down to ~20? we'll see.














    // none of this is needed atm because I'm just teleporting the character to the next plaform, for now

    // //
    // // ***REMEMBER THAT THIS IS ALL PLAGIARIZED AT THE MOMENT. MAKE IT YOUR OWN***
    // //
    // animate() { //the animation loop (also contains player movement)
    //     requestAnimationFrame(animate)
    //     ctx.clearRect(0, 0, canvas.width, canvas.height)
    //     player.update()
    //     platforms.forEach(platform => {
    //         platform.draw()
    //     })
    
    //     if (keys.right.pressed && player.position.x < 400) { // added <400 for screen bounds
    //         player.velocity.x = 5
    //     } else if (keys.left.pressed && player.position.x > 100) {
    //         player.velocity.x = -5 
    //     } else {
    //         player.velocity.x = 0
    
    //         if (keys.right.pressed) {
    //             platforms.forEach(platform => {
    //                 platform.position.x -= 5
    //             })
    //             // for your project, put in a background.forEach(river => { river.position.y -= 2}) or something like that for your parallax effect (might not be fully necessary though, tbh)
    //         } else if (keys.left.pressed) {
    //             platforms.forEach(platform => {
    //                 platform.position.x += 5
    //             })
    //         }
    //     }
        
    //     // PLATFORM COLLISION DETECTION
    //     platforms.forEach(platform => {
    //         if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
    //             player.velocity.y = 0
    //         }
    //     })
    // }


    // animate() //this is calling the loop ^



export default Gameplay;