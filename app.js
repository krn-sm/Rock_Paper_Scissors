let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const userScoreP = document.querySelector("#user-score");
const compScoreP = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame = () => {
    msg.innerText = "Draw!";
    msg.style.backgroundColor = "gray";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        if (userScore === 10) {
    gameOver("user");
    return;} 
        userScoreP.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        if (compScore === 10) {
    gameOver("comp");
return;}
        compScoreP.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const game = (userChoice) => {
    
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice ==="rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        game(userChoice);
  });
});

function gameOver(winner) {
    document.body.style.backgroundColor = winner === "user" ? "green" : "red";
    document.body.innerHTML = `<div class = "game-over">
    <h1>${winner === "user" ? "You Won!" : "You Lost!"}</h1>
    <h2>Game Over</h2>
    <button id ="restart">Play Again</button>
    </div>
    `;
    document.getElementById("restart").addEventListener("click", () => {
    location.reload();
}
);
}

