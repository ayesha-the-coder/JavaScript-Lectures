// JS Lecture-2 Task Code 

// Q1: Prompt the user to enter two numbers? perform the following
// Arithmetic operators on these number.

// Prompt user to enter two numbers
// let num1 = parseInt(prompt("Enter the first number:"));
// let num2 = parseInt(prompt("Enter the second number:"));

// // Perform arithmetic operations
// let addition = num1 + num2;
// let subtraction = num1 - num2;
// let multiplication = num1 * num2;
// let division = num1 / num2;

// // Show results
// document.write("<h2>Arithmetic Operations</h2>");
// document.write("First Number: " + num1 + "<br>");
// document.write("Second Number: " + num2 + "<br><br>");
// document.write("Addition: " + addition + "<br>");
// document.write("Subtraction: " + subtraction + "<br>");
// document.write("Multiplication: " + multiplication + "<br>");
// document.write("Division: " + division + "<br>");

// ----------------------------------------------------------------------


// Lecture 2 Task Comparsion Opeaotrs

// Q3: Create a Simple Mark sheet that takes a user input & display the
// student marks?


// Simple Marksheet using prompt

// Student Name
// let name = prompt("Enter Student Name:");

// Marks Input
// let english = parseInt(prompt("Enter English Marks:"));
// let math = parseInt(prompt("Enter Math Marks:"));
// let science = parseInt(prompt("Enter Science Marks:"));

// // Total & Percentage
// let total = english + math + science;
// let percentage = (total / 300) * 100;

// // Print Output on Browser
// document.write("<h2>Student Marksheet</h2>");
// document.write("Name: " + name + "<br>");
// document.write("English: " + english + "<br>");
// document.write("Math: " + math + "<br>");
// document.write("Science: " + science + "<br>");
// document.write("Total: " + total + "/300<br>");
// document.write("Percentage: " + percentage + "%<br>");




// Q4: Print “You can Drive” or “You can Not Drive” Based on age being
// Greater than 18 using Comparison Operator
// let age = 22;

// if (age >= 18 && age <= 21) {
//     document.write("You Can Drive a Car");

// }
// else {
//     document.write("You Can Not Drive a Car");

// }
//  -------------------------------------------------------------------------------------------------------       

//Switch Case Task  Lecture-3

// Q2: Create a Calculator that takes user input for a number, allow
// selecting an Arithmetic Operator, & display the result using a Switch
// Case?

// User input 
//     var num1 = parseInt(prompt("Enter first number:"));
//     var num2 = parseInt(prompt("Enter second number:"));
//     var operator = prompt("Enter operator (+, -, *, /):");
//     var result;

//     // Switch case for operation
//     switch(operator) {
//       case "+":
//         result = num1 + num2;
//         document.write("Addition is: " + result);
//         break;

//       case "-":
//         result = num1 - num2;
//         document.write("Subtraction is: " + result);
//         break;

//       case "*":
//         result = num1 * num2;
//         document.write("Multiplication is: " + result);
//         break;

//       case "/":
//           result = num1 / num2;
//           document.write("Division is: " + result);
//         break;

//       default:
//         document.write("Invalid operator. Please enter +, -, * or /");
//     }

// ----------------------------------------------------------------------------------------

// Student Loops Task Lecture-4 

// Q1: Write a program to print “Try Again” until the user enter the correct number using While Loop?
// Q2: Write a program that Reverse Number from 1 to 10?
// Q3: Print Multiplication Table based on user Input using For Loop?
// Q4: Print an Odd Number and Even Number using For Loop?
// Student Loops Task Lecture-3
// Q1: Write a program to print “Try Again” until the user enter the correct number using While Loop?
// Q2: Write a program that Reverse Number from 1 to 10?
// Q3: Print Multiplication Table based on user Input using For Loop?
// Q4: Print an Odd Number and Even Number using For Loop?

//----------------------- Loops Task Lecture-4  All Task Answer in Copy Write----------------------------

// JavaScript Lecture (4 and 5 Loops)
// Student Task (For of & For in loops)  
// Q1: Write a program to print the marks of students in an object using For in loop?

