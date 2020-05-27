const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Array of questions for the user to answer
// Greek mythology themed! 
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

const correctBonus = 1; // When the user answers a question correct, they get a point
const maxQuestions = 5; // How many questions the user will have to answer per quiz

// Starting a new game, setting question counter and score back to zero. 
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
}

// Function to pull questions from the array of questions
getNewQuestion = () => {
  // If we run out of questions to pull from the available question array, then the game ends
  if(availableQuestions.length === 0 || questionCounter >= maxQuestions){
    //go to end page
    return window.location.assign("./end.html");
  }

  questionCounter++; //Adds to the amount of questions that have been asked
  const questionIndex = Math.floor(Math.random() * availableQuestions.length); //Picks a random number to use to pick a random available question
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
      const number = choice.dataset["number"];
      choice.innerText = currentQuestion["choice" + number];
    });
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if(!acceptingAnswers) return; //If the user tries to pick a question before page loads

    acceptingAnswers = false; 

    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    getNewQuestion();
  });
});

startGame();