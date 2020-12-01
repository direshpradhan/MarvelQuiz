const chalk = require('chalk');
console.log(chalk.yellow("________________MARVEL QUIZ________________ \n"))
var readLineSync = require("readline-sync");
var username = readLineSync.question("What is your name? ");
var score=0;

console.log(chalk.cyanBright("Welcome to the Marvel Quiz," + username + "\n"));

var questionList = [
{
  question: "1. What is the name of Thor's Hammer? \n a) Vanir \n b) Mjolnir \n c) Aesir \n d) Norn \n Your answer: ",
  answer: "b",
}, 
{
  question: "What is Captain America's shield made of? \n a) Adamantium \n b) Vibranium \n c) Promethium \n d) Carbonadium \n Your answer: ",
  answer: "b",
},
{
  question: "What is the real name of Black Panther? \n a) T’Challa \n b) M’Baku \n c) N’Jadaka\n d) N’Jobu \n Your answer: ",
  answer: "a",
},
{
  question: "What type of doctor is Stephen Strange? \n a) Cardiothoracic Surgeon \n b) Trauma Surgeon \n c) Neurosurgeon \n d) Plastic Surgeon\n Your answer: ",
  answer: "c",
},
{
  question: "Who killed Tony Stark’s parents? \n a) Captain America \n b) Loki \n c) Nebula \n d) The Winter Soldier \n Your answer: ",
  answer: "d",
},
];

function play(question, answer) {
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toLowerCase() === answer.toLowerCase()) {
    score = score + 1;
    console.log(chalk.green("You are right!!! \n"));
    
  }
  else {
    console.log(chalk.redBright("You are wrong!!! \n"));
  }
}

for(var i=0; i<questionList.length; i++) {
  currentQuestion = questionList[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log(chalk.bgMagenta("Your final score is:" + score));

var scoreList= [
{name: "Diresh",score: 5,},
{name: "Vikas",score: 5,},
{name: "Saurabh",score: 4,}
];

if(score>=4) {
  console.log(chalk.green("Yay!! you are a high scorer!! \n"))
}else{
  console.log(chalk.redBright("Try Again to score high!! \n"))
}

console.log(chalk.bgBlue("List of High Scores!!!"))
for (i=0; i<scoreList.length; i++) {
  console.log(scoreList[i].name,"=>", scoreList[i].score);
}

