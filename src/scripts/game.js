import Player from "./player"
import Platform from "./platform"
import Word from "./word"


class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.index = 0;
        this.platforms = this.currentLevelPlatforms();
        this.player = new Player();
        this.currentPlatform = this.platforms[this.index];
        this.counter = 0;
        this.target = this.currentPlatform.word.string.length;
    }

    currentLevelPlatforms() {

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
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#65afd8";
        ctx.fillRect(0, 0, canvas.width, canvas.height);


        ctx.strokeStyle = "green";
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        this.allObjects().forEach((object) => {
            object.draw(ctx);
        });
    }
    
    update(ctx) {   
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
        this.index += 1;
        this.currentPlatform = this.platforms[this.index];
        this.counter = 0;

        this.allObjects().forEach(object => {
            object.falling = true;
        })


        if (this.currentPlatform === undefined) {
            alert('level complete!');
        } else {
            this.player.position = {x: this.platforms[this.index].position.x + 80, y: this.platforms[this.index].position.y - 70};
            this.target = this.currentPlatform.word.string.length;
        }
    }
}



export default Game