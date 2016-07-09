//Starting script...
function visitorName() {
  var userName = prompt("What's Your Name?",""); //Username
  console.log("User Name: "+userName);
  var message = "Hello "+userName+"!"; //Greeting
  document.getElementById("name_slot").innerHTML = message;
  console.log("Message: "+message);
}
//Question 1
function qOne() {
  var question1 = prompt("Do I own a dog?");
  if (question1.toLowerCase() == "yes"){
    console.log("Question (1) User guess was correct. Your guess was "+question1);
    document.getElementById("answer_one").style.backgroundColor = "#0F8517";
  var table_cell = document.getElementById("answer_one");
  table_cell.innerHTML = question1;
  } else{
    var table_cell = document.getElementById("answer_one");
    table_cell.innerHTML = question1;
      console.log("Question (1) User guess was incorrect. ");
      document.getElementById("answer_one").style.backgroundColor = "#A91313";
  }
}
//Question 2
function qTwo() {
  var question2 = prompt("Did I grow up in Oregon?");
  if (question2.toLowerCase() == "no"){
    console.log("Question (2) User guess was correct.");
    document.getElementById("answer_two").style.backgroundColor = "#0F8517";
  var table_cell = document.getElementById("answer_two");
  table_cell.innerHTML = question2;
  } else{
    var table_cell = document.getElementById("answer_two");
    table_cell.innerHTML = question2;
      console.log("Question (2) User guess was incorrect.");
      document.getElementById("answer_two").style.backgroundColor = "#A91313";
  }
}
//Question 3
function qThree() {
  var question3 = prompt("Do I speak more than one language?");
  if (question3.toLowerCase() == "yes"){
    console.log("Question (3) User guess was correct.");
    document.getElementById("answer_three").style.backgroundColor = "#0F8517";
  var table_cell = document.getElementById("answer_three");
  table_cell.innerHTML = question3;
  } else{
    var table_cell = document.getElementById("answer_three");
    table_cell.innerHTML = question3;
      console.log("Question (3) User guess was incorrect.");
      document.getElementById("answer_three").style.backgroundColor = "#A91313";
  }
}
//Question 4
function qFour() {
  var question4 = prompt("How Old Am I?");
  if (question4 == 28){
    console.log("Question (4) User guess was correct.");
    document.getElementById("answer_four").style.backgroundColor = "#0F8517";
  var table_cell = document.getElementById("answer_four");
  table_cell.innerHTML = question4;
  } else{
    var table_cell = document.getElementById("answer_four");
    table_cell.innerHTML = question4;
      console.log("Question (4) User guess was incorrect.");
      document.getElementById("answer_four").style.backgroundColor = "#A91313";
  }
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
     document.getElementById("answer_five").style.backgroundColor = "#0F8517";
   var table_cell = document.getElementById("answer_five");
   table_cell.innerHTML = guess;
   } else if (guess > secretNumber){
     counts -= 1;
     alert('Your guess was too high, try again');
     document.getElementById("answer_five").style.backgroundColor = "#F3CB00"
   } else if (guess < secretNumber) {
     counts -= 1;
     alert('Your guess was too low, try again');
     document.getElementById("answer_five").style.backgroundColor = "#F3CB00"
     console.log("Question (5) User guess was incorrect. Try again");
   } else {
     alert('I am confused, Your guess was neither high or low, try again');
     document.getElementById("answer_five").style.backgroundColor = "#F3CB00"
   }
 }
}
