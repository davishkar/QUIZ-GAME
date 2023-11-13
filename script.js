// Quiz questions and answers
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
        answer: "Blue Whale"
    }
];

let currentQuestion = 0;
let score = 0;
let playerName = "";

const startForm = document.getElementById("start-form");
const startButton = document.getElementById("start-button");
const quizContainer = document.querySelector(".quiz-container");
const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question");
const optionsList = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const endPage = document.querySelector(".end-page");
const playerNameElement = document.getElementById("player-name");
const playerScoreElement = document.getElementById("player-score");

startButton.addEventListener("click", () => {
    playerName = document.getElementById("name").value;
    startForm.style.display = "none";
    quizContainer.style.display = "block";
    displayQuestion();
});

nextButton.addEventListener("click", () => {
    const selectedOption = document.querySelector("input[type='radio']:checked");

    if (!selectedOption) {
        alert("Please select an option.");
        return;
    }

    if (selectedOption.value === questions[currentQuestion].answer) {
        score++;
    }

    selectedOption.checked = false;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
});

function displayQuestion() {
    const currentQ = questions[currentQuestion];
    questionText.textContent = currentQ.question;
    optionsList.innerHTML = "";

    for (const option of currentQ.options) {
        const listItem = document.createElement("li");
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "option";
        radioInput.value = option;
        listItem.appendChild(radioInput);
        listItem.appendChild(document.createTextNode(option));
        optionsList.appendChild(listItem);
    }
}

function endGame() {
    quizContainer.style.display = "none";
    endPage.style.display = "block";
    playerNameElement.textContent = "Name: " + playerName;
    playerScoreElement.textContent = "Score: " + score;
}
