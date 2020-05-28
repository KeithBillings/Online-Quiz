const username = document.getElementById("username");
const saveScoreButton = document.getElementById("saveScoreButton");

// Using local storage to save the user's score
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementById("finalScore");

// Get an array of highscores from local storage or put in an empty array if running for the first time
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const maxHighScores = 5;
console.log(highScores);


// Displaying their end score on the end page
finalScore.innerText = mostRecentScore;

// This prevents the user from submitting an empty form
username.addEventListener("keyup", () => {
  saveScoreButton.disabled = !username.value
})

saveHighScore = (event) => {
  event.preventDefault();
  
  const score = {
    score: mostRecentScore,
    name: username.value
  };

  // Add the score to the array
  highScores.push(score);
  // Sorts the highscore array from highest to lowest
  highScores.sort( (a,b) => b.score - a.score);
  // Cut the list off at the top 5 scores
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores)); 
  saveScoreButton.innerText = "Saved!";
  setTimeout(() => {
    window.location.assign("index.html");
  }, 1500);
  
}