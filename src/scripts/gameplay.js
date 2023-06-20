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

        requestAnimationFrame(this.animate.bind(this));
    }

    bindKeyHandlers() {
        let rightChar = false;
        document.addEventListener('keydown', (e) => {
            const keyPressed = e.key;
            
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
}


export default Gameplay;