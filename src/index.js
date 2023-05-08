// this is your entry file - this is what Webpack will read

// import Player from "./scripts/player";
// import Platform from "./scripts/platform";
// import Word from "./scripts/word";
// ^for testing purposes rn. get rid of those once you have things properly imported and set in Game/Gameplay

import Game from "./scripts/game";
import Gameplay from "./scripts/gameplay";


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext('2d')

    canvas.width = 1000;  // optimize this for 13-inch macbook pro when the
    canvas.height = 650;  // time comes

    const gameplay = new Gameplay(ctx).animate();

    // ctx.fillStyle = "#81D5FF";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);



    // FOR TESTING PURPOSES ONLY
    // const player = new Player
    // player.draw(ctx)
    // const platforms = [new Platform({x:200, y:550}), new Platform({x:550, y: 280})]
    
    // platforms.forEach(platform => {
    //     platform.draw(ctx);
    // })

    // const word = new Word()
    // word.draw(ctx)
    // let currentWord = 'start'

    // console.log(word.wordBank);


    // all that ^ should eventually get included in the following:
    // const game = new Gameplay(ctx); 
    // debugger
    
})