// Q2: You have an array that contains some numbers: 
// let numbers = [10, 20, 30, 40, 50]; 
// Use a For in loop to print each number's index and its value.
// Output 
// Index: 0 Value: 10 
// Index: 1 Value: 20 
// Index: 2 Value: 30 
// Index: 3 Value: 40 
// Index: 4 Value: 50	

// Q3: Write a JavaScript program that asks the user to enter a word using prompt (). Then, use a For of loop to print each character of the word on a new line.
// Output 
// H 
// E 
// L 
// L 
// O

//----------------------- Loops Task Lecture-5  All Task Answer in Copy Wirte----------------------------


// JavaScript Lecture-6 Student Task
// Q1: Write a function named addNumbers() that asks the user for two numbers, adds them, and displays the sum in an alert box ?

// Q2: Write a function named multiply(a, b) ) that multiplies two numbers and prints the result. Call the function at least two time with different values.
// Output: 
// If you call the function with multiply(5, 3); and multiply(10, 2); the output should be: 
// 15 
// 20


//----------------------- Function Task Lecture-6  All Task Answer in Copy Wirte----------------------------

//----------------------- Function  Only Task Class Lecture-7  All Task Answer in Copy Wirte----------------------------

//----------------------- SetInterval Task Lecture-9  All Task Answer in Copy Wirte and Code ----------------------------

// Tasksss--------------------------------------------------------------

// Task-1
// 1)	Create a countdown timer in JavaScript that starts from 10 and decreases every second.
// When it reaches 0, stop the timer and display "Time's up!".


//   let count = 10;
//   let intervalID = setInterval(() => {
//     count--;
//     document.getElementById("timer").innerText = count;

//     if (count === 0) {
//       clearInterval(intervalID); // Timer rok do jab count 0 ho jaye
//       document.getElementById("timer").innerText = "Time's up!";
//     }
//   }, 1000);



// Task-2

// 2)	Create a Digital Clock (Updating Every Second)

//   function updateClock() {
// let now = new Date();
// document.getElementById("clock").innerText = now.toLocaleTimeString();
//   }
//   setInterval(updateClock, 1000);


// 3)	Create a simple stopwatch in JavaScript. 
// It should have a Start button to begin counting seconds and a Stop button to stop the timer. Display the time on the screen.

// Task-3
// let time = 0;
//   let intervalID;

//   function startWatch() {
//     intervalID = setInterval(() => {
//       time++;
//       document.getElementById("watch").innerText = time;
//     }, 1000);
//   }

//   function stopWatch() {
//     clearInterval(intervalID);
//   }


// Task-4

// 4)	Create a Moving Box Move a box from left to right continuously.

// let position = 0;
//   setInterval(() => {
//     position += 5;
//     document.getElementById("box").style.marginLeft = position + "px";
//   }, 100); // 0.1ms second




// Task-5
// Auto Typing Effect Display text letter by letter using setInterval()
let message = "Welcome to JavaScript!"; // Ek text message jo display hoga
let index = 0; // Index ki shuruati value 0 hai

setInterval(() => { // Har 300 milliseconds code run hoga
    if (index < message.length) { // Jab tak pura message likha na jaye
        document.getElementById("text").innerHTML += message[index]; // Agla letter likho
        index++; // Index ko 1 se barhao
    }
}, 300);




// message.length → Total letters count karta hai
// message[index] → String ka ek ek letter nikalne ke liye use hota hai
// setInterval(..., 300); → Har 0.3 sec baad ek letter add hota hai


// function updateClock() {
//     let now = new Date(); // Har second new time fetch karega
//     let hours = now.getHours(); // Ghante le raha hai
//     let minutes = now.getMinutes(); // Minutes le raha hai
//     let seconds = now.getSeconds(); // Seconds le raha hai

//     // Time ko proper format me dikhane ke liye (HH:MM:SS)
//     let timeString = hours + ":" + minutes + ":" + seconds;

//     document.getElementById("clock").innerText = timeString;
// }

// setInterval(updateClock, 1000);
