
var inquirer=require('inquirer');
var Game= require('./game.js');
var game = new Game();

//- Start Game
function initHangman() {
	//- Welcome the user
	game.startNewGame();
	//- display the banks of the word
	//console.log("blank word")
	game.word.displayWord();

	//below is a test to make sure if there is a letter in the guessed array it will be caught
	//game.lettersGuessed.push('a');

	//- ask the user to enter a guess.
	promptAndProcessInput();
}

function promptAndProcessInput() {
	inquirer.prompt([
		{
			type:"input",
			name:"userGuess",
			message:"Enter a guess (letters a-z or numbers 0-9)",
			validate:function(value){
				var validInputs= /[a-z]|[0-9]/i;
				//this checks to make sure the inputs are valid alphanumeric characters
				if(value.length===1&&validInputs.test(value)){
					//this check to see if the letter has een guessed already
					if(game.lettersGuessed.length>0) {
						//console.log("got here!")
						for (var items in game.lettersGuessed) {
							//console.log(game.lettersGuessed[items])
							if (value.toLowerCase() === game.lettersGuessed[items]) {
								return "This character has already been chosen.\nPlease enter a valid guess (letters a-z or numbers 0-9):"
							}
						}
					}
					return true;
				}

				return	"Please enter a valid guess (letters a-z or numbers 0-9):"
			}
		}
	]).then(function(answer){
		//- Check to see if the guess is in the word
		//console.log(answer.userGuess);
		game.lettersGuessed.push(answer.userGuess);
		if(game.word.checkLetters(answer.userGuess)){
			//console.log("Correct");
			// -- display the word
			game.word.displayWord();
			// -- ask for a new guess
			if(game.word.isGuessed()){
				winGame();
			}
			else {
				promptAndProcessInput();
			}
		}
		else{
			game.guessRemaining--;
			console.log("Guesses Remaining: "+game.guessRemaining);
			game.word.displayWord();
			if(game.guessRemaining<=0){
				loseGame();
			}
			else{
				promptAndProcessInput();
			}
		}

	})
}

function winGame(){
	game.wins++;
	console.log("Congratulations you won!\nYour current record is: "+game.wins+" wins and: "+game.losses+" losses");

	playAgainPrompt();
}
function loseGame(){
	game.losses++;
	console.log("So sorry you lost!\nYour current record is: "+game.wins+" wins and: "+game.losses+" losses");
	console.log("The word you were trying to guess was: "+game.word.answerWord.join(''))
	playAgainPrompt();
}

function playAgainPrompt(){
	inquirer.prompt([
		{
			type:'confirm',
			name:'playAgain',
			message:'Would you like to play again?',
		}
	]).then(function(answer){
		if(answer.playAgain){
			initHangman();
		}
		else{
			console.log("Goodbye! Play again soon!");
			return;
		}
	});
}
initHangman();