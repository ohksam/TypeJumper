import Player from "./player"
import Platform from "./platform"
import Level from "./level"


class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.index = 0;
        this.setup();
        this.levelNumber = 1;
        this.level = new Level(this.levelNumber);
        this.platforms = this.level.platforms;
        this.player = new Player(this.level.startingXPosition(), Player.START_Y);
        this.currentPlatform = this.platforms[this.index];
        this.counter = 0;
        this.target = this.currentPlatform.word.string.length;
    }

    setup() {
        this.showModal('startModal');
        window.addEventListener('keydown', (e) => {
            if (e.key === ' ') {
                this.hideModal('startModal');
                this.startGame(); 
            }
        });
    }

    reset() {
        this.index = 0;
        this.levelNumber = 1;
        this.level = new Level(this.levelNumber);
        this.platforms = this.level.platforms;
        this.player = new Player(this.level.startingXPosition(), Player.START_Y);
        this.currentPlatform = this.platforms[this.index];
        this.counter = 0;
        this.target = this.currentPlatform.word.string.length;
    }
    

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
        // if (this.checkGameComplete()) {
        //     this.showEndGameModal(); 
        // }
    }
    

    handleBadKey() {
        this.counter = 0;
        this.currentPlatform.handleBadKey();
    }

    //check if level is complete. if levelNumber > 4, show endgame and return early; else show transition modal 
    checkLevelComplete() {
        if (this.index > this.platforms.length - 1) {
            this.levelNumber += 1;
    
            if (this.levelNumber > 4) {
                this.showEndGameModal();
                return true;
            }
    
            this.showModal('levelCompleteModal');
            setTimeout(() => this.hideModal('levelCompleteModal'), 1000);
            return true;
        }
        return false;
    }
    

    // checkGameComplete() {
    //     return this.levelNumber > 4;
    // }

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
        // this.levelNumber += 1;
        this.level = new Level(this.levelNumber);
        this.platforms = this.level.platforms;
        this.player = new Player(this.level.startingXPosition(), Player.START_Y);
        this.index = 0;
        this.currentPlatform = this.platforms[this.index];
        this.counter = 0;
        this.target = this.currentPlatform.word.string.length;
    }

    //modal functions
    showModal(id) {
        document.body.style.overflow = 'hidden';
        document.getElementById(id).style.display = 'flex';
    }

    hideModal(id) {
        document.getElementById(id).style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    showEndGameModal() {
        this.showModal('endGameModal');
        document.getElementById('endGameModal')
            .querySelector('button')
            .addEventListener('click', () => {
                this.hideModal('endGameModal');
                this.reset();  // this will reset the game
                this.setup();  // this will show the startModal again, creating a game loop
            });
    }

}

export default Game;