const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber);
    
    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'Paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'Scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Draw!'
    }
    else if (computerChoice === userChoice) {
        result = 'Draw!'
    }
    else if (computerChoice === 'Rock' && userChoice === 'Scissors') {
        result = 'Computer won!'
    }
    else if (computerChoice === 'Scissors' && userChoice === 'Paper') {
        result = 'Computer won!'
    }
    else if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result = 'Computer won!'
    }
    else {
        result = 'User won!'
    }

    resultDisplay.innerHTML = result
}





