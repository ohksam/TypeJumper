
class Word {
    constructor(word) {
        this.word = word;
    }

    //wordbank has 100 words for now. 
    static WORDBANK = ['peck', 'push', 'coin', 'soup', 'clap', 'nail', 'nuts', 'fine', 'walk', 'skelp', 'clock', 'sizes', 'elder', 'thief', 'thine', 'pious', 'dizzy', 'dazed', 'cloud', 'vital', 'these', 'excel', 'dodge', 'cease', 'being', 'pasty', 'abyss', 'hinder', 'alone', 'rewire', 'dragon', 'screwy', 'willed', 'basted', 'seeker', 'wagers', 'rabies', 'knight', 'larynx', 'winery', 'foiled', 'tartar', 'inmate', 'hornet', 'higher', 'deluge', 'zenith', 'hollow', 'mantis', 'tinted', 'infuse', 'planner', 'trussed', 'protium', 'pursuit', 'cogency', 'affable', 'thunder', 'clapped', 'subsale', 'cayenne', 'sifting', 'reorder', 'commend', 'minimum', 'bascule', 'inflict', 'overplan', 'fathered', 'flimflam', 'veracity', 'tutorial', 'frumpily', 'injuring', 'airliner', 'mistress', 'humoring', 'dressage', 'gemstone', 'gigaflop', 'scorning', 'rocklike', 'defender', 'vocalizes', 'whittling', 'nightmare', 'colosseum', 'confessed', 'debutante', 'insidious', 'micropore', 'omelettes', 'recumbent', 'moderates', 'weaponize', 'gyroscopic', 'dishearten', 'authorized', 'unfaithful', 'unbottling']

    //thoughts - it would be weird if the first word right off the bat was a 10-letter. Might try to find a way to separate the word banks and only have words up to 6 letters for the first 10, then concat the rest into remainingWords

    remainingWords = WORDBANK.sort(() => Math.random() - 0.5);

    currentWord = remainingWords[0];




}

//should I append currentWord to currentPlatform?
// - the issue is that my platform is nothing more than a drawn object. it doesn't exist in the HTML... so append doesn't work, since it needs an element to append to. I'll have to just render it under a platform and then delete it


const platformHeight = 20;
const platformWidth = 250;
const platformCount = 2;
const platforms = [];




// draw the platforms on the canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'green';
platforms.forEach(platform => {
  ctx.fillRect(...platform);
});

// add an event listener for keydown events
document.addEventListener('keydown', function(event) {
  const keyPressed = event.key;
  
  // check if the key pressed matches the next letter in the current word
  if (keyPressed === currentWord[0]) {
    // update the current word and remove the first letter
    currentWord = currentWord.slice(1);
  }
  
  // loop through the remaining words and check if the current word matches any of them
  remainingWords.forEach((word, index) => {
    if (currentWord === word) {
      // update the remaining words and reset the current word
      remainingWords.splice(index, 1);
      currentWord = remainingWords[0];
    }
  });
});

// draw the words on the canvas
ctx.font = '16px Arial';
ctx.fillStyle = 'black';
remainingWords.forEach((word, index) => {
  const platform = platforms[index];
  const x = platform[0] + (platform[2] / 2) - (ctx.measureText(word).width / 2);
  const y = platform[1] + platform[3] + 20;
  ctx.fillText(word, x, y);
});