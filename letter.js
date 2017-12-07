// `letter.js` should control whether or not a letter appears as a "_" or as itself on-screen.
var regEx= /[a-z]|[0-9]/i;
function Letter(givenChar){

	//properties
	this.displayLetter="_";
	this.secretValue=givenChar;
	this.correct=false;
	//actions
	this.returnCorrect=function () {
		if(this.correct){
			return this.secretValue;
		}
		else if(!regEx.test(this.secretValue)){
			return this.secretValue;
		}
		else{
			return this.displayLetter;
		}
	}
}

module.exports = Letter;