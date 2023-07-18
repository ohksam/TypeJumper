import Player from "./player"
import Platform from "./platform"
import Level from "./level"


class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.index = 0;
        // this.platforms = this.currentLevelPlatforms();
        this.levelNumber = 1;
        this.level = new Level(this.levelNumber);
        this.platforms = this.level.platforms;
        this.player = new Player(this.level.startingXPosition(), Player.START_Y);
        this.currentPlatform = this.platforms[this.index];
        this.counter = 0;
        this.target = this.currentPlatform.word.string.length;
    }

    // currentLevelPlatforms() {

    //     return [
    //     new Platform('welcome', {x: 150, y: 600}),
    //     new Platform('to', {x: 600, y: 350}),
    //     new Platform('type', {x: 150, y: 100}),
    //     new Platform('jumper', {x: 600, y: -150}),
    //     new Platform('here', {x: 150, y: -400}),
    //     new Platform('are', {x: 600, y: -650}),
    //     new Platform('some', {x: 150, y: -900}),
    //     new Platform('warmup', {x: 600, y: -1150}),
    //     new Platform('words', {x: 150, y: -1400}),
    //     new Platform('array', {x: 600, y: -1900}),
    //     new Platform('recursion', {x: 150, y: -2150}),
    //     new Platform('iterate', {x: 600, y: -2400}),
    //     new Platform('algorithm', {x: 150, y: -2650})
    //     ];
    // }

    allObjects() {
        return this.platforms.concat(this.player);
    }

    draw(ctx) {
        // canvas itself
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#9fd8f3";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Larger ovals
        const circleColor = "#81c6ed";
        const circleRadius = 80;

        const positions = [
            { x: 140, y: 400 },
            { x: 800, y: 550 },
            { x: 580, y: 100 }
        ];

        positions.forEach((position) => {
            const x = position.x;
            const y = position.y;
            ctx.fillStyle = circleColor;
            ctx.beginPath();
            ctx.ellipse(x, y, circleRadius, circleRadius / 2, 0, 0, Math.PI * 2);
            ctx.fill();

            // Small oval on bottom-right
            const smallOvalX = x + 25;
            const smallOvalY = y + 20;
            const smallOvalRadius = 20;

            ctx.fillStyle = "#68b9e8";
            ctx.beginPath();
            ctx.ellipse(smallOvalX, smallOvalY, smallOvalRadius, smallOvalRadius / 2, 0, 0, Math.PI * 2);
            ctx.fill();

            // Tiny oval on left side
            const tinyOvalX = x - 50;
            const tinyOvalY = y - 10;
            const tinyOvalRadius = 10;

            ctx.fillStyle = "#68b9e8";
            ctx.beginPath();
            ctx.ellipse(tinyOvalX, tinyOvalY, tinyOvalRadius, tinyOvalRadius / 2, 0, 0, Math.PI * 2);
            ctx.fill();
        });

        // canvas border
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

        if (this.platforms[this.index]?.position.y >= 600) {
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
            this.goNextPlatform();
        }
        if (this.checkLevelComplete()) {
            this.goNextLevel();
        }
    }

    handleBadKey() {
        this.counter = 0;
        this.currentPlatform.handleBadKey();
    }

    checkLevelComplete() {
        console.log(`this.index is ${this.index}`)
        console.log(`this.platforms.length - 1 is ${this.platforms.length - 1}`)
        if (this.index > this.platforms.length - 1 && this.levelNumber < 4) {
            setTimeout(() => { alert('level complete!') }, 300);
            return true;
        }
        return false;
    }

    //rename to goNextPlatform?
    goNextPlatform() {
        this.index += 1;

        if (!this.platforms[this.index]) return;

        this.currentPlatform = this.platforms[this.index];
        this.counter = 0;

        this.allObjects().forEach(object => {
            object.falling = true;
        })

        this.player.position = { x: this.platforms[this.index].position.x + 80, y: this.platforms[this.index].position.y - 100 };
        this.target = this.currentPlatform.word.string.length;
    }

    //and then create a goNextLevel based on checkLevelComplete? hmmm
    goNextLevel() {
        if (this.levelNumber < 4) {
            this.levelNumber += 1;
            this.level = new Level(this.levelNumber);
            this.platforms = this.level.platforms;
            this.player = new Player(this.level.startingXPosition(), Player.START_Y);
            this.index = 0;
            this.currentPlatform = this.platforms[this.index];
            this.counter = 0;
            this.target = this.currentPlatform.word.string.length;
        } else {
            alert("game complete!")
        }
    }


}

export default Game;