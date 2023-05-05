# TypeJumper

Welcome to TypeJumper.

In this game, users will be able to control their character to jump from one platform to another by correctly typing the words under the platform. The goal is to score as many points as possible by correctly typing the words - point-value is based on word length.
Users will be able to choose their difficulty, which will affect the length of the words. Each new game will start with 3 hearts, 1 lost for every incorrect letter input.
The user cannot lose hearts on consecutive key presses (e.g. if the word is 'globe' and the user accidentally presses the keys 'g-k-l-o', only one life will be lost so that one typo does not cascade into an immediate elimination.

This JavaScript project will incorporate the fundamentals of object-oriented programming to provide a dynamic experience by utilizing Canvas, Webpack, and DOM manipulation.

The gameplay and platforming is inspired by the classic typing game, TypeRacer, and the famous iOS game, Doodle Jump.


# Functionality and MVPs
In TypeJumper, users will be able to:

- Start and reset the game without refreshing the page
- Increase difficulty to generate longer words
- Receive immediate feedback on whether the correct letters were typed or not
- Boost score by typing words within shorter timeframe
- See their typing speed in WPM on the Game Over screen
- Save local high scores(maybe?)(with localStorage)


# Wireframes

![image](https://user-images.githubusercontent.com/126287032/236381805-d5a7e5d3-3623-4635-86c1-bde64a8b01cd.png)


# Technologies, Libraries, APIs
- JavaScript
- CSS
- HTML
- Canvas
- Webpack

- Random word generator: 
http://random-word-api.herokuapp.com/home


# Timeline
- Friday + Weekend:
  - Create and position canvas
  - Create all classes
    - Game, Player, Platform, 
    - (Health, Score, Word, Interface?)
  - Render player, background, platforms, and words 
  - Functionality (key-mapping)

- Monday:
  - Ensure words are rendering with highlight at expected letter
  - Render score, health, (un)mute button
  - Movement
  - Music
  - Instructions
  - CSS
  
- Tuesday:
  - Jumping / Falling animation
  - Gameflow / Gameover
  - CSS CSS

- Wednesday:
  - Finishing touches
  - CSS CSS CSS

- Thursday:
  - Final finishing touches

# Future Implementations

- Options to choose two different platforms
  - Certain platforms may be (de)incentivized via coins/stars or hazards
- Dynamic music shift
