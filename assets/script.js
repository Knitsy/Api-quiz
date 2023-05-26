const questions = [
    {
      question: "Inside which HTML element do we put the JavaScript?",
      choices: ["script", "scripting", "javascript", "js"],
      answer: "script"
    },
    {
      question: "Which programming language is used for web development?",
      choices: ["JavaScript", "Python", "Java", "C++"],
      answer: "JavaScript"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choices: ["msgBox", "alert", "msg", "alertbox"],
        answer: "alert"
      },
  ];
  
  const quizContainer = document.getElementById("quiz-container");
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const resultElement = document.getElementById("result");
  const timeElement = document.getElementById("time");
  
  let currentQuestionIndex = 0;
  let time = 0;
  let timerInterval;
  let score = 0;
  let highScores = [];
  
  // Start the quiz
  function startQuiz() {
    time = 60;
    timerInterval = setInterval(updateTimer, 1000);
    showQuestion();
  }
  
  // Update the timer display and check if time is up
  function updateTimer() {
    time--;
    timeElement.textContent = time;
  
    if (time <= 0) {
      endQuiz();
    }
  }
  
  // Show the current question
  function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    choicesElement.innerHTML = "";
  
    for (let i = 0; i < question.choices.length; i++) {
      const choice = question.choices[i];
      const button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", checkAnswer);
      choicesElement.appendChild(button);
    }
  }
  
  // Check the user's answer
  function checkAnswer(event) {
    const selectedChoice = event.target;
    const answer = questions[currentQuestionIndex].answer;
  
    if (selectedChoice.textContent === answer) {
      resultElement.textContent = "Correct!";
      score++;
    } else {
      resultElement.textContent = "Wrong!";
      time -= 10; // Subtract 10 seconds for incorrect answers
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }
  
  // End the quiz
  function endQuiz() {
    clearInterval(timerInterval);
    quizContainer.style.display = "none";
    resultElement.textContent = "Quiz Over! Your score is: " + score;
  
    const initials = prompt("Enter your initials:");
    highScores.push({ initials, score });
  
   // Show the scores
function showScores() {
    quizContainer.style.display = "none";
    resultElement.textContent = "Quiz Over! Your score is: " + score;
  
    const initials = prompt("Enter your initials:");
    highScores.push({ initials, score });
  
    // Sort the high scores in descending order
    highScores.sort((a, b) => b.score - a.score);
  
    const scoresElement = document.getElementById("scores");
    scoresElement.style.display = "block";
    scoresElement.innerHTML = "<h2>High Scores</h2>";
  
    for (let i = 0; i < highScores.length; i++) {
      const scoreEntry = document.createElement("p");
      scoreEntry.textContent = `${highScores[i].initials}: ${highScores[i].score}`;
      scoresElement.appendChild(scoreEntry);
    }
  
    // Save the high scores to localStorage
    localStorage.setItem("highScores", JSON.stringify(highScores));
  }

  
  // Restart the quiz
  function restartQuiz() {
    currentQuestionIndex = 0;
    time = 60;
    score = 0;
    resultElement.textContent = "";
    startQuiz();
  }
  
  // Event listener for the start button
  document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.createElement("button");
    startButton.textContent = "Start";
    startButton.addEventListener("click", startQuiz);
    quizContainer.appendChild(startButton);
  
  // Save the high scores to localStorage
  localStorage.setItem("highScores", JSON.stringify(highScores));
}


  )}
  