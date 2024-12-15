// Question no =1

// Global Scope

// ● Declare a variable using var outside of any function or block.
// ● Declare a variable using let outside of any function or block.
// ● Declare a variable using const outside of any function or block.
// ● Log all three variables to the console.
// ● Are they accessible globally?




var varVariable = "Nabeel";
let letVariable = "Nabeel Abrar";
const constVariable = "Muahummad Nabeel";



console.log(varVariable); 
console.log(letVariable);            // Yes They all are access globally 
console.log(constVariable);


// Question no 2



// Function Scope

// ● Create a function and declare a variable using var inside the
// function.
// ● Declare a variable using let inside the function.
// ● Declare a variable using const inside the function.
// ● Try to log all three variables to the console outside the function.
// ● What do you observe?


function myFunction() {
    // Declare variables inside the function
    var varInsideFunction = "Coding is Fun";
    let letInsideFunction = "Be Kind for no reason";
    const constInsideFunction = "Do your best";

}

// console.log(varInsideFunction);  // ReferenceError 
// console.log(letInsideFunction);  // ReferenceError 
// console.log(constInsideFunction); // ReferenceError 


// Question no 3

// Use an if statement and declare a variable using var inside the
// block.
// ● Declare a variable using let inside the block.
// ● Declare a variable using const inside the block.
// ● Try to log all three variables to the console outside the block.
// ● What do you observe?


if (true) {
    var varInsideBlock = "I am var";
    let letInsideBlock = "I am let";
    const constInsideBlock = "I am const";
}

console.log(varInsideBlock); //(accessible outside the block)
// console.log(letInsideBlock); // ReferenceError: letInsideBlock is not defined
// console.log(constInsideBlock); // ReferenceError: constInsideBlock is not defined


// Question No 4  

//Hoisting with var:

// ● Write code where you log a var variable before it is declared.
// ● What value do you get?


console.log(myVar); // Logs: undefined (hoisted but not initialized)

var myVar = "hoisted variable or not";

console.log(myVar); // acceble mean var is hoisted variable"


// Question no 5

// Hoisting with let and const:

// ● Write code where you log a let variable before it is declared.
// ● Write code where you log a const variable before it is declared.
// ● What kind of error do you get?

// console.log(mConst); ReferenceError: Cannot access 'mConst' before initialization
// console.log(myLet);  ReferenceError: Cannot access 'myLet' before initialization

const mConst = "Const is hoisted or not";
let lethos =  "Let is hoisted or not"

console.log(mConst); //log after intialization
console.log(lethos); //log after intialization



// Question no 6

//Re-declaration:

// ● Try to declare the same variable name twice using var.
// ● Try to declare the same variable name twice using let.
// ● Try to declare the same variable name twice using const.
// ● What happens in each case?



var Varvari = "First declaration with var";
var Varvari = "Second declaration with var"; // Re-declaration
console.log(Varvari);



let myLet = "First declaration with let";
// let myLet = "Second declaration with let"; // SyntaxError: Identifier 'myLet' has already been declared


const myConst = "First declaration with const";
// const myConst = "Second declaration with const"; // SyntaxError: Identifier 'myConst' has already been declared

// Only Var Variable is reasigned



// Question No 6 Re-assignment:



var variable1 = "Initial value with var";
console.log(variable1); 
variable1 = "Reassigned value with var";
console.log(variable1); 
// with var variable is re-assigned

let variable2 = "Initial value with let";
console.log(variable2); 
variable2 = "Reassigned value with let";
console.log(variable2); 
// with let variable is also re-assigned

const variable3 = "Initial value with const";
console.log(variable3); 
// variable3 = "Attempting to reassign const"; 
// console.log(variable3);  // Throws an error because const is not reassigned
 

// Question No 7

// Temporal Dead Zone (TDZ):

// ● Declare a let variable inside a block but try to log it before the
// declaration.
// ● Declare a const variable inside a block but try to log it before the
// declaration.
// ● What error do you get? Why?


