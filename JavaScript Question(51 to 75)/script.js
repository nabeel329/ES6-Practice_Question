// // Question no 51
// Object within an Object:

// ● Create an object profile with properties username, details
// (which is another object with properties email and address).
// ● Use nested destructuring to assign username, email, and address
// to variables.
// ● Log the variables to the console.

const profile = {
    username: "nabeel abrar",
    details: {
        email: "nabeelabrar@example.com",
        address: "123 Main St, Nazimabd"
    }
};


const { username, details: { email, address } } = profile;

console.log("Username:", username); 
console.log("Email:", email);       
console.log("Address:", address);   


// Question no 52


// Mix of Arrays and Objects:

// ● Create an object data with properties id, info (which is an array
// with elements {name: "Alice"} and {age: 25}).
// ● Use nested destructuring to assign id, name, and age to variables.
// ● Log the variables to the console.




const data = {
    id: 1,
    info: [
        { names: "Alice" },
        { age: 25 }
    ]
};

// Use nested destructuring to assign id, name, and age to variables
const { id, info: [{ names }, { age }] } = data;

// Log the variables to the console
console.log("ID:", id);     // 1
console.log("Name:", names); // Alice
console.log("Age:", age);   // 25


// Question no 53 



// Array Parameters:

// ● Create a function printCoordinates that takes an array [x, y]
// as a parameter.
// ● Use destructuring in the function parameter to extract x and y.
// ● Log x and y inside the function.
// ● Call the function with different coordinates.

function printCoordinates([x, y]) {
    
    console.log("X:", x);
    console.log("Y:", y);
}


printCoordinates([10, 20]); // X: 10, Y: 20
printCoordinates([30, 40]); // X: 30, Y: 40
printCoordinates([50, 60]); // X: 50, Y: 60


// Question no 54


// Object Parameters:

// ● Create a function displayUser that takes an object {name, age}
// as a parameter.
// ● Use destructuring in the function parameter to extract name and age.
// ● Log name and age inside the function.
// ● Call the function with different user objects.



function displayUser({ name, age }) {
   
    console.log("Name:", name);
    console.log("Age:", age);
}


displayUser({ name: "Nabeel", age: 30 }); 
displayUser({ name: "Abrar", age: 25 });   
displayUser({ name: "Habiba", age: 35 });



// Question no 55


// List Property Names:

// ● Create an object book with properties title, author, and year.
// ● Use Object.keys() to get an array of the property names of the
// book object.
// ● Log the array to the console.

const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};

const propertyNames = Object.keys(book);

console.log(propertyNames); 



// Question no 56

// Count Properties:

// ● Create an object student with properties name, age, grade, and
// school.
// ● Use Object.keys() to get an array of the property names and
// determine the number of properties in the student object.
// ● Log the number of properties to the console.





const student = {
    name: "John Doe",
    age: 16,
    grade: "10th",
    school: "Greenwood High"
};


const propertyNamess = Object.keys(student);
const numberOfProperties = propertyNamess.length;

console.log(numberOfProperties); 


// // Q no 57
// Iterate Over Keys:

// Create an object product with properties name, price, and category.
// Use Object.keys() to get an array of the property names and iterate
// over this array to log each property name and its corresponding value.


const product = {
    name: "Laptop",
    price: 1200,
    category: "Electronics"
};


const propertyNaames = Object.keys(product);

// Iterate over the property names and log each property name and its corresponding value
propertyNaames.forEach(key => {
    console.log(`${key}: ${product[key]}`);
});



// // Q no 58
// List Property Values:

// ● Create an object movie with properties title, director, year,
// and genre.
// ● Use Object.values() to get an array of the property values of the
// movie object.
// ● Log the array to the console.



// Create an object product with properties name, price, and category
const products = {
    name: "Laptop",
    price: 1200,
    category: "Electronics"
};

// Use Object.keys() to get an array of the property names and iterate over this array
const propertyNamese = Object.keys(products);

