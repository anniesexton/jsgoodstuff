// Create a constructor function called Quo.
// It makes an object with a property called status.

var Quo = function(string) {
	this.status = string;
}

// Give all instanes of Quo a public method
// called get_status.

Quo.prototype.get_status = function() {
	return this.status;
}

// Make an instance of Quo.

var myQuo = new Quo("confused");

// document.writeln(myQuo.get_status()); 

// ---------------------------------------- //

// Apparently this is not recommended
// and construction functions suck balls?

var Book = function() {
	this.numPages;
	this.title;
	this.readFirstSentence = function() {
		alert("It was a dark and stormy night...");
	}
}

var myBook = new Book();

myBook.title = "Harry Potter";
myBook.numPages = 350;
document.writeln(myBook.title); 
document.writeln("<br>"); 
document.writeln(myBook.numPages); 

myBook.readFirstSentence();