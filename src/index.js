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
})
