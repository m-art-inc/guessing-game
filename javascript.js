//Starting script...
console.log("Starting Script. Asking user for information.");
var userName = prompt("What's Your Name?",""); //Username
console.log("User Name: "+userName);
var message = "Hello "+userName+"!"; //Greeting
console.log("Message: "+message);
//Question 1
var question1 = prompt("Do I own a dog?");
if (question1.toLowerCase() == "yes"){
alert("Yes, "+ userName +". In fact her name is Luna and she is 3 years old!");
  console.log("Question (1) User guess was correct. Your guess was "+question1);
  document.getElementById("answer_one").style.backgroundColor = "green";
} else{
alert("Sorry, "+ userName +" it's true, I own a dog");
  console.log("Question (1) User guess was incorrect. ");
  document.getElementById("answer_one").style.backgroundColor = "red";
}
//Question 2
var question2 = prompt("Did I grow up in Oregon?");
if (question2.toLowerCase() == "no"){
alert(userName +". You are right! I did NOT grow up in Oregon");
  console.log("Question (2) User guess was correct.");
  document.getElementById("answer_two").style.backgroundColor = "green";
} else{
alert("Sorry, "+ userName +" I did NOT grow up in Oregon.");
  console.log("Question (2) User guess was incorrect.");
  document.getElementById("answer_two").style.backgroundColor = "red";
}
//Question 3
var question3 = prompt("Do I speak more than one language?");
if (question3.toLowerCase() == "yes"){
alert(userName +". You are right! I speak English and Spanish!");
  console.log("Question (3) User guess was correct.");
  document.getElementById("answer_three").style.backgroundColor = "green";
} else{
alert(userName +". It's true! I speak English and Spanish!");
  console.log("Question (3) User guess was incorrect.");
  document.getElementById("answer_three").style.backgroundColor = "red";
}
//Question 4
var question4 = prompt("How Old Am I?");
if (question4 == 28){
alert(userName +". You are right! I am getting old!");
  console.log("Question (4) User guess was correct.");
  document.getElementById("answer_four").style.backgroundColor = "green";
} else{
alert(userName +". Sorry! I am 28 years old!");
  console.log("Question (4) User guess was incorrect.");
  document.getElementById("answer_four").style.backgroundColor = "red";
}
//Question 5
function numberGame () {
 var secretNumber = 3;
 var counts = 15;
 var question5 = 'Whats my favorite number? 1-15!';
 while (counts > 0) {
   var guess = prompt(question5 +'\nYou have ' + counts + ' guesses left.');
   guess = Number(guess);
   if (guess == secretNumber) {
     alert("Great job, You got it! My favorite number is "+secretNumber+".");
     counts = 0;
     document.getElementById("answer_five").style.backgroundColor = "green";
   var table_cell = document.getElementById("answer_five");
   table_cell.innerHTML = guess;
   } else if (guess > secretNumber){
     counts -= 1;
     alert('Your guess was too high, try again');
   } else if (guess < secretNumber) {
     counts -= 1;
     alert('Your guess was too low, try again');
     console.log("Question (5) User guess was incorrect. Try again");
   } else {
     alert('I am confused, Your guess was neither high or low, try again');
   }
 }
}

//Answers function
function userAnswers() {
  var table_cell = document.getElementById("answer_one");
  table_cell.innerHTML = question1;
  console.log(question1);
  var table_cell = document.getElementById("answer_two");
  table_cell.innerHTML = question2;
  var table_cell = document.getElementById("answer_three");
  table_cell.innerHTML = question3;
  var table_cell = document.getElementById("answer_four");
  table_cell.innerHTML = question4;

}
