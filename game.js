// `game.js` file will randomly select a word for the player.
var Word= require('./word.js');

var wordBank=["Harry","Hermione","Ron","Tonks","Dobby","Ginny","Lockhart","Moody","McGonagall","Umbridge","Malfoy","Lupin","Hagrid","Luna","Bellatrix","Sirius","Voldemort","Neville","Dumbledore","Snape","Accio","Alohomora","Azkaban","Butterbeer","Dementor","Expelliarmus","Gillyweed","Gringotts","Gryffindor","Hogsmeade","Hogwarts","Honeydukes","Howler","Hufflepuff","Incendio","Lumos","Mudblood","Muggle","Ollivanders","Parseltongue","Poltergeist","Portkey","Ravenclaw","Quidditch","Riddikulus","Slytherin","Transfiguration","Stupefy","Wolfsbane"];

function Game() {
	//properties of the object
	//games should have wins losses
	//a way to keep track of the number of guess left
	//the current games word
	this.wins=0;
	this.losses=0;
	this.guessRemaining=0;
	this.lettersGuessed = [];
	this.word=null;
	//actions of the game
	//the game should be able to rest for replay ability
	this.startNewGame =function(){
		this.guessRemaining=10;
		this.lettersGuessed=[];
		this.word=this.generateRandWord();
		console.log("Lets start Harry Potter Hangman!");
	};
	//game should generate a new random word object
	this.generateRandWord=function () {
		var randWord = wordBank[Math.floor(Math.random()*wordBank.length)];
		//console.log(randWord);
		var newWord= new Word(randWord);
		newWord.generateGuessWord();
		return newWord;
	};
};

//
// var game=new Game();
// game.startNewGame();
// game.word.displayWord();

module.exports = Game;

