import Platform from "./platform";


class Level {
    constructor(levelNumber) {
        this.levelNumber = levelNumber;
        this.sentences = this.getLevelSentences(levelNumber);
    }

    getLevelSentences(levelNumber) {
        const levelSentences = {
            1: ["welcome", "to", "Type", "Jumper!", "here", "are", "some", "warmup", "words", "array", "iterate", "recursion", "algorithm", "merge_sort"],

            2: ["The", "Array", "object", "enables", "storing", "a", "collection", "of", "multiple", "items", "under", "a", "single", "variable", "name", "and", "has", "members", "for", "performing", "common", "array", "operations."],

            3: ["Loops", "offer", "a", "quick", "and", "easy", "way", "to", "do", "something", "repeatedly."],
            
            4: []
        };

        return levelSentences[levelNumber];
    }


    generatePlatforms(words) {
        const platforms = [];
        const ySpacing = 250;
        const xPositions = [150, 600];

        words.forEach((word, index) => {
            const x = xPositions[Math.floor(Math.random() * xPositions.length)];
            const y = -index * ySpacing;
            platforms.push(new Platform(word, { x, y }));
        });

        return platforms;
    }

}

export default Level;