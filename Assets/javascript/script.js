const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "According to Greek mythology who was the first woman on earth?",
    choice1: "Pandora",
    choice2: "Aphrodite",
    choice3: "Athena",
    choice4: "Gaia",
    answer: 1
  },
  {
    question: "If you cut off its head, two more grow back. Which mythogical beast does this describe?",
    choice1: "Cerberus",
    choice2: "Hydra",
    choice3: "Gorgon",
    choice4: "Chimera",
    answer: 2
  },
  {
    question: "This man, according to legend, designed the labyrinth of King Minos",
    choice1: "King Minos",
    choice2: "Perseus",
    choice3: "Odysseus",
    choice4: "Daedelus",
    answer: 4
  },
  {
    question: "What is the name of the queen of the underworld and wife of Hades?",
    choice1: "Persephone",
    choice2: "Demeter",
    choice3: "Hera",
    choice4: "Medusa",
    answer: 1
  },
  {
    question: "There was one type of tree in Athens that was considered sacred. Which tree was it?",
    choice1: "Cypress Tree",
    choice2: "Olive Tree",
    choice3: "Fig Tree",
    choice4: "Weeping Willow",
    answer: 2
  },
  {
    question: "Poseidon, god of the sea, had one animal in particular that was associated with him. What was it?",
    choice1: "A Shark",
    choice2: "A Roc",
    choice3: "A Horse",
    choice4: "A Leviathan",
    answer: 3
  },

];

const correctBonus = 1;
const maxQuestions = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
}

getNewQuestion = () => {
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
}

startGame();