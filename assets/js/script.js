const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let randomQuestions, currentQuestion;

// code to make the start and next button work
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
})
//  function which runs the game
function startGame() {
    startButton.classList.add('hidden')
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionContainerElement.classList.remove('hidden')
    nextQuestion()
}

// function to give the user the next question
function nextQuestion() {
    reset()
    getQuestion(randomQuestions[currentQuestion])
}

// function to get the questions from the array
function getQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('button')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', checkAnswer)
        answerButtonsElement.appendChild(button)
    })
}

// function to reset after the question has been answered
function reset() {
    nextButton.classList.add('hidden')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

/* 
function that checks the answer the user selects and checks if its correct or not, 
this function also checks if there are more questions in the array or not to 
either show a 'next' or 'play again' button
*/
function checkAnswer(event) {
    const selectedAnswer = event.target
    const correct = selectedAnswer.dataset.correct
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (randomQuestions.length > currentQuestion + 1) {
        nextButton.classList.remove('hidden')
    } else {
        startButton.innerText = 'Play Again'
        startButton.classList.remove('hidden')
    }
}

// function to set the colours for both correct and incorrect answers (green = correct, red = incorrect)
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('incorrect')
    }
}

// function that removes the colour effect of getting the answer right or wrong
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')
}

// function to add score for each correct answer
function addScore() {

}

// Where the list of questions and answers are stored
const questions = [
    {
        question: 'Who is this character?',
        answers: [
            { text: 'Bloodhound', correct: true },
            { text: 'Lifeline', correct: false },
            { text: 'Caustic', correct: false },
            { text: 'Seer', correct: false }
        ]
    },
    {
        question: 'How many characters start with the letter "C"?',
        answers: [
            { text: '0', correct: false },
            { text: '1', correct: false },
            { text: '4', correct: false },
            { text: '2', correct: true }
        ]
    },
    {
        question: 'How many characters are currently in the game?',
        answers: [
            { text: '20', correct: false },
            { text: '17', correct: false },
            { text: '15', correct: false },
            { text: '18', correct: true }
        ]
    }
]