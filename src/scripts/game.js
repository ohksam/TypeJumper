import Player from "./player"
import Platform from "./platform"
import Word from "./word"


// after you chop off the first word element from your platforms array, .push that into a "completedWords" array so that you can keep track of how many words were typed (also this'll help you make sure that your code is working properly)
// SRS for words that are not perfectly typed, send them back into your wordbank

class Game {
    static TEMPWORDBANK = ['start', 'nextword', 'thisShouldBreakTheGame'];
    static NUMPLATFORMS = 2
    static DEFAULTPOS = {x: 69, y: 69}

    constructor(ctx) {
        this.ctx = ctx;
        // this.platforms = [new Platform({x:280, y:550}), new Platform({x:550, y:280})];
        this.words = []; //got rid of null and start word for testing
        this.platforms = this.generatePlatforms(); //we'll see. this might not be exactly how you want to write this.
        console.log(this.platforms)
        this.player = [new Player];
    }

    currentWord() {
        return this.platforms[0].word.string;
    }

    generatePlatforms() { //i'm gonna need a helper function here to return
        const xPositions = [{x: 200, y: 220}, {x: 600, y: 220}];
        let myPlatforms = [];
        console.log(Game.TEMPWORDBANK)

        // this logic below isn't working at all. maybe try separating it.
        while (myPlatforms.length < 2) {
            Game.TEMPWORDBANK.forEach(word => {
                myPlatforms.push(new Platform(word, Game.DEFAULTPOS)) // *******
            })
        }
        // return myPlatforms;

        // debugger
        for (let i = 0; i < Game.NUMPLATFORMS; i++) {
            let randomSpot = xPositions[Math.floor(Math.random() * 2)];
            if (i === 0) { 
                myPlatforms[i].position = {x: 150, y: 600}
                myPlatforms[i].word.position = {x: 150, y:600}
            } else {
              myPlatforms[i].position = randomSpot;
              myPlatforms[i].word.position = randomSpot;
            }
        }
        // debugger

        // console.log(myPlatforms);
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
    // ^regarding question above, this is irrelevant if we don't have a constant scroll. so let's table it for now.
    // - if I don't want my platforms to reset, I should shift them out of my platforms array after I draw them and instead of calling .draw from within a forEach loop, I should just call .draw on the platforms.shift().


// this should probably all go in 1 game loop function / animate function
    // generatePlatforms() {
    //     for (let i = 0; i < platformCount; i++) {
    //         // let platformX = js equivalent of array.sample from two possible X positions
    //         let platformY = platforms[1].position.y - 300;
    //         this.platforms.push(new Platform({x: platformX, y: platformY}))
    //     }
    // }

    removeLowestPlatform() { //this could be in Platform - and you 
        this.platforms.shift(); // and you just call it in game instead
    }    
}




export default Game