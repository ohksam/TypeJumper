import Game from "./game";

class Gameplay {
    constructor(ctx) {
        this.ctx = ctx;
        this.game = new Game(ctx);
        
        this.currentWord = this.game.currentPlatform.word.string;
        this.targetWord = this.currentWord;
        this.bindKeyHandlers()
    }

    animate() {   
        this.game.update(this.ctx);
        this.reset();

        requestAnimationFrame(this.animate.bind(this));
    }

    bindKeyHandlers() {
        document.addEventListener('keydown', (e) => {
            const keyPressed = e.key;
            const whitelist = ['Shift', 'CapsLock'];

            if (whitelist.includes(keyPressed)) return;
            
            if (keyPressed === this.targetWord[0]) {
                this.targetWord = this.targetWord.slice(1);
                this.game.handleCorrectKey();
                if (this.targetWord.length === 0) {
                    this.currentWord = this.game.currentPlatform.word.string;
                    this.targetWord = this.currentWord;
                }
            } else {
                this.targetWord = this.currentWord;
                this.game.handleBadKey();
            }
        })
    }

    // resets targetWord to start at level 1 again
    reset() {
        if (this.game.needsReset) {
            this.currentWord = this.game.currentPlatform.word.string;
            this.targetWord = this.currentWord;
            this.game.needsReset = false;
        }
    }
}

export default Gameplay;