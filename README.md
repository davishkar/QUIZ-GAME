# Quiz Game README

## Overview
This is a simple quiz game web application created by Avishkar. The game consists of a start page where players enter their name, age, and email before beginning the quiz. The quiz contains multiple-choice questions with dynamically generated options. After completing the quiz, players receive their quiz results, including their name and score.

## Getting Started
To run the quiz game locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com//quiz-game.git
   ```

2. Open the `index.html` file in your web browser to start the game.

## Features
- **Start Page:** Players enter their name, age, and email to begin the quiz.
- **Quiz:** Multiple-choice questions are presented one at a time, with options generated dynamically.
- **Next Button:** Players can proceed to the next question after selecting an option.
- **End Page:** After completing the quiz, players see their name and score.

## Technologies Used
- **HTML:** Structure of the web pages.
- **CSS:** Styling for a visually appealing interface.
- **JavaScript:** Logic for quiz functionality.
  
## File Structure
- **index.html:** Main HTML file containing the structure of the quiz game.
- **Quiz-game-styles.css:** CSS file for styling the game.
- **script.js:** JavaScript file for quiz logic and functionality.

## How to Play
1. Open the `index.html` file in a web browser.
2. Enter your name, age, and email on the start page.
3. Click the "Start Game" button to begin the quiz.
4. Answer each multiple-choice question by selecting an option.
5. Click the "Next" button to proceed to the next question.
6. After completing the quiz, view your results on the end page.

## Customization
Feel free to customize the quiz by modifying the questions array in the `script.js` file. Each question object should have a `question` property, an `options` array, and an `answer` property.

```javascript
const questions = [
    {
        question: "Question text goes here?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: "Correct Option"
    },
    // Add more questions as needed
];
```

## Contributors
- Avishkar (GitHub: [Avishkar](https://github.com/davishkar))

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Enjoy playing the quiz game! If you have any feedback or suggestions, feel free to contribute or open an issue.
