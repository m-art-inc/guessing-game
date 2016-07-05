console.log("Starting Script. Asking user for information.");
var userName = prompt("What's Your Name?","");
console.log("User Name: "+userName);
var message = "Hello "+userName+"!";
console.log("Message: "+message);

var question = prompt("Do I own a dog?");
if (question.toLowerCase() == "yes"){
alert("Yes, "+ userName +". In fact her name is Luna and she is 3 years old!");
  console.log("Question (1) User guess was correct. Your guess was "+question);
  document.write("<p style=color:green;>Question (1) Correct, your guess was "+question+",</P>");
} else{
alert("Sorry, "+ userName +" it's true, I own a dog");
  console.log("Question (1) User guess was incorrect. ");
  document.write("<p style=color:red;>Question (1) Incorrect, your guess was "+question+", <p/>");
}

var question = prompt("Did I grow up in Oregon?");
if (question.toLowerCase() == "no"){
alert(userName +". You are right! I did NOT grow up in Oregon");
  console.log("Question (2) User guess was correct.");
  document.write("<p style=color:green;>Question (2) Correct, your guess was "+question+", </p>");
} else{
alert("Sorry, "+ userName +" I did NOT grow up in Oregon.");
  console.log("Question (2) User guess was incorrect.");
  document.write("<p style=color:red;> Question (2) Incorrect, your guess was "+question+", </p>");
}

var question = prompt("Do I speak more than one language?");
if (question.toLowerCase() == "yes"){
alert(userName +". You are right! I speak English and Spanish!");
  console.log("Question (3) User guess was correct.");
  document.write("<p style=color:green;>Question (3) Correct, your guess was "+question+".</p>");
} else{
alert(userName +". It's true! I speak English and Spanish!");
  console.log("Question (3) User guess was incorrect.");
  document.write("<p style=color:red;>Question (3) Incorrect, your guess was "+question+".</p>");
}

var question = prompt("How Old Am I?");
if (question == 28){
alert(userName +". You are right! I am getting old!");
  console.log("Question (4) User guess was correct.");
  document.write("<p style=color:green;>Question (4) Correct, your guess was "+question+".</p>");
} else{
alert(userName +". Sorry! I am 28 years old!");
  console.log("Question (4) User guess was incorrect.");
  document.write("<p style=color:red;>Question (4) Incorrect, your guess was "+question+".</p>");
}


var x = 3;
var counts = 15;
var question = 'Whats my favorite number? 1-15!';
while (counts > 0) {
var guess = prompt(question +
    '\nYou have ' + counts + ' guesses left.');
if (!guess) break;
guess = Number(guess);
if (guess == x) {
  prompt("Great job, You got it! My favorite number is "+x+".");
  counts = 0;
  console.log("Question (5) User guess was correct.");
  document.write("<p style=color:green;>Question (5) Correct, your guess was "+x+".</p>");
} else {
  question = 'Nope.';
if (guess < x) question += ' Too low, try again';
if (guess > x) question += ' Too high, try again';
  counts = counts - 1;
  console.log("Question (5) User guess was incorrect.");
  document.write("<p style=color:red;>Question (5) incorrect, your guess was "+x+".</p>");
}
}
