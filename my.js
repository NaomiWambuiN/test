const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    question: "Who is the president of the United States?",
    options: ["Joe Biden", "Donald Trump", "Barack Obama", "George Washington"],
    answer: "Joe Biden",
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Jupiter", "Saturn", "Mars", "Earth"],
    answer: "Jupiter",
  },
];

let currentQuestion = 0;

function showQuestion() {
  const questionElement = document.getElementById("question");
  const option1Label = document.getElementById("option1-label");
  const option2Label = document.getElementById("option2-label");
  const option3Label = document.getElementById("option3-label");
  const option4Label = document.getElementById("option4-label");

  questionElement.textContent = questions[currentQuestion].question;
  option1Label.textContent = questions[currentQuestion].options[0];
  option2Label.textContent = questions[currentQuestion].options[1];
  option3Label.textContent = questions[currentQuestion].options[2];
  option4Label.textContent = questions[currentQuestion].options[3];
}

function checkAnswer(answer) {
  if (answer === questions[currentQuestion].answer) {
    document.getElementById("result").textContent = "Correct!";
  } else {
    document.getElementById("result").textContent =
      "Incorrect. The correct answer is " +
      questions[currentQuestion].answer +
      ".";
  }
}

const form = document.getElementById("quiz-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userAnswer = document.querySelector(
    'input[name="answer"]:checked'
  ).value;
  checkAnswer(userAnswer);
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    form.style;
  }
});

showQuestion();