// Iterate over the property names and log each property name and its corresponding value
propertyNamese.forEach(key => {
    console.log(`${key}: ${products[key]}`);
});

// // Q no 59
// Sum Values:

// ● Create an object scores with properties math, science, and
// english, each with numeric values.
// ● Use Object.values() to get an array of the property values and
// calculate the total sum of the values.
// ● Log the sum to the console.


const scores = {
    math: 85,
    science: 92,
    english: 78
};


const values = Object.values(scores);
const totalSum = values.reduce((sum, value) => sum + value, 0);


console.log(totalSum);



// // Q no 60
// Iterate Over Values:

// ● Create an object user with properties username, email, and
// location.
// ● Use Object.values() to get an array of the property values and
// iterate over this array to log each value.


const user = {
    username: "Nabeel ABrar",
    email: "nabeelabrar@example.com",
    location: "karachi"
};

const valuess = Object.values(user);

// Iterate over the array of values and log each value
values.forEach(value => {
    console.log(value);
});



// Question no 61

// Convert Object to Array:

// ● Create an object person with properties firstName, lastName,
// and age.
// ● Use Object.entries() to convert the person object into an array
// of key-value pairs.
// ● Log the array to the console.


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};


const entries = Object.entries(person);

onsole.log(entries);



// // Question no 62
// Create an object car with properties make, model, and year.
// ● Use Object.entries() to get an array of the key-value pairs of the
// car object.
// ● Log the array to the console.


const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

// Use Object.entries() to get an array of key-value pairs of the car object
const entriees = Object.entries(car);

// Log the array to the console
console.log(entriees);




// /// Question no 63 
// Filter Keys:

// ● Create an object inventory with properties apples, bananas,
// oranges, and grapes, each with numeric values.
// ● Use Object.keys() and filter() to get an array of keys where
// the value is greater than 10.
// ● Log the array to the console.

const inventory = {
    apples: 15,
    bananas: 8,
    oranges: 12,
    grapes: 5
};

const keysGreaterThan10 = Object.keys(inventory).filter(key => inventory[key] > 10);


console.log(keysGreaterThan10);



/// Q no 64


// Transform Values:

// ● Create an object temperatures with properties morning,
// afternoon, and evening, each with numeric values.
// ● Use Object.entries() to get an array of key-value pairs, then use
// map() to convert the temperatures from Celsius to Fahrenheit.
// ● Convert the transformed array back to an object.
// ● Log the new object to the console.


const temperatures = {
    morning: 15,   
    afternoon: 22, 
    evening: 18    
};


const fahrenheitTemperatures = Object.entries(temperatures).map(([key, value]) => {
    return [key, (value * 9/5) + 32];  
});

const updatedTemperatures = Object.fromEntries(fahrenheitTemperatures);

console.log(updatedTemperatures);



// Q no 65

// Key-Value Swap:

// ● Create an object roles with properties admin, editor, and
// viewer, each with string values.
// ● Use Object.entries() to get an array of key-value pairs, then use
// map() to swap the keys and values.
// ● Convert the transformed array back to an object.
// ● Log the new object to the console.


const roles = {
    admin: "Administrator",
    editor: "Content Editor",
    viewer: "Read-Only User"
};


const swappedRoles = Object.entries(roles).map(([key, value]) => {
    return [value, key];  
});


const updatedRoles = Object.fromEntries(swappedRoles);

console.log(updatedRoles);




// Q no 66

// Filter and Map:

// ● Create an array numbers with values from 1 to 10.
// ● Write a higher-order function filterAndMap that takes an array, a
// filter function, and a map function.
// ● Use this function to filter out even numbers and then square the
// remaining numbers.
// ● Log the resulting array to the console.


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function filterAndMap(array, filterFunc, mapFunc) {
    return array.filter(filterFunc).map(mapFunc);
}


