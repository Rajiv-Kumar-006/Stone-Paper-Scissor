// initial vale of user and comp will be 0 .......
let userscore = 0;
let compscore = 0;

// access the score-board ......
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

// access the choices ......
const choices = document.querySelectorAll(".choice");

// to show win or lose ...... in showWinner function...
let msgpara = document.querySelector("#msg");

// User choice ..........
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("chice was clicked",choiceId);

    playgame(userChoice); //function call of comp choice .
  });
});

//  rendom computer choice generates...........

const playgame = (userChoice) => {

//   console.log("User Choice = ", userChoice);
  //  to generate comp choice......

  const compChoice = genCompchoice();
//   console.log("comp Choice = ", compChoice);

  // Draw condition was checked .....
  if (userChoice === compChoice) {
    drawgame(); // function call of draw function defination ...
  } else {
    let userWin = true;

    if (userChoice === "rock") {
      // paper , scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //  rock , scissors
      userWin = compChoice === "rock" ? true : false;
    } else {
      // rock , paper
      compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    // console.log("You Win !");
    userscore++;
    userscorepara.innerText = userscore;
    msgpara.innerText = `You Win! 😀 Your ${userChoice} beats ${compChoice}`;
    msgpara.style.backgroundColor = "green";
  } else {
    // console.log("You loss !");
    compscore++;
    compscorepara.innerText = compscore++;

    msgpara.innerText = `You Lost! 🥲 ${compChoice} beats Your ${userChoice}`;
    msgpara.style.backgroundColor = "red";
  }
};

const genCompchoice = () => {
  const option = ["rock", "paper", "scissors"]; //array in index form
  const rendIdx = Math.floor(Math.random() * 3);
  return option[rendIdx];
};

const drawgame = () => {
  //   console.log("Game was draw");
  msgpara.innerText = "Game was Draw. play again! 😒";
};
