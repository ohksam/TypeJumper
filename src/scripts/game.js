import Player from "./player"
import Platform from "./platform"
import Word from "./word"

class Game {
    static TEMPWORDBANK = ['testing'];
    static NUMPLATFORMS = 2
    static DEFAULTPOS = {x: 69, y: 69}

    constructor(ctx) {
        this.ctx = ctx;
        // this.platforms = [new Platform({x:280, y:550}), new Platform({x:550, y:280})];
        this.words = []; //got rid of null and start word for testing
        this.platforms = this.generatePlatforms(); //we'll see. this might not be exactly how you want to write this.
        this.player = [new Player];
    }

    generatePlatforms() {
        let myPlatforms = [];
        console.log(Game.TEMPWORDBANK)

        // this logic below isn't working at all. maybe try separating it.
        while (myPlatforms.length < 2) {
            Game.TEMPWORDBANK.forEach(word => {
                myPlatforms.push(new Platform(word, Game.DEFAULTPOS)) // *******
            })
        }

        debugger
        for (let i = 0; i < Game.NUMPLATFORMS; i++) {
            if (i === 0) { 
                myPlatforms[i].position = {x: 150, y: 600}
                myPlatforms[i].word.position = {x: 150, y:600}
            } else {
              myPlatforms[i].position = {x: 300, y: 200} 
              myPlatforms[i].word.position = {x: 300, y:200}

            }
        }
        debugger

        console.log(myPlatforms);
        return myPlatforms;
    }

    // currentWord = this.words.slice(1)

    allObjects() {
        return this.platforms.concat(this.words, this.player);
    }

    draw(ctx) {
        // debugger
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#81D5FF";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        this.allObjects().forEach((object) => {
            object.draw(ctx);
        });
    }

    // for scrolling later - idk if I can dynamically scroll if I'm generating platforms from an array though....
    // allObjects = platforms.concat(players).concat(words)
    // allObjects.forEach(object => object.position.y += 5)

    // Question for Kyle: when I clearRect and re-draw during the animation loop, won't the platforms/words get re-drawn at their initialized position instead of updated position?
    // - if I don't want my platforms to reset, I should shift them out of my platforms array after I draw them and instead of calling .draw from within a forEach loop, I should just call .draw on the platforms.shift().


// this should probably all go in 1 game loop function / animate function
    // generatePlatforms() {
    //     for (let i = 0; i < platformCount; i++) {
    //         // let platformX = js equivalent of array.sample from two possible X positions
    //         let platformY = platforms[1].position.y - 300;
    //         this.platforms.push(new Platform({x: platformX, y: platformY}))
    //     }
    // }

    removeLowestPlatform() {
        this.platforms.shift();
    }

    drawCurrentWord() {
        //logic to locate the next platform and then draw word a set distance under it. unless I decide to do that above
    }
    
    
}

// animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   drawPlatforms();
//   drawCurrentWord();
//     addNewPlatform();
// }



// document.addEventListener('keydown', (e) => {
//     const keyPressed = e.key;

//     console.log(e.key)

//     if (keyPressed === currentWord[0]) {
//         console.log('success')
//         currentWord = currentWord.slice(1);
//         //some logic to make a color change for correctness
//     } // else {some more logic here to glow red if incorrect input}
// })

// if (currentWord.length === 0) {
//     player.position = {
//         x: (platforms[1].position.x + platform.width) / 2,
//         y: platforms[1].position.y + platform.height
//     } 
//         // change this to make sure player is on top of, not inside, platform
//     currentWord = remainingWords.shift();
// }

export default Game