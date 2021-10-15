# Apex Quiz Game
Apex Quiz is a basic quiz game made using HTML, CSS and JavaScript. The purpose of this particular quiz is to test the user on their basic knowledge of the game Apex Legends. 
I understand that not everyone who finds this quiz will know about Apex, with this in mind I have also linked my previous project in the About/Help section on the landing page this allows the user to prepare themselves for the quiz.
(Insert am i responsive screenshot here)

## Wireframes
Before I started any of the coding I first created some wireframes for how I envisioned the project to look.
* __Landing Page Wireframe__
    * At first I didn't put much thought into a seperate landing page until my mentor mentioned the idea of linking my previous project, the landing page will also give the user a small heads up of sort on what they should expect from this quiz.
    * Along with the text information there will also be a button that when clicked will take the user to the quiz page

![Landing Page Wirefram](/documentation/wireframes/homepage-wireframe.png)

* __Quiz Game Wireframe__
    * The plan for the actual game was quite simple, there would be an outlined game area with the question, answers, score and everything else within this game area.
    * I also plan on there being a home button which will allow the user to return to the landing page.

![Quiz Game Wirefram](/documentation/wireframes/quizgame-wireframe.png)

## Features

* __Welcome Area__
    * The first feature of this project is a welcome area on the landing page.
    * This area is just to welcome users to the quiz and briefly explain what the quiz is about.

![Welcome Area](/documentation/readme-screenshots/welcome-area.png)

* __To Quiz Button__ 
    * This feature is just a simple button which will take the user to the quiz game on click.

![To Quiz Button](/documentation/readme-screenshots/toquiz-button.png)

* __Help Area__
    * The final feature on the landing page is the help area.
    * The help area has one main focus and that is to help the user by preparing them a little bit for the quiz, this is done by providing a reference to my previous project ("Gamers Guide" where they could find all the answers to the questions), as well as some example questions.

![Help Area](/documentation/readme-screenshots/help-section.png)

* __Quiz Start__ 
    * After the user clicks the "To Quiz!" button they will be redirected to the quiz game page, where they will be greated by a 'Start' button which will call the 'startGame' function allowing the user to begin the quiz.

![Quiz Start Button](/documentation/readme-screenshots/quizgame-start.png)

* __Quiz Game Area__
    * All questions in this quiz are randomised meaning the user is unlikely to be met with the same first question or the same set of questions each time they play.
    * This allows for replayability which I think is important in any type of game.
    * In the below screenshot you can see there are multiple features shown which will be covered underneath.

![Quiz Game Area](/documentation/readme-screenshots/quizgame-area.png)

* __Quiz Game Question Area__
    * This is the area in which the questions will be displayed 
    * There are two types of questions in this quiz, one being a text based question and the other being a text and image based question.

![Quiz Game Text Question](/documentation/readme-screenshots/quizgame-question-text.png)

![Quiz Game Image Question](/documentation/readme-screenshots/)

* __Quiz Game Answer Area__
    * This is the area where the answers will be displayed for the user to see and choose from.
    * There will only be four options to pick from and once the user has picked an answer the correct answer will light up green and all the incorrect ones will light up red, allowing the user to see which answer is correct even if they chose wrong.

![Quiz Game Answer Area](/documentation/readme-screenshots/quizgame-answers.png)

![Quiz Game Answer Check](/documentation/readme-screenshots/quizgame-answers-check.png)

* __Quiz Game Home Icon__
    * Within the quiz game area located on the top right is a home icon which will redirect the user back to the initial landing page.
    * This allows users to read over the help area again if they require a little extra help.

![Quiz Home Icon](/documentation/readme-screenshots/quizgame-home.png)

* __Quiz Game Score Icon__
    * The score feature like in most games is just there to help the user keep track of how well they are doing.
    * It is located on the top left of the game area.

![Quiz Score Icon](/documentation/readme-screenshots/quizgame-score.png)

* __Quiz Game Restart Button__ 
    * This feature works similar to the home button except instead of redirecting to the landing page it takes the user back to the very start of the quiz.
    * This allows the user to restart the quiz if they are not doing as well as they hoped or just fancy starting again.

![Quiz Restart Button](/documentation/readme-screenshots/quizgame-restart-button.png)

* __Quiz Game Next Button__
    * This feature only appears after the user has answered the question and will disappear once the next question appears until they answer that one.
    * This feature allows the user to advance to the next question when they are ready.

![Quiz Game Next Button](/documentation/readme-screenshots/quizgame-next.png)

* __Quiz Game Play Again Button__
    * At the end of the quiz the users will be given a play again button which when pressed starts the quiz all over again and wipes their current score.

![Quiz Game Play Again](/documentation/readme-screenshots/quizgame-playagain.png)

## Testing
Whenever I added a new feature or function before I would add or commit the change I will first check that it works as planned in the browser. Some features or functions might not work entirely as planned but might still be commited and changed later.

All the buttons in this project have been tested multiple times and are all working as expected, some of the buttons will have style properties changed before the final commit.

I have tested the quiz game itself each time I make any change to the project to ensure it still works. It works as planned and is only showing a set number of questions to the user despite having a bank of more questions. These questions are randomised which allows the user to replay the quiz over and over again with a lower chance of getting the same questions again and again.

The score function increases with each correct answer and is reset to 0 when the user restarts or clicks play again.

The home icon redirects the user to the initial landing page as planned.

The restart button takes the user back to the very start of the quiz where they are required to click the start button to begin as planned.

The start button calls the start game function as planned and unhides the score, home icon, restart button as well as the question and answer area as intended.

The questions are pulled and displayed to the user as expected and the answers to the questions are also pulled and displayed as expected.

The questions with images are not showing as intended as seen below, this issue will hopefully be solved before the final commit otherwise removing the image related questions might be the only option.

![Quiz Game Image Out of Frame](/documentation/readme-screenshots/quizgame-image-question-bug.png)

## Validator Testing
    * __HTML__