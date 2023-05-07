//I do wonder if this even needs to be it's own class
// what if I just append a word to a platform and have a platformWord array in Platform that displays platformWord.shift() under a platform when it spawns?

class Word {
    constructor(word) {
        this.word = word;
    }

    static WORDBANK = ['peck', 'push', 'coin', 'soup', 'clap', 'nail', 'nuts', 'fine', 'walk', 'skelp', 'clock', 'sizes', 'elder', 'thief', 'thine', 'pious', 'dizzy', 'dazed', 'cloud', 'vital', 'these', 'excel', 'dodge', 'cease', 'being', 'pasty', 'abyss', 'hinder', 'alone', 'rewire', 'dragon', 'screwy', 'willed', 'basted', 'seeker', 'wagers', 'rabies', 'knight', 'larynx', 'winery', 'foiled', 'tartar', 'inmate', 'hornet', 'higher', 'deluge', 'zenith', 'hollow', 'mantis', 'tinted', 'infuse', 'planner', 'trussed', 'protium', 'pursuit', 'cogency', 'affable', 'thunder', 'clapped', 'subsale', 'cayenne', 'sifting', 'reorder', 'commend', 'minimum', 'bascule', 'inflict', 'overplan', 'fathered', 'flimflam', 'veracity', 'tutorial', 'frumpily', 'injuring', 'airliner', 'mistress', 'humoring', 'dressage', 'gemstone', 'gigaflop', 'scorning', 'rocklike', 'defender', 'vocalizes', 'whittling', 'nightmare', 'colosseum', 'confessed', 'debutante', 'insidious', 'micropore', 'omelettes', 'recumbent', 'moderates', 'weaponize', 'gyroscopic', 'dishearten', 'authorized', 'unfaithful', 'unbottling']

    //thoughts 
    remainingWords = WORDBANK.slice(0);




}



// create an array of words to float in the background
const words = ['word1', 'word2', 'word3', 'word4'];

// keep track of the words that haven't been typed yet
let remainingWords = [...words];

// assign the current word to the first word in the array
let currentWord = remainingWords[0];

// create div elements for each word and add them to the DOM
remainingWords.forEach(word => {
  const wordElement = document.createElement('div');
  wordElement.innerText = word;
  wordElement.style.position = 'absolute';
  wordElement.style.top = Math.random() * window.innerHeight + 'px';
  wordElement.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(wordElement);
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
      // remove the matched word from the DOM, update the remaining words, and reset the current word
      const wordElement = document.querySelector(`div:contains(${word})`);
      wordElement.remove();
      remainingWords.splice(index, 1);
      currentWord = remainingWords[0];
    }
  });
});
