
document.getElementById("rock").onclick = rockPlay;

 document.getElementById("paper").onclick = paperPlay;

 document.getElementById("scissors").onclick = scissorsPlay;

var humanScore = 0;
var computerScore = 0;
var result = 0;


function rockPlay(){
  var entry = compChoice();
  if(entry === "paper"){
    computerScore += 1 ;
    document.getElementById("computerScore").innerHTML = '';
    document.getElementById("computerScore").innerHTML += computerScore;

    document.getElementById("status").innerHTML = "You played Rock, they played Paper...You Lose";

  }else if (entry === "scissors"){
    humanScore += 1
    document.getElementById("humanScore").innerHTML = '';
    document.getElementById("humanScore").innerHTML += humanScore;
    document.getElementById("status").innerHTML = "You played Rock, they played Scissor...You Win";
  }else {
    document.getElementById("status").innerHTML = "You played Rock, they played Rock...You Tie";
  }
}

function paperPlay(){
  var entry = compChoice();
  if(entry === "scissors"){
   computerScore += 1 ;
    document.getElementById("computerScore").innerHTML = '';
    document.getElementById("computerScore").innerHTML += computerScore;

    document.getElementById("status").innerHTML = "You played Paper, they played Scissor...You Lose";
} else if (entry === "rock"){
    humanScore += 1
    document.getElementById("humanScore").innerHTML = '';
    document.getElementById("humanScore").innerHTML += humanScore;
    document.getElementById("status").innerHTML = "You played Paper, they played Rock...You Win";
  }else {
    document.getElementById("status").innerHTML = "You played Paper, they played Paper...You Tie";
  }

}

function scissorsPlay(){
  var entry = compChoice();
  if(entry === "rock"){
    computerScore = computerScore + 1 ;
    document.getElementById("computerScore").innerHTML = '';
    document.getElementById("computerScore").innerHTML += computerScore;

    document.getElementById("status").innerHTML = "You played Scissors, they played Rock...You Lose";
  }else if (entry === "paper"){
    humanScore += 1
    document.getElementById("humanScore").innerHTML = '';
    document.getElementById("humanScore").innerHTML += humanScore;
    document.getElementById("status").innerHTML = "You played Scissors, they played Paper...You Win";
  }else {
    document.getElementById("status").innerHTML = "You played Scissors, they played Scissors...You Tie";
  }
}


function compChoice(){
 var number = Math.random();
  if(number < 0.33){
    return "rock";
  }else if (number < 0.67 && number >= 0.34){
    return "paper";
  }else {
    return "scissors";
  }
}