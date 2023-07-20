import Platform from "./platform";


class Level {
    constructor(levelNumber) {
        this.levelNumber = levelNumber;
        this.sentences = this.fetchLevelSentences(levelNumber);
        this.platforms = this.getPlatforms()
    }

    fetchLevelSentences(levelNumber) {
        // const levelSentences = {
        //     1: ["welcome", "to", "type", "jumper!", "Here", "are", "some", "warmup", "words:", "array", "iterate", "recursion", "algorithm", "merge sort"],

        //     2: ["The", "Array", "object", "enables", "storing", "a collection", "of", "multiple", "items", "in a", "single", "variable", "and", "provides", "functionality", "for", "performing", "common", "array", "operations", "such as", "adding", "or", "removing", "and even", "sorting", "elements."],

        //     3: ["Loops", "offer", "a quick", "and", "convenient", "way", "to perform", "actions", "repeatedly.", "While", "there", "are", "various", "types", "of", "loops,", "they", "all", "serve", "the", "same", "purpose:", "executing", "an", "action", "a certain", "number", "of", "times."],
            
        //     4: ["The", "act", "of a", "function", "calling", "itself", "is", "known", "as", "recursion.", "Recursion", "can", "be", "used", "to solve", "problems", "that", "contain", "smaller", "sub-problems.", "A", "recursive", "function", "typically", "consists of", "two", "cases:", "a", "base", "case,", "which", "marks", "the", "termination", "of", "recursion,", "and a", "recursive", "case,", "which", "allows", "the", "function", "to", "call", "itself", "again."]
        // };

        const levelSentences = {
            1: ['test', 'for', 'level', 'one'], 
            2: ['test', 'for', 'level', 'two'], 
            3: ['test', 'for', 'level', 'three'], 
            4: ['test', 'for', 'level', 'four'], 
        }

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