import Platform from "./platform";


class Level {
    constructor(levelNumber) {
        this.levelNumber = levelNumber;
        this.sentences = this.fetchLevelSentences(levelNumber);
        this.platforms = this.getPlatforms()
    }

    fetchLevelSentences(levelNumber) {
        const levelSentences = {
            1: ["welcome", "to", "type", "jumper!", "Here", "are", "some", "warmup", "words:", "array", "iterate", "recursion", "algorithm", "merge_sort"],

            2: ["The", "Array", "object", "enables", "storing", "a", "collection", "of", "multiple", "items", "under", "a", "single", "variable", "name", "and", "has", "members", "for", "performing", "common", "array", "operations."],

            3: ["Loops", "offer", "a", "quick", "and", "easy", "way", "to", "do", "something", "repeatedly. There", "are", "many", "different", "kinds", "of", "loops,", "but", "they", "all", "essentially", "do", "the", "same", "thing:", "they", "repeat", "an", "action", "some", "number", "of", "times."],
            
            4: ["The", "act", "of", "a", "function", "calling", "itself", "is", "known", "as", "recursion.", "It", "can", "be", "used", "to", "solve", "problems", "that", "contain", "smaller", "sub-problems.", "A", "recursive", "function", "can", "receive", "two", "inputs:", "a", "base", "case,", "which", "ends", "recursion,", "or", "a", "recursive", "case,", "which", "resumes", "recursion."]
        };

        return levelSentences[levelNumber];
    }


    createPlatformObjects(words) {
        const platforms = [];
        const ySpacing = 250;
        const xPositions = [150, 600];
        const initialYPosition = 600;

        words.forEach((word, index) => {
            const x = xPositions[Math.floor(Math.random() * xPositions.length)];
            const y = initialYPosition - (index * ySpacing);
            platforms.push(new Platform(word, { x, y }));
        });

        return platforms;
    }

    getPlatforms() {
        return this.createPlatformObjects(this.sentences)
    }

    startingXPosition() {
        return this.platforms[0].position.x + 90;
    }

}

export default Level;