{
    // console.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization
    let myLetVar = "Declared using let";
    console.log(myLetVar); // Output: Declared using let
}


{
    // console.log(myConstVar); // ReferenceError: Cannot access 'myConstVar' before initialization
    const myConstVar = "Declared using const";
    console.log(myConstVar); // Output: Declared using const
}



// // Question No 8 When to use var, let, and const:

// ● Write a piece of code to demonstrate a good use case for var.
// ● Write a piece of code to demonstrate a good use case for let.
// ● Write a piece of code to demonstrate a good use case for const.





function countDownTimer() {
    for (var i = 5; i >= 0; i--) {
        setTimeout(function () {
            console.log(i); // Prints "-1" six times because `var` is function-scoped.
        }, 1000);
    }
}

countDownTimer();


function countDownTimer() {
    for (let i = 5; i >= 0; i--) {
        setTimeout(function () {
            console.log(i); // Correctly prints 5, 4, 3, 2, 1, 0.
        }, 1000);
    }
}

countDownTimer();



const PI = 3.14159; // A constant value that does not change
const radius = 5;

function calculateCircleArea() {
    const area = PI * radius * radius; // Using const for a value that won't change
    console.log(`Area of the circle: ${area}`);
}

calculateCircleArea();


// Question no 9

// String Interpolation:

// ● Create variables for a person's first name and last name.
// ● Use a template literal to create a full name string and log it to the
// console.



const firstName = "Nabeel";
const lastName = "Abrar";


const fullName = `${firstName} ${lastName}`;
console.log(fullName);



// Question no 10 
//Use a template literal to create a multi-line string (e.g., an address) and
// log it to the console.


// Using template literal to create a multi-line string (address)
const address = `
123 Main Street
Apt 4B
Karachi Pakistan`;

// Log the address to the console
console.log(address);


// Q no 11

// Create variables for two numbers.
// ● Use a template literal to create a string that includes the sum of the
// numbers.
// ● Log the string to the console.



const num1 = 5;
const num2 = 10;


const result = `The sum of ${num1} and ${num2} is ${num1 + num2}.`;

console.log(result);


// Question no 12

// Create a function that takes two numbers and returns their product.
// Use a template literal to call this function inside a string and log the 
// result to the console.




function multiply(num1, num2) {
    return num1 * num2;
}


const number1 = 4;
const number2 = 6;


const results = `The product of ${number1} and ${number2} is ${multiply(number1, number2)}.`;

// Log the result to the console
console.log(results);


// Question no 13 


// Write a simple tag function that takes a template string and logs it.
// Use this tag function with a template literal.



function logTemplate(strings, ...values) {
    console.log(strings);
    console.log(values);
}


const names = "Alice";
const ages = 25;
logTemplate`My name is ${names} and I am ${ages} years old.`;



// Question no 14 
// Write a tag function that formats a string by making it uppercase.
//  Use this tag function with a template literal and log the result.



function uppercase(strings, ...values) {
    let result = strings[0];
    

    for (let i = 0; i < values.length; i++) {
        result += values[i].toUpperCase() + strings[i + 1];
    }
    
    return result;
}


const namee = "John";
const greeting = "hello";
const message = uppercase`${greeting}, ${namee}!`;

console.log(message);



// Question No 15 

// Create a variable for the current hour.
// ● Use a template literal to display a different message depending on
// whether it's morning (before 12 PM) or afternoon (after 12 PM).



const currentHour = new Date().getHours();

const timeOfDayMessage = `${currentHour < 12 ? 'Good Morning!' : 'Good Afternoon!'}`;

console.log(timeOfDayMessage);


// // Question no 16
// Create an array of items (e.g., a shopping list).
// ● Use a template literal to generate an HTML list (<ul> and <li>
// elements) from the array and log it to the console.


