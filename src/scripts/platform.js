class Platform {
    static BASE = 30;
    static HEIGHT = 20;
    static WIDTH = 250;
    static COUNT = 3; //this should probably be in Game.

    constructor(ctx, word) {
        this.word = word;
        this.ctx = ctx;
        // this.position = {
        //     x,
        //     y
        // }
        // this.width = 250
        // this.height = 20
    }

    // platforms = []; // confused here because when gameplay draws these, it'll have 2 hard-coded platforms to start with

    draw() { // do i want to pass platform.draw a position as parameter?
        // debugger
        this.ctx.fillStyle = "#DEFF55"
        this.ctx.fillRect(this.position.x, this.position.y, Platform.WIDTH, Platform.HEIGHT)
        // throw in word drawing logic here too.
    } 

}


// at the very beginning, start with 2 hard-coded platforms in your platforms array, and then run the function addNewPlat() which is going to take the latest platform in your platforms array and then set a new x and y coordinate based off it's position. then it's going to make that new platform object and PUSH it into your platforms array as a queue.



export default Platform;



