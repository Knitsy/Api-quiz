// Quiz questions and answers
const quizQuestions = [
  {
    question: "Inside which HTML element do we put the JavaScript code?",
    choices: ["<script>", "<javascript>", "<js>", "<scripting>"],
    answer: "<script>"
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    choices: ["The <head> section", "The <body> section", "Both the <head> and <body> sections are correct"],
    answer: "Both the <head> and <body> sections are correct"
  },
{
        question: "How do you write 'Hello World' in an alert box?",
        choices: ["msgBox", "alert", "msg", "alertbox"],
        answer: "alert"
      },
];

// Quiz variables
const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const choicesContainer = document.getElementById("choices");
const submitButton = document.getElementById("submit");
const timerElement = document.getElementById("time");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const initialsForm = document.getElementById("initials-form");
const initialsInput = document.getElementById("initials");

let currentQuestionIndex = 0;
let time = 60;
let score = 0;
let timerInterval;

// Event listener for starting the quiz
submitButton.addEventListener("click", startQuiz);

// Function to start the quiz
function startQuiz() {
  quizContainer.style.display = "block";
  submitButton.style.display = "block";
  timerInterval = setInterval(updateTimer, 1000);
  displayQuestion();
}

// Function to display a question
function displayQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  choicesContainer.innerHTML = "";

  for (let i = 0; i < currentQuestion.choices.length; i++) {
    const choice = currentQuestion.choices[i];
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.addEventListener("click", function() {
      checkAnswer(choice);
    });
    choicesContainer.appendChild(choiceButton);
  }
}

// Function to check the selected answer
function checkAnswer(choice) {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  if (choice === currentQuestion.answer) {
    score += 10;
  } else {
    time -= 10;
    if (time < 0) {
      time = 0;
    }
  }
  currentQuestionIndex++;

  if (currentQuestionIndex === quizQuestions.length || time === 0) {
    endQuiz();
  } else {
    displayQuestion();
  }
}

// Function to update the timer
function updateTimer() {
  timerElement.textContent = time;
  time--;

  if (time < 0) {
    endQuiz();
  }
}

// Function to end the quiz
function endQuiz() {
  clearInterval(timerInterval);
  quizContainer.style.display = "none";
  submitButton.style.display = "none";
  scoreElement.textContent = score;
  scoreContainer.classList.remove("hide");
}

// Event listener for submitting initials
initialsForm.addEventListener("submit", function(event) {
  event.preventDefault();
  saveScore();
});

// Function to save the score and initials
function saveScore() {
  const initials = initialsInput.value;
  // Code to save the score here
  console.log(`Score saved: Initials - ${initials}, Score - ${score}`);
  initialsForm.reset();
}
