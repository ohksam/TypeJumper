import Word from './word'

class Platform {
    static START_X = 200;
    static BASE_Y = 30;
    static HEIGHT = 20;
    static WIDTH = 250;
    static COUNT = 3; //this should probably be in Game.

    constructor(word, position) {
        this.word = new Word(word, position);
        this.position = {
            x: position.x,
            y: position.y
        }
        // this.width = 250
        // this.height = 20
    }

    //setter
    // set position(newPosition) {
    //     this._position = {
    //         x: newPosition.x,
    //         y: newPosition.y
    //     };
    //     this.word.position = {
    //         x: newPosition.x,
    //         y: newPosition.y
    //     }
    // }

    // platforms = []; // confused here because when gameplay draws these, it'll have 2 hard-coded platforms to start with

    draw(ctx) { // do i want to pass platform.draw a position as parameter?
        // debugger
        ctx.fillStyle = "#DEFF55"
        ctx.fillRect(this.position.x, this.position.y, Platform.WIDTH, Platform.HEIGHT)
        // throw in word drawing logic here too
        this.word.draw(ctx)
    } 

}


// at the very beginning, start with 2 hard-coded platforms in your platforms array, and then run the function addNewPlat() which is going to take the latest platform in your platforms array and then set a new x and y coordinate based off it's position. then it's going to make that new platform object and PUSH it into your platforms array as a queue.



export default Platform;