const shoppingList = ["Apples", "Bananas", "Carrots", "Milk", "Eggs"];

    
    const htmlList = `
      <ul>
        ${shoppingList.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;

    
    document.getElementById("list-container").innerHTML = htmlList;


//     // Question No 17 
//     Create a string that includes a backtick character using a template
// literal.
// ● Log the string to the console.


const stringWithBacktick = `This is a backtick: \``;

console.log(stringWithBacktick);


// Question no 18


// Create nested template literals to build a more complex string, such as
// a nested HTML structure (e.g., a table with rows and cells).
//  Log the result to the console.



const tableData = [
    ["Name", "Age", "Country"],
    ["Alice", "25", "USA"],
    ["Bob", "30", "Canada"],
    ["Charlie", "35", "UK"]
  ];

  const tableHTML = `
    <table>
      <thead>
        <tr>
          ${tableData[0].map(header => `<th>${header}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${tableData.slice(1).map(row => `
          <tr>
            ${row.map(cell => `<td>${cell}</td>`).join('')}
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  
  document.getElementById("table-container").innerHTML = tableHTML;


  // Question no 19


//   Create a variable age.
// ● Use the ternary operator to assign a variable canVote the value
// "Yes" if age is 18 or older, and "No" otherwise.
// ● Log canVote to the console.



const age = 20; 


const canVote = age >= 18 ? "Yes" : "No";


console.log(`Can vote: ${canVote}`);


// Question no 20


// Create a variable number.
// ● Use the ternary operator to assign a variable evenOrOdd the value
// "Even" if number is even, and "Odd" if it's odd.
// ● Log evenOrOdd to the console.



const number = 7; 


const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";


console.log(`The number ${number} is ${evenOrOdd}.`);


// Question no 21

// Create a variable score.
// Use the ternary operator to assign a variable grade based on the following conditions:
// ● "A" if score is 90 or above.
// ● "B" if score is 80 or above.
// ● "C" if score is 70 or above.
// ● "D" if score is 60 or above.
// ● "F" otherwise.
// Log grade to the console.



const score = 85; 

const grade = score >= 90
  ? "A"
  : score >= 80
  ? "B"
  : score >= 70
  ? "C"
  : score >= 60
  ? "D"
  : "F";


console.log(`Score: ${score}, Grade: ${grade}`);



//Question no 22 


// Login Status:

// ● Create a variable isLoggedIn.
// ● Use the ternary operator and logical operators to assign a variable
// statusMessage the value "Welcome back!" if isLoggedIn is true,
// and "Please log in" if isLoggedIn is false.
// ● Log statusMessage to the console.



const isLoggedIn = true; 


const statusMessage = isLoggedIn ? "Welcome back!" : "Please log in";


console.log(statusMessage);


// Question no 23

// Discount Eligibility:

// ● Create variables isMember and purchaseAmount.
// ● Use the ternary operator and logical operators to assign a variable
// discount the value 10% of purchaseAmount if isMember is true
// and purchaseAmount is greater than 100, and 0 otherwise.
// ● Log discount to the console.







const isMember = true; 
const purchaseAmount = 120; 


const discount = (isMember && purchaseAmount > 100) 
  ? purchaseAmount * 0.10 
  : 0;


console.log(`Purchase Amount: $${purchaseAmount}`);
console.log(`Discount: $${discount}`);


// Question no 24

// Create a function maxValue(a, b) that returns the larger of the two
// numbers using the ternary operator.
// ● Call the function with two numbers and log the result.



function maxValue(a, b) {
    return a > b ? a : b;
}


const resulte = maxValue(10, 20);
console.log(`The larger number is: ${resulte}`);


// Question no 25


// Create a function greet(name) that returns a greeting message. If
// name is not provided (or is an empty string), it should return "Hello,
// guest!", otherwise, it should return "Hello, [name]!".
// ● Call the function with and without a name and log the result.



function greet(name) {
    return name && name.trim() !== '' ? `Hello, ${name}!` : "Hello, guest!";
}

console.log(greet("Alice")); 


console.log(greet("")); // "Hello, guest!"


console.log(greet()); // "Hello, guest!"
