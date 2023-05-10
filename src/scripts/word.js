import Platform from "./platform";

class Word {
    constructor(string, position) {

        this.string = string;
        this.position = {
            x: position.x,
            y: position.y
        }
        this.index = 0;
    }

    // wordBank = ['peck', 'push', 'coin', 'grim', 'soup', 'clap', 'nail', 'nuts', 'fine', 'walk', 'skelp', 'clock', 'sizes', 'elder', 'thief', 'thine', 'pious', 'dizzy', 'dazed', 'cloud', 'vital', 'these', 'excel', 'dodge', 'cease', 'being', 'pasty', 'abyss', 'hinder', 'alone', 'rewire', 'dragon', 'screwy', 'willed', 'basted', 'seeker', 'wagers', 'rabies', 'knight', 'larynx', 'winery', 'foiled', 'tartar', 'inmate', 'hornet', 'higher', 'deluge', 'zenith', 'hollow', 'mantis', 'tinted', 'infuse', 'planner', 'trussed', 'protium', 'pursuit', 'cogency', 'affable', 'thunder', 'clapped', 'subsale', 'cayenne', 'sifting', 'reorder', 'commend', 'minimum', 'bascule', 'inflict', 'overplan', 'function', 'fathered', 'flimflam', 'veracity', 'tutorial', 'frumpily', 'injuring', 'airliner', 'mistress', 'humoring', 'dressage', 'gemstone', 'gigaflop', 'scorning', 'rocklike', 'defender', 'vocalizes', 'whittling', 'nightmare', 'colosseum', 'confessed', 'debutante', 'insidious', 'micropore', 'omelettes', 'recumbent', 'moderates', 'weaponize', 'gyroscopic', 'dishearten', 'authorized', 'unfaithful', 'unbottling', 'crystalline']

    // remainingWords = wordBank.sort(() => Math.random() - 0.5);

    // currentWord = remainingWords.shift();


//
//on a bad key press, reset the index back to 0
//reset index is a WORD function, which has to get called by a "handleBADkeypress"
//

    //instead of filling text with full string, draw each letter one at a time.
    // for each letter's position, 

    //every word instance will start with this.index = 0
    //give word class some type of function like "handleCorrectKeyPress()"
    // - gonna take this.index ++

    // THEN TELL PLATFORM IN ITS LOGIC TO ALSO handleCorrectKeyPress()
    // - on a good key press, tell this.word.handleCorrectKeyPress()

    // utilize a for (i)loop and do 
    // ctx.fillText (this.letters[i], this.position.x + 
    //*platform width/3 +)
    // if i is less than this.index

    // draw(ctx) {
    //     for (let i = 0; i <)
    // }

    draw(ctx) {
        // debugger
        ctx.font = '32px Cursive';
        ctx.fillStyle = '#BF0436';
        // console.log(this.position)
        ctx.fillText(this.string, this.position.x + Platform.WIDTH/3.3, this.position.y + Platform.HEIGHT, Platform.WIDTH)

        // this will be used when highlighting input
        // ctx.fillStyle = 'blue'
        // ctx.fillText(this.string.slice(0, 3), this.position.x, this.position.y, Platform.WIDTH)


        // ctx.font = '32px Cursive';
        // ctx.fillStyle = '#DC35F2';
        // ctx.fillText('start', 600, 340)//this pos would be same as plat
        // fillText(text, x, y, maxWidth)//this maxWidth would be platwidth
    }

    handleCorrectKey() {
        this.index += 1;

    }

    handleBadKey() {
        this.index = 0;

    }

    // in the for loop that iterates over the words you want on the screen and draws them... if index === 0, send it do a different draw function(?) that'll highlight with red. other words that you don't want them to type will be written in green or something
    // then when you're checking key inputs to see if the user has pressed the correct letters, add each letter to a lettersPressed array,



}


export default Word;