const username = document.getElementById("username");
const saveScoreBtn = document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore');

//localStorage.setItem('highScore',JSON.stringify([]));
//console.log(JSON.parse(localStorage.getItem('highScore')));

const highScores = JSON.parse(localStorage.getItem('highScores')) || [] ;

console.log(highScores);

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
 // console.log(username.value);
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
  //console.log("vv");
  e.preventDefault();

  const score ={
    score:mostRecentScore,
    name:username.value
  };
  highScores.push(score);

  highScores.sort((a,b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem('highScores',JSON.stringify(highScores));
  window.location.assign('./index.html');
  console.log(highScores);
};
