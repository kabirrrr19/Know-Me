console.log('Atul Mishra');

var readLineSync = require('readline-sync');
var score = 0;

var userName = readLineSync.question("What is your name? ");
console.log("Welcome Here " + userName + ". Do you know Atul?")

var userAnswerAge = readLineSync.question('Am i older than 20? ');
if (userAnswerAge === "yes") {
  console.log("Yayyyy!! you scored 1");
  score++;
}
else {
  console.log("Wrong.. ") ;
  console.log("current score: ", score);  
}
console.log("-----------------------");  


var userAnswerCity = readLineSync.question("What is my age? ");
if (userAnswerCity === "20") {
  console.log("Yayyyy!! you scored 1");
  score++;
}
else {
  console.log("Wrong.. ") ;
  console.log("current score: ", score);  
}
console.log("-----------------------");  

var userAnswerCity = readLineSync.question("Where is my Home town? ");
if (userAnswerCity === "varanasi") {
  console.log("Yayyyy!! you scored 1");
  score++;
}
else {
  console.log("Wrong.. ") ;
  console.log("current score: ", score);  
}
console.log("-----------------------");  

var userAnswerCity = readLineSync.question("Where do i work? ");
if (userAnswerCity === "knowhere") {
  console.log("Yayyyy!! you scored 1");
  score++;
}
else {
  console.log("Wrong.. ") ;
  console.log("current score: ", score);  
}
console.log("-----------------------");
console.log();  
console.log("Your score : ", score);

console.log("Check out the high scores, if you should be there ping me and I'll update it....");
console.log("Atul : 4");
console.log("Kabir : 4");





// function play(question, userAnswer) {
//   var userAnswer = readLineSync.question(question);
//   answer = "no";
//   if(userAnswer === answer) {
//     console.log("You got it correct !!  ");
//   }
//   else {
//     console.log("You got it wrong !! ");
//   }
// }
// play("Do i have a job   ", "no");


// var number1 = readLineSync.question("Enter first number ");
// var number2 = readLineSync.question("Enter second number ");
// function add(num1, num2) {
//   var sum = + Number(num1) + Number(num2);
//   console.log( "The sum of the two entered numbers is : ", sum);
// }
// add(number1, number2);


// for (var i = 0; i < 5; i++) {
//   console.log("Atul");
// }
// var string = "";
// for (var i = 0; i < 5; i++) {
//   for (var j = 0; j <= i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// var string2 = "";
// for (var i = 5; i > 0; i--) {
//   for (var j = 0; j < i; j++) {
//     string2 += "*";
//   }
//   string2 += "\n";
// }
// console.log(string2);

// var cars = ["maserati", "rolce royce", "buggati", "lamborghini", "ferrari"];
// console.log("first element : ", cars[0]);
// console.log("third element : ", cars[2]);
// console.log("last element : ", cars[cars.length - 1]);

// console.log("All the elements in car : ");
// for (var i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }


