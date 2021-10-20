/* jshint esversion: 8 */

const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const restartButton = document.getElementById('restart-button');
const scoreIcon = document.getElementById('score-icon');
const homeIcon = document.getElementById('home-icon');

const categorySelect = document.getElementById('category-selection');

let questionImage = document.getElementById('question-img');
let randomQuestions, currentQuestion, randomise;
let numQuestions = 10;

// code to make the start and next button work
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestion++;
    nextQuestion();
});

// category selection
let selectedCategory;
categorySelect.addEventListener('change', function () {
    selectedCategory = this.value;
    
});

//  function which runs the game
function startGame() {
    startButton.classList.add('hidden');
    restartButton.classList.remove('hidden');
    scoreIcon.classList.remove('hidden');
    homeIcon.classList.remove('hidden');
    categorySelect.classList.add('hidden');
    console.log(selectedCategory);

    if (selectedCategory === "all") {
        randomise = questions.sort(() => Math.random() - 0.5); // randomise all questions
        randomQuestions = randomise.slice(0, numQuestions); // grab the first n questions
    } else {
        randomise = questions.sort(() => Math.random() - 0.5).filter((obj) => obj.category == selectedCategory);
        randomQuestions = randomise.slice(0, numQuestions); // grab the first n questions
    }
    
    currentQuestion = 0;
    questionContainerElement.classList.remove('hidden');
    nextQuestion();
    document.getElementById('score').innerText = 0;
}

// function to give the user the next question
function nextQuestion() {
    reset();
    getQuestion(randomQuestions[currentQuestion]);
}

// function to get the questions from the array#
function getQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('button');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', checkAnswer);
        answerButtonsElement.appendChild(button);
    });
    if (question.image) {
        questionImage.src = `assets/images/${question.image}`;
        questionImage.classList.remove('hidden');
    } else {
        questionImage.src = "";
        questionImage.classList.add('hidden');
    }
}

// function to reset after the question has been answered
function reset() {
    nextButton.classList.add('hidden');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

/* 
function that checks the answer the user selects and checks if its correct or not, 
this function also checks if there are more questions in the array or not to 
either show a 'next' or 'play again' button
*/
function checkAnswer(event) {
    const selectedAnswer = event.target;
    const correct = selectedAnswer.dataset.correct;
    Array.from(answerButtonsElement.children).forEach(button => {
        setClass(button, button.dataset.correct);
    });
    if (correct) {
        addScore();
    }
    if (randomQuestions.length > currentQuestion + 1 || currentQuestion >= 10) {
        nextButton.classList.remove('hidden');
    } else {
        restartButton.innerText = 'Play Again';
        restartButton.style.background = 'cyan';
    }
}

// function to set the colours for both correct and incorrect answers (green = correct, red = incorrect)
function setClass(element, correct) {
    clearClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('incorrect');
    }
}

// function that removes the colour effect of getting the answer right or wrong
function clearClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}

// function to add score for each correct answer
function addScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

