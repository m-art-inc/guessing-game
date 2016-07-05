console.log("Starting Script. Asking user for information.");
var userName = prompt("What's Your Name?","");
console.log("User Name: "+userName);
var message = "Hello "+userName+"!";
console.log("Message: "+message);

var guessOne = prompt("Do I own a dog?");
  console.log("Question (1)");
if (guessOne.toLowerCase() == "yes"){
alert("Yes, "+ userName +". In fact her name is Luna and she is 3 years old!");
  console.log("User guess was correct. Your guess was "+guessOne);
  document.write("<p style=color:green;>Question (1) Correct, your guess was "+guessOne+",</P>");
} else{
alert("Sorry, "+ userName +" it's true, I own a dog");
  console.log("User guess was incorrect. "+guessOne);
  document.write("<p style=color:red;>Question (1) Incorrect, your guess was "+guessOne+", <p/>");
}

var guessTwo = prompt("Did I grow up in Oregon?");
  console.log("Question (2)");
if (guessTwo.toLowerCase() == "no"){
alert(userName +". You are right! I did NOT grow up in Oregon");
  console.log("User guess was correct.");
  document.write("<p style=color:green;>Question (2) Correct, your guess was "+guessTwo+", </p>");
} else{
alert("Sorry, "+ userName +" I did NOT grow up in Oregon.");
  console.log("User guess was incorrect.");
  document.write("<p style=color:red;> Question (2) Incorrect, your guess was "+guessTwo+", </p>");
}

var guessThree = prompt("Do I speak more than one language?");
  console.log("Question (3)");
if (guessThree.toLowerCase() == "yes"){
alert(userName +". You are right! I speak English and Spanish!");
  console.log("User guess was correct.");
  document.write("<p style=color:green;>Question (3) Correct, your guess was "+guessThree+".</p>");
} else{
alert(userName +". It's true! I speak English and Spanish!");
  console.log("User guess was incorrect.");
  document.write("<p style=color:red;>Question (3) Incorrect, your guess was "+guessThree+".</p>");
}

var guess = prompt("What Is My Favorite Number? - (between 1 - 15)");
  console.log("Question (Bonus)");
if (guess == 3){
  console.log("User guess was correct.");
  document.write("<p style=color:green;>Bonus Question (4) Correct, your guess was "+guessFour+".</p>");
}
if (guess > 4){
  guess = prompt("Your guess is too high!");
  console.log("User guess was too high!");
  document.write("<p>Question (4) Your guess was too high!.</p>");
} else if (guess < 3){
  guess = prompt("Your guess is too low!");
  console.log("User guess was too low!");
  document.write("<p>Question (4) Your guess was too low!.</p>");
}
