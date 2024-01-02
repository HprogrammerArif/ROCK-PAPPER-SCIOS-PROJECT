let userScore = 0; //user & comp score track korar jny duita variable
let compScore = 0;

//kon choic er upor click kortechi ba access kortechi tar track bahir kora.
// motkotha sobgula choice ke access korte hove
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const ranIdx = Math.floor(Math.random()*3);
  //console.log(options[ranIdx]);
  return options[ranIdx];
}
const drawGame = () => {
  console.log("Game Was Draw");
  msg.innerText = "Game Was Draw. Play Again";
  msg.style.backgroundColor = "#081B31"
}

const showWinner = (userWin, userChoice, compChoice) => {
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You Win");
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else{
    compScore++;
    compScorePara.innerText = compScore;
    console.log("You Lost");
    msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}

const playGame = (userChoice) => {
 console.log("User Choice Is: ", userChoice);
 //NOW GENARET COMPUTER CHOICE
 const compChoice = genCompChoice();
 console.log("Comp Choice Is:", compChoice);


 if(compChoice === userChoice){
  //drew
  drawGame();
 } else {
  let userWin = true;
  if(userChoice === "rock"){
    //paper, scissors
    userWin = compChoice==="paper"?false:true;
  } else if(userChoice === "paper"){
    //rock, scissors
    userWin = compChoice === "scissors"?false:true;
  } else{
    //rock, paper
    userWin = compChoice === "rock"?false:true;
  }
  showWinner(userWin, userChoice, compChoice);
 }
}

//click event track korar jny every div er upor amra addEventLisstner add korbo
//We genarated userChoice.
choices.forEach(choice => { //sob choices er jny indv ek ek choice select korchi
 // console.log(choice);
  //protiti indivitual choice er jny amra add korch ek click event litsner
  // zeta amader click event track korbe
  choice.addEventListener("click", () => {  
   //click event e amra indibutual userChoice id o track korbo
   let userChoice = choice.getAttribute("id");
   //console.log("choice was clicked", userChoice); 
   playGame(userChoice);
  });                                   
});