// Where the list of questions and answers are stored
const questions = [{
        category: 'characters',
        question: 'Who is this character?',
        image: 'character-images/bloodhound.png',
        answers: [{
                text: 'Bloodhound',
                correct: true
            },
            {
                text: 'Lifeline',
                correct: false
            },
            {
                text: 'Caustic',
                correct: false
            },
            {
                text: 'Seer',
                correct: false
            }
        ]
    },
    {
        category: 'characters',
        question: 'How many characters start with the letter "C"?',
        answers: [{
                text: '0',
                correct: false
            },
            {
                text: '1',
                correct: false
            },
            {
                text: '4',
                correct: false
            },
            {
                text: '2',
                correct: true
            }
        ]
    },
    {
        category: 'characters',
        question: 'How many characters are currently in the game?',
        answers: [{
                text: '20',
                correct: false
            },
            {
                text: '17',
                correct: false
            },
            {
                text: '15',
                correct: false
            },
            {
                text: '18',
                correct: true
            }
        ]
    },
    {
        category: 'weapons',
        question: 'How many weapons are in Apex Legends at the moment?',
        answers: [{
                text: '25',
                correct: false
            },
            {
                text: '27',
                correct: true
            },
            {
                text: '26',
                correct: false
            },
            {
                text: '28',
                correct: false
            }
        ]
    },
    {
        question: 'How many maps does Apex Legends have?',
        answers: [{
                text: '1',
                correct: false
            },
            {
                text: '3',
                correct: true
            },
            {
                text: '4',
                correct: false
            },
            {
                text: '2',
                correct: false
            }
        ]
    },
    {
        question: 'How much does Apex Legends cost?',
        answers: [{
                text: '£20',
                correct: false
            },
            {
                text: '£30',
                correct: false
            },
            {
                text: '£0',
                correct: true
            },
            {
                text: '£10',
                correct: false
            }
        ]
    },
    {
        category: 'characters',
        question: 'How many support characters are there?',
        answers: [{
                text: '2',
                correct: true
            },
            {
                text: '5',
                correct: false
            },
            {
                text: '8',
                correct: false
            },
            {
                text: '11',
                correct: false
            }
        ]
    },
    {
        category: 'characters',
        question: 'How many defensive characters are there?',
        answers: [{
                text: '6',
                correct: false
            },
            {
                text: '4',
                correct: true
            },
            {
                text: '2',
                correct: false
            },
            {
                text: '0',
                correct: false
            }
        ]
    },
    {
        category: 'attachments',
        question: 'What is the "Digital Threat" attachment?',
        answers: [{
                text: 'A Character Name',
                correct: false
            },
            {
                text: 'A Weapon Attachment',
                correct: false
            },
            {
                text: 'A Weapon Optic',
                correct: true
            },
            {
                text: 'An Armour Piece',
                correct: false
            }
        ]
    },
    {
        category: 'attachments',
        question: 'Which of these can currently be found as a level 4 item?',
        answers: [{
                text: 'Weapon Stocks',
                correct: false
            },
            {
                text: 'Extended Weapon Magazines',
                correct: true
            },
            {
                text: 'Barrel Stabilizer',
                correct: false
            },
            {
                text: 'Shotgun Bolts',
                correct: false
            }
        ]
    },
    {
        question: 'How many different body shield levels are there?',
        answers: [{
                text: '4',
                correct: false
            },
            {
                text: '2',
                correct: false
            },
            {
                text: '5',
                correct: true
            },
            {
                text: '3',
                correct: false
            }
        ]
    },
    {
        category: 'characters',
        question: 'Which of these characters is a recon character?',
        answers: [{
                text: 'Crypto',
                correct: true
            },
            {
                text: 'Caustic',
                correct: false
            },
            {
                text: 'Lifeline',
                correct: false
            },
            {
                text: 'Wattson',
                correct: false
            }
        ]
    },
    {
        question: 'What map feature allows you to bring your teammates back into the fight?',
        answers: [{
                text: 'Respawn Beacon',
                correct: true
            },
            {
                text: 'Jump Tower',
                correct: false
            },
            {
                text: 'Supply Ship',
                correct: false
            },
            {
                text: 'Replicator',
                correct: false
            }
        ]
    },
    {
        question: 'Who developed Apex Legends?',
        answers: [{
                text: 'Electronic Arts',
                correct: false
            },
            {
                text: 'Epic Games',
                correct: false
            },
            {
                text: 'Respawn Entertainment',
                correct: true
            },
            {
                text: 'Square Enix',
                correct: false
            }
        ]
    },
    {
        category: 'characters',
        question: 'How many characters were released when Apex Legends first launched?',
        answers: [{
                text: '10',
                correct: false
            },
            {
                text: '4',
                correct: false
            },
            {
                text: '12',
                correct: false
            },
            {
                text: '8',
                correct: true
            }
        ]
    },
    {
        category: 'weapons',
        question: 'How many classes of weapons are there?',
        answers: [{
                text: '5',
                correct: false
            },
            {
                text: '7',
                correct: true
            },
            {
                text: '3',
                correct: false
            },
            {
                text: '6',
                correct: false
            }
        ]
    },
    {
        category: 'weapons',
        question: 'How many burst weapons are there?',
        answers: [{
                text: '0',
                correct: false
            },
            {
                text: '2',
                correct: true
            },
            {
                text: '1',
                correct: false
            },
            {
                text: '3',
                correct: false
            }
        ]
    },
    {
        category: 'attachments',
        question: 'How many weapon attachments are there (excluding optics)?',
        answers: [{
                text: '6',
                correct: false
            },
            {
                text: '10',
                correct: false
            },
            {
                text: '13',
                correct: false
            },
            {
                text: '8',
                correct: true
            }
        ]
    },
    {
        category: 'attachments',
        question: 'Which weapons attachment "Improves weapon handling and reduces aim drift"?',
        answers: [{
                text: 'Shotgun Bolts',
                correct: false
            },
            {
                text: 'Barrel Stabilizer',
                correct: false
            },
            {
                text: 'Extended Magazines',
                correct: false
            },
            {
                text: 'Stocks',
                correct: true
            }
        ]
    },
    {
        category: 'weapons',
        question: 'How many ammow types are there (Including the special ammo from care package weapons)?',
        answers: [{
                text: '5',
                correct: false
            },
            {
                text: '7',
                correct: true
            },
            {
                text: '3',
                corerct: false
            },
            {
                text: '9',
                correct: false
            }
        ]
    },
    {
        category: 'attachments',
        question: 'How many different optics are there?',
        answers: [{
                text: '10',
                correct: true
            },
            {
                text: '6',
                correct: false
            },
            {
                text: '12',
                correct: false
            },
            {
                text: '8',
                correct: false
            }
        ]
    },
    {
        question: 'How many healing items are in the game?',
        answers: [{
                text: '3',
                correct: false
            },
            {
                text: '5',
                correct: true
            },
            {
                text: '7',
                correct: false
            },
            {
                text: '6',
                correct: false
            }
        ]
    },
    {
        question: 'What does an "Epic" level helmet do?',
        answers: [{
                text: '20% Headshot Damage Reduction',
                correct: false
            },
            {
                text: '30% Headshot Damage Reduction',
                correct: false
            },
            {
                text: '40% Headshot Damage Reduction',
                correct: false
            },
            {
                text: '50% Headshot Damage Reduction',
                correct: true
            }
        ]
    },
    {
        category: 'weapons',
        question: 'Which of these is not a "Light" ammo type weapon?',
        answers: [{
                text: 'R301-Carbine',
                correct: false
            },
            {
                text: 'Wingman',
                correct: true
            },
            {
                text: 'R-99',
                correct: false
            },
            {
                text: 'G7-Scout',
                correct: false
            }
        ]
    },
    {
        category: 'attachments',
        question: 'Which attachment can only go on shotguns?',
        answers: [{
                text: 'Stocks',
                correct: false
            },
            {
                text: 'Bolts',
                correct: true
            },
            {
                text: 'Extended Magazines',
                correct: false
            },
            {
                text: 'Barrel Stabilizers',
                correct: false
            }
        ]
    },
    {
        category: 'characters',
        question: 'Which character is this?',
        image: 'character-images/loba.png',
        answers: [{
                text: 'Seer',
                correct: false
            },
            {
                text: 'Loba',
                correct: true
            },
            {
                text: 'Bangalore',
                correct: false
            },
            {
                text: 'Wattson',
                correct: false
            }
        ]
    },
    {
        category: 'characters',
        question: 'What role does this character play?',
        image: 'character-images/pathfinder.png',
        answers: [{
                text: 'Recon',
                correct: true
            },
            {
                text: 'Support',
                correct: false
            },
            {
                text: 'Defensive',
                correct: false
            },
            {
                text: 'Offensive',
                correct: false
            }
        ]
    },
    {
        category: 'characters',
        question: 'How many character roles are there?',
        answers: [{
                text: '4',
                correct: true
            },
            {
                text: '3',
                correct: false
            },
            {
                text: '6',
                correct: false
            },
            {
                text: '5',
                correct: false
            }
        ]
    },
    {
        category: 'weapons',
        question: 'What is this weapon called?',
        image: 'weapons/spitfire-resize.png',
        answers: [{
                text: 'Hemlok',
                correct: false
            },
            {
                text: 'Volt',
                correct: false
            },
            {
                text: 'Prowler',
                correct: false
            },
            {
                text: 'Spitfire',
                correct: true
            }
        ]
    },
    {
        category: 'weapons',
        question: 'What ammo type is the Hemlok?',
        answers: [{
                text: 'Light',
                correct: false
            },
            {
                text: 'Heavy',
                correct: true
            },
            {
                text: 'Sniper',
                correct: false
            },
            {
                text: 'Energy',
                correct: false
            }
        ]
    },
    {
        category: 'weapons',
        question: 'What gun takes Energy ammo?',
        answers: [{
                text: 'Devotion',
                correct: true
            },
            {
                text: 'P2020',
                correct: false
            },
            {
                text: '30-30 Repeater',
                correct: false
            },
            {
                text: 'Charge Rifle',
                correct: false
            }
        ]
    },
    {
        catergory: 'weapons',
        question: 'What ammo type is this?',
        image: 'ammo/energy-ammo.png',
        answers: [{
                text: 'Light',
                correct: false
            },
            {
                text: 'Arrows',
                correct: false
            },
            {
                text: 'Shotgun',
                correct: false
            },
            {
                text: 'Energy',
                correct: true
            }
        ]
    },
    {
        category: 'weapons',
        question: 'Which of these has always been in the care package?',
        answers: [{
                text: 'Spitfire',
                correct: false
            },
            {
                text: 'Kraber',
                correct: true
            },
            {
                text: 'Alternator',
                correct: false
            },
            {
                text: 'Triple Take',
                correct: false
            }
        ]
    },
    {
        category: 'attachments',
        question: 'What weapon optic is this?',
        image: 'attachments/2x-hcog.png',
        answers: [
            { text: '1x-2x Variable', correct: false },
            { text: '2x HCOG', correct: true },
            { text: '3x HCOG', correct: false },
            { text: '2x-4x Variable', correct: false }
        ]
    },
    {
        category: 'attachments',
        question: 'What weapon type do these stocks fit?',
        image: 'attachments/sniper-stock.png',
        answers: [
            { text: 'Assault Rifle', correct: false },
            { text: 'Shotguns', correct: false },
            { text: 'Pistols', correct: false },
            { text: 'Snipers', correct: true }
        ]
    },
    {
        category: 'attachments',
        question: 'How many weapon optics can only fit on snipers?',
        answers: [
            { text: '3', correct: true },
            { text: '6', correct: false },
            { text: '2', correct: false },
            { text: '4', correct: false }
        ]
    },
    {
        category: 'attachments',
        question: 'What is the zoom level on this optic?',
        image: 'attachments/3x-hcog.png',
        answers: [
            { text: '4x Zoom', correct: false },
            { text: '2x Zoom', correct: false },
            { text: '3x Zoom', correct: true },
            { text: '6x Zoom', correct: false }
        ]
    }
];