import Platform from "./platform";

class Word {
    constructor(string, position) {
        // how do I attach the most recent word to the most recent platform?
        // maybe export every object's draw function to gameplay and then have gameplay feed word.draw the position of the last platform?

        // this.position = {
        //     x: somePlatform.position.x,
        //     y: somePlatform.position.y
        // }

        this.string = string;
        this.position = {
            x: position.x,
            y: position.y
        }
        // console.log(this.position)
    }

    //wordbank has ~100 words for now.  WHAT AN EYESORE
    // this shouldn't be inside word class because we can't dynamically manipulate it then? gotta make a new randomized array in a diff class/ethod so that you can shift() it.

    wordBank = ['peck', 'push', 'coin', 'grim', 'soup', 'clap', 'nail', 'nuts', 'fine', 'walk', 'skelp', 'clock', 'sizes', 'elder', 'thief', 'thine', 'pious', 'dizzy', 'dazed', 'cloud', 'vital', 'these', 'excel', 'dodge', 'cease', 'being', 'pasty', 'abyss', 'hinder', 'alone', 'rewire', 'dragon', 'screwy', 'willed', 'basted', 'seeker', 'wagers', 'rabies', 'knight', 'larynx', 'winery', 'foiled', 'tartar', 'inmate', 'hornet', 'higher', 'deluge', 'zenith', 'hollow', 'mantis', 'tinted', 'infuse', 'planner', 'trussed', 'protium', 'pursuit', 'cogency', 'affable', 'thunder', 'clapped', 'subsale', 'cayenne', 'sifting', 'reorder', 'commend', 'minimum', 'bascule', 'inflict', 'overplan', 'fathered', 'flimflam', 'veracity', 'tutorial', 'frumpily', 'injuring', 'airliner', 'mistress', 'humoring', 'dressage', 'gemstone', 'gigaflop', 'scorning', 'rocklike', 'defender', 'vocalizes', 'whittling', 'nightmare', 'colosseum', 'confessed', 'debutante', 'insidious', 'micropore', 'omelettes', 'recumbent', 'moderates', 'weaponize', 'gyroscopic', 'dishearten', 'authorized', 'unfaithful', 'unbottling', 'crystalline']

    //thoughts - it would be weird if the first word right off the bat was a 10-letter word. Might try to find a way to separate the word banks and only have words up to 6 letters for the first 10 platforms, then concat the rest into remainingWords

    // remainingWords = wordBank.sort(() => Math.random() - 0.5);

    // currentWord = remainingWords.shift();
    // when Word.draw gets called, it'll might be something like 'new Word(currentWord)'

    draw(ctx) {
        ctx.font = '32px Cursive';
        ctx.fillStyle = '#BF0436';
        // console.log(this.position)
        ctx.fillText(this.string, this.position.x + Platform.WIDTH/3, this.position.y + Platform.HEIGHT, Platform.WIDTH)

        // this will be used when highlighting input
        // ctx.fillStyle = 'blue'
        // ctx.fillText(this.string.slice(0, 3), this.position.x, this.position.y, Platform.WIDTH)


        // ctx.font = '32px Cursive';
        // ctx.fillStyle = '#DC35F2';
        // ctx.fillText('start', 600, 340)//this pos would be same as plat
        // fillText(text, x, y, maxWidth)//this maxWidth would be platwidth
    }

    // in the for loop that iterates over the words you want on the screen and draws them... if index === 0, send it do a different draw function(?) that'll highlight with red. other words that you don't want them to type will be written in green or something
    // then when you're checking key inputs to see if the user has pressed the correct letters, add each letter to a lettersPressed array,



}


// eventListener for key input. this most definitely goes in Gameplay or even index?
// document.addEventListener('keydown', (event) => {
//   const keyPressed = event.key;

//   if (keyPressed === currentWord[0]) {
//     currentWord = currentWord.slice(1);
//   } // need some else logic here to maybe highlight red if keypress is wrong
// });

export default Word;