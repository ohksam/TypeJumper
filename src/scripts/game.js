import Player from "./player"
import Platform from "./platform"
import Word from "./word"

//future idea
// after you chop off the first word element from your platforms array, .push that into a "completedWords" array so that you can keep track of how many words were typed (also this'll help you make sure that your code is working properly)
// SRS for words that are not perfectly typed, send them back into your wordbank
// or just make a counter instead of moving the whole word into your array of completedWords. just have completedWords = 0 then ++ when they finish a word.

class Game {
    // static TEMPWORDBANK = ['welcome', 'to', 'typer', 'jump']; // this will eventually get replaced by real wordbank (lol)
    // static START_PLATFORM = new Platform('start', {x: 150, y: 600})
    // static NEW_POSITIONS = [{x: 150, y: 300}, {x: 600, y: 300}];

    constructor(ctx) {
        this.ctx = ctx;
        // this.words = []; //this is probably unnecessary
        // this.myQueue = [Game.START_PLATFORM];
        this.index = 0;
        this.platforms = this.currentLevelPlatforms();
        this.player = new Player();
        this.currentPlatform = this.platforms[this.index];
        this.counter = 0;
        this.target = this.currentPlatform.word.string.length;
    }

    currentLevelPlatforms() {
        //if (this.level === 1), obviously more dynamic later with i
        // return this.level.allPlatforms // or something like that.

        return [
        new Platform('welcome', {x: 150, y: 600}),
        new Platform('to', {x: 600, y: 350}),
        new Platform('type', {x: 150, y: 100}),
        new Platform('jumper', {x: 600, y: -150}),
        new Platform('here', {x: 150, y: -400}),
        new Platform('are', {x: 600, y: -650}),
        new Platform('some', {x: 150, y: -900}),
        new Platform('warmup', {x: 600, y: -1150}),
        new Platform('words', {x: 150, y: -1400}),
        new Platform('array', {x: 600, y: -1900}),
        new Platform('recursion', {x: 150, y: -2150}),
        new Platform('iterate', {x: 600, y: -2400}),
        new Platform('algorithm', {x: 150, y: -2650})
        ];
    }

    allObjects() {
        return this.platforms.concat(this.player);
    }

    draw(ctx) {
        // debugger
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#65afd8";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // debugger

        this.allObjects().forEach((object) => {
            object.draw(ctx);
        });
        //draw functionality will not be taken care of by each individual class

    }
    
    update(ctx) {   //next snapshot
        this.allObjects().forEach((object) => {
            object.update();
        })

        if (this.platforms[this.index].position.y >= 600) {
            let dy = this.platforms[this.index].position.y - 600;
            this.allObjects().forEach((object) => {
                object.falling = false;
                object.position.y -= dy;
            })
        }

        this.draw(ctx)
    }

    handleCorrectKey() {
        this.counter += 1;
        this.currentPlatform.handleCorrectKey();
        if (this.counter === this.target) {
            this.goNext();
        }
    }

    handleBadKey() {
        this.counter = 0;
        this.currentPlatform.handleBadKey();
    }

    goNext() {
        console.log('GO NEXT')

        this.index += 1;
 
        this.currentPlatform = this.platforms[this.index];
        this.counter = 0;

        this.allObjects().forEach(object => {
            object.falling = true;
        })

        this.player.position = {x: this.platforms[this.index].position.x + 80, y: this.platforms[this.index].position.y - 70}
        // debugger

        if (this.currentPlatform === undefined) {
            console.log('you win!')
        }
        this.target = this.currentPlatform.word.string.length;
    }




    // not currently utilized
    // removeLowestPlatform() { //this could be in Platform - and you 
    //     this.platforms.shift(); // and you just call it in game instead
    // }    
}



export default Game