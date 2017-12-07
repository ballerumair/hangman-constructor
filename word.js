//`word.js` should contain all of the methods which will check the letters guessed versus the random word selected.
var Letter = require("./letter.js");


function Word(inputwrd) {
    //properties of the object
    //a list of letter objects
    //a boolean that says if the word is guessed or not
    this.guessWord = [];
    this.answerWord = inputwrd.toLowerCase().split("");
    this.guessedCorrect = false;
    //actions
    //
    this.isGuessed = function () {
        var currAnswer=[]
        for(var i=0; i<this.answerWord.length;i++){
            currAnswer.push(this.guessWord[i].returnCorrect())
        }
        if(currAnswer.join("").toLowerCase()===this.answerWord.join("").toLowerCase()){
            this.guessedCorrect=true;
        }
        return this.guessedCorrect;
    };
    this.displayWord = function () {
        //loop through letters guessed
        //for each letter guessed, thet the text
        var final=[]
        for(var letter in this.guessWord){
            final.push(this.guessWord[letter].returnCorrect())
        }
        console.log(final.join(" "));
    }
    this.generateGuessWord = function () {
        for (var i=0; i < this.answerWord.length; i++) {
            this.guessWord.push(new Letter(this.answerWord[i].toLowerCase()));
        }
    }
    this.checkLetters = function (toCheckLetter) {
        var changed=false;
        for (var i=0; i < this.answerWord.length; i++) {
            // console.log(this.displayedWord[i].secretValue);
            // console.log(toCheckLetter.toLowerCase());
            if (toCheckLetter.toLowerCase() === this.guessWord[i].secretValue){
                // console.log(this.displayedWord[i]);
                this.guessWord[i].correct=true;
                changed=true;
            }
        }
        return changed;
    }
}
// var word = new Word("hello-world");
// word.generateDisplayWord();
// console.log(word.checkLetters('l'));
// word.displayWord();
// for(var i=0;i<word.answerWord.length;i++) {
//     word.guessWord[i].correct = true;
// }
// word.displayWord();
// console.log(word.isGuessed())



module.exports = Word;