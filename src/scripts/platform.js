import Word from './word'

class Platform {
    static START_X = 200;
    static BASE_Y = 30;
    static HEIGHT = 20;
    static WIDTH = 250;
    static COUNT = 3; //this should probably be in Game.
    static GRAVITY = 5;

    constructor(wordString, {x, y}) {
        this.word = new Word(wordString, {x, y});
        this.position = {
            x: x,
            y: y
        }
        this.velocity = {
            x: 0,
            y: 0
        }

        this.falling = false;
    }

    draw(ctx) { // do i want to pass platform.draw a position as parameter?
        // debugger
        ctx.fillStyle = "#DEFF55"
        // ctx.fillRect(this.position.x, this.position.y, Platform.WIDTH, Platform.HEIGHT)
        ctx.beginPath();
        ctx.roundRect(this.position.x, this.position.y, Platform.WIDTH, Platform.HEIGHT, [6]);
        ctx.fill();
        ctx.closePath();
        // throw in word drawing logic here too
        this.word.draw(ctx);
    };

    update() {   //next snapshot

        if (this.falling) {
            this.velocity.y += Platform.GRAVITY;
        } else {
            this.velocity.y = 0;
        }

        // this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x

        // debugger
        this.word.update(this.position);

        // if (this.position.y + this.height + this.velocity.y >= 600) {
        //     this.velocity.y = 0
        // }
    }

    handleCorrectKey() {
        this.word.handleCorrectKey();
        // console.log("platform.Correct")
    }

    handleBadKey() {
        this.word.handleBadKey();
        // console.log("platform.Bad")
    }

}


// at the very beginning, start with 2 hard-coded platforms in your platforms array, and then run the function addNewPlat() which is going to take the latest platform in your platforms array and then set a new x and y coordinate based off it's position. then it's going to make that new platform object and PUSH it into your platforms array as a queue.



export default Platform;



