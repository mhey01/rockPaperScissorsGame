let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(user, comp) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(comp)}${smallCompWord}. You win!`
    userChoice_div.classList.add('green-glow');
    setTimeout(() =>  userChoice_div.classList.remove('green-glow'), 300);
}

function lose(user, comp) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses to ${convertToWord(comp)}${smallCompWord}. You lose!`
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(user, comp) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user);
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} draws with ${convertToWord(comp)}${smallCompWord}. Draw!`
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 300);
}

function game(userChoice) {
    const compChoice = getCompChoice();
    const name = "pine";
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

game("c");

function main() {

rock_div.addEventListener('click', () => game("r"));

paper_div.addEventListener('click', () => game("p"));

scissors_div.addEventListener('click', () => game("s"));

}

main();
