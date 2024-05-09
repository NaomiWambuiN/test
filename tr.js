const quizData = [
  {
    question: "What is the world's best selling record?",
    options: ["Khaligraph", "2 pack", "Tatiana", "Michael Jackson"],
    answer: "Michael Jackson",
  },
  {
    question: "16+33'?",
    options: ["49", "43", "33", "21"],
    answer: "49",
  },
  {
    question: "Which one is not an organic solvent'?",
    options: ["Ethanol", "Chloroform", "Propanol", "Juice"],
    answer: "Juice",
  },

  // Add more quiz questions here
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-btn");
const resultElement = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.textContent = currentQuizData.question;
  optionsElement.innerHTML = "";
  currentQuizData.options.forEach((option) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(li);
  });
}

function checkAnswer(answer) {
  const currentQuizData = quizData[currentQuestion];
  if (answer === currentQuizData.answer) {
    score++;
    resultElement.textContent = "Correct!";
  } else {
    resultElement.textContent = "Wrong!";
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.textContent = "";
  optionsElement.innerHTML = "";
  submitButton.style.display = "none";
  resultElement.textContent = `Your score: ${score}/${quizData.length}`;
}

loadQuestion();