const result = filterAndMap(
    numbers,
    number => number % 2 !== 0,  
    number => number * number     /


console.log(result);


// Qno 67

// Sort and Reduce:

// ● Create an array words with the values "apple", "banana", "cherry",
// "date".
// ● Write a higher-order function sortAndReduce that takes an array, a
// sort function, and a reduce function.
// ● Use this function to sort the words alphabetically and then
// concatenate them into a single string.
// ● Log the resulting string to the console.


const words = ["apple", "banana", "cherry", "date"];


function sortAndReduce(array, sortFunc, reduceFunc) {
    return array.sort(sortFunc).reduce(reduceFunc);
}


const rresult = sortAndReduce(
    words,
    (a, b) => a.localeCompare(b),  
    (acc, word) => acc + word      
);


console.log(rresult);



// Question 68 


// Simple Callback:

// ● Write a function greet that takes a name and a callback function.
// ● The greet function should call the callback function with a greeting
// message.
// ● Write a callback function printGreeting that logs the message to
// the console.
// ● Call the greet function with a name and the printGreeting
// callback.



function printGreeting(message) {
    console.log(message);
}

function greet(name, callback) {
    const message = `Hello, ${name}!`;
    callback(message); 
}


greet("Alice", printGreeting);



// Question no 69

// Asynchronous Callback:

// ● Write a function fetchData that simulates fetching data from a
// server (use setTimeout to delay execution).
// ● The fetchData function should take a callback function and call it
// with the data after a delay.
// ● Write a callback function displayData that logs the data to the
// console.
// ● Call the fetchData function with the displayData callback.





function displayData(data) {
    console.log("Fetched Data:", data);
}


function fetchData(callback) {
    setTimeout(() => {
        const data = "Server Response: Data retrieved successfully!";
        callback(data); 
        }, 2000); 
}


fetchData(displayData);


// Q NO 70



// Simple Arrow Function:

// ● Convert the following function to an arrow function:

// function add(a, b) {
// return a + b;
// }

// ● Log the result of calling the arrow function with arguments 3 and 5.



const add = (a, b) => a + b;


console.log(add(3, 5));

// Q no 71

// Arrow Function with Array Methods:

// ● Create an array numbers with values from 1 to 5.
// ● Use the map method and an arrow function to create a new array with
// each number squared.
// ● Log the resulting array to the console.





const nuumbers = [1, 2, 3, 4, 5];


const squaredNumbers = nuumbers.map(number => number * number);


console.log(squaredNumbers);



// Q  no 72

// Variable Scope:

// ● Write a function outer that declares a variable x and assigns it a
// value.
// ● Inside outer, write another function inner that logs x to the console.
// ● Call the inner function from within outer.
// ● Call the outer function to see the result.

function outer() {
   
    let x = 10;

    
    function inner() {
        
        console.log(x);
    }

    
    inner();
}

outer();



// Q no 73

// Find Index of Long Word:

// ● Create an array words with values ["apple", "banana",
// "cherry", "date"].
// ● Use findIndex to get the index of the first word with more than 5
// characters.
// ● Log the result to the console.



const worrds = ["apple", "banana", "cherry", "date"];


const index = worrds.findIndex(word => word.length > 5);

console.log(index);

// Q no 74

// Create an array words with values ["Hello", "world",
//     "this", "is", "JavaScript"].
//     ● Use reduce to concatenate all the words into a single string,
//     separated by spaces.
//     ● Log the result to the console.



const woards = ["Hello", "world", "this", "is", "JavaScript"];


const resuult = woards.reduce((accumulator, currentWord) => {
    return accumulator + " " + currentWord;
});

console.log(result);

// Q no 75



// Create an array words with values ["apple", "banana",
//     "cherry", "date"].
//     ● Use some to check if there is at least one word with more than 5
//     characters.
//     ● Log the result to the console.


const woords = ["apple", "banana", "cherry", "date"];


const ressult = woords.some(word => word.length > 5);

// Log the result to the console
console.log(ressult);
