const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-button')


let randomQuestions, currentQuestion

startButton.addEventListener('click', startGame)

function startGame() {

    startButton.classList.add('hidden')
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionContainerElement.classList.remove('hidden')
    nextQuestion()

}

function nextQuestion() {
    reset()
    getQuestion(randomQuestions[currentQuestion])
}

function getQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('button')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function reset() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function checkAnswer() {

}

function addScore() {

}

const questions = [
    {
        question: 'Who is this character?',
        answers: [
            { text: 'Bloodhound', correct: true },
            { text: 'Lifeline', correct: false },
            { text: 'Caustic', correct: false },
            { text: 'Seer', correct: false }
        ]
    }
]