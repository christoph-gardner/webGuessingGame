

function guessingGame(){
  
  const guessingDom = document.getElementById("guessing");
  const playingDom  = document.getElementById("playing");
  const guessDom    = document.getElementById("guess");
  const triesDom    = document.getElementById("tries");
  const hintDom     = document.getElementById("hint");
  const score       = document.getElementById("score");
  const ansDom      = document.getElementById("answer");
  const yesDom      = document.getElementById("yes");
  const guessesDom  = document.getElementById("guesses");
  const bestDom     = document.getElementById("best");
 
  play();

  guessDom.addEventListener("change",makeGuess);

  
  function play(){
    alert("Let's play...");
    let answer = Math.floor(Math.random() * 100) + 1;
    console.log("this is the document");
    console.log(document);
    console.log("this is the form: ");
    console.log(document.getElementById("guessingForm"));
  }

  function makeGuess(e){
    alert("I guessed!");
    console.log("This is this:");
    console.log(this);
    console.log("This is the event:");
    console.log(e);
    // update count of guessEs!
    while(this.value != answer){
      if(this.value < answer){
        alert("guess higher");
      }
      else if (this.value > answer){
        alert("guess lower");
      }
      else if (this.value == answer){
        alert("you got it!");
        break;
      }
    
  }

  function showGameResults(tries){
    alert("showGameResults");
  }
  
  function getBest(count){
    alert("getBest");
  }
  
  }
}


guessingGame();