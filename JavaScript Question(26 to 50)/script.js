// Question no 26 
// Mapping Values:

// ● Create an array of numbers.
// ● Use the map method with a ternary operator to create a new array
// where each number is doubled if it is even and tripled if it is odd.
// ● Log the new array to the console.



const numbers = [1, 2, 3, 4, 5, 6];


const modifiedNumbers = numbers.map(num => num % 2 === 0 ? num * 2 : num * 3);


console.log(modifiedNumbers);


// Question no 27


// Filtering Values:

// ● Create an array of strings.
// ● Use the filter method with a ternary operator to create a new array
// that only includes strings with a length greater than 3.
// ● Log the new array to the console.


const words = ["cat", "elephant", "dog", "bird", "giraffe"];


const filteredWords = words.filter(word => word.length > 3 ? true : false);


console.log(filteredWords);


// Question no 28 

// Copying an Array:

// ● Create an array originalArray with some elements.
// ● Use the spread operator to create a copy of originalArray called
// copiedArray.
// ● Log both arrays to the console to verify they are the same but not the
// same reference.



const originalArray = [1, 2, 3, 4, 5];


const copiedArray = [...originalArray];

console.log("Original Array:", originalArray);
console.log("Copied Array:", copiedArray);


console.log("Are they the same reference?", originalArray === copiedArray);



// Question no 28 
// Merged Arrays




const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const mergedArray = [...array1, ...array2];


console.log(mergedArray);


// Question no 29 
// Adding Elements to an Array:

// ● Create an array numbers with some elements.
// ● Use the spread operator to add a new element at the beginning and at
// the end of the numbers array.
// ● Log the updated array to the console.




const numberrs = [2, 3, 4];


const updatedArray = [1, ...numberrs, 5];

console.log(updatedArray);


// Question no 30 
// Copying an Object:

// ● Create an object originalObject with some key-value pairs.
// ● Use the spread operator to create a copy of originalObject called
// copiedObject.
// ● Log both objects to the console to verify they are the same but not the
// same reference.




const originalObject = {
    name: "Alice",
    age: 25,
    profession: "Engineer"
};


const copiedObject = { ...originalObject };


console.log("Original Object:", originalObject);
console.log("Copied Object:", copiedObject);


console.log("Are they the same reference?", originalObject === copiedObject);



// Question no 31

// Merging Objects:

// ● Create two objects object1 and object2 with some overlapping
// keys.
// ● Use the spread operator to create a new object mergedObject that
// combines the properties of object1 and object2.
// ● Log mergedObject to the console and note which values are
// retained for the overlapping keys.


const object1 = {
    name: "Alice",
    age: 25,
    profession: "Engineer"
};

const object2 = {
    age: 30, // overlapping key
    profession: "Designer", // overlapping key
    location: "Pakistan"
};

const mergedObject = { ...object1, ...object2 };


console.log(mergedObject);


// Q no 32

// Updating Object Properties:

// ● Create an object user with properties name, age, and email.
// ● Use the spread operator to create a new object updatedUser that
// updates the email property and adds a new address property.
// ● Log the updatedUser object to the console.


const user = {
    name: "John",
    age: 28,
    email: "john@example.com"
};

const updatedUser = { ...user, email: "john.new@example.com", address: "123 Main St" };

console.log(updatedUser);


// Question no 33

// Passing Array Elements as Arguments:

// ● Create a function sum(a, b, c) that returns the sum of three
// numbers.
// ● Create an array numbers with three elements.
// ● Use the spread operator to pass the elements of numbers as
// arguments to the sum function.
// ● Log the result to the console.




function sum(a, b, c) {
    return a + b + c;
}


const numberss = [5, 10, 15];

// Use the spread operator to pass the elements of the numbers array as arguments to the sum function
const results = sum(...numberss);

// Log the result to the console
console.log(results);



// Question no 34

// Combining Multiple Arrays:

// ● Create a function combineArrays that takes any number of arrays
// as arguments and returns a single array containing all elements.
// ● Use the spread operator inside the function to combine the arrays.
// ● Call the function with multiple arrays and log the result.



function combineArrays(...arrays) {
  
    return [].concat(...arrays);
}


const array11 = [1, 2, 3];
const array21 = [4, 5, 6];
const array31 = [7, 8, 9];


const combinedArray = combineArrays(array11, array21, array31);
console.log(combinedArray);




// // Question no 35 
// Rest Parameter with Spread Operator:

// ● Create a function multiply that takes a number and any number of
// additional arguments.
// ● Use the rest parameter to gather the additional arguments into an
// array and multiply each by the first argument.
// ● Return an array of the results.
// ● Call the function with appropriate arguments and log the result.




function multiply(factor, ...numbers) {
    
    return numbers.map(num => num * factor);
}


const result = multiply(2, 1, 3, 5, 7);
console.log(result);



// Question no 36


// Spread Operator with Nested Structures:

// ● Create a nested array nestedArray and use the spread operator to
// create a shallow copy.
// ● Modify the inner arrays in the copied array.
// ● Log both the original and copied arrays to observe the effect of
// shallow copying.





const nestedArrayS = [[1, 2], [3, 4], [5, 6]];


const copiedArraay = [...nestedArrayS];


copiedArraay[0][0] = 10;  
copiedArraay[1] = [7, 8]; 


console.log("Original Array:", nestedArraayS);
console.log("Copied Array:", copiedArraay);



// Question no 37



// Sum Function:

// ● Create a function sum that uses the rest operator to take any number
// of arguments.
// ● The function should return the sum of all its arguments.
// ● Call the function with different numbers of arguments and log the
// results.



function sum(...numbers) {
    
    return numbers.reduce((total, num) => total + num, 0);
}


console.log(sum(1, 2, 3));          
console.log(sum(5, 10, 15, 20));    
console.log(sum(7, 8));            
console.log(sum(3, 4, 5, 6, 7));    
console.log(sum(100));             
console.log(sum());                



// Question no 38 
// Average Function:

// ● Create a function average that uses the rest operator to take any
// number of arguments.
// ● The function should return the average of all its arguments.
// ● Call the function with different numbers of arguments and log the
// results.



function average(...numbers) {
    
    if (numbers.length === 0) return 0;

   
    const total = numbers.reduce((sum, num) => sum + num, 0);
    return total / numbers.length;
}


console.log(average(1, 2, 3));          
console.log(average(5, 10, 15, 20));    
console.log(average(7, 8));             
console.log(average(3, 4, 5, 6, 7));    
console.log(average(100));              
console.log(average());                 



// // Question no 39 
// First and Rest:

// ● Create an array numbers with at least 5 elements.
// ● Use array destructuring with the rest operator to assign the first
// element to a variable first and the remaining elements to a variable
// rest.
// ● Log first and rest to the console.



const numbeers = [10, 20, 30, 40, 50];


const [first, ...rest] = numbers;


console.log("First element:", first);  
console.log("Remaining elements:", rest);  



// Question no 40

// Skip and Rest:

// ● Create an array colors with at least 5 elements.
// ● Use array destructuring with the rest operator to skip the first two
// elements and assign the remaining elements to a variable
// remainingColors.
// ● Log remainingColors to the console.





const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];


const [, , ...remainingColors] = colors;

console.log("Remaining colors:", remainingColors);  


// Question no 41

// Basic Destructuring:

// ● Create an object person with properties name, age, email, and
// address.
// ● Use object destructuring with the rest operator to assign name and
// email to individual variables, and the remaining properties to a
// variable rest.
// ● Log the variables to the console.



const person = {
    names: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    address: "123 Main St"
};

const { names, email, ...reste } = person;

// Log the variables to the console
console.log("Name:", names);     // "John Doe"
console.log("Email:", email);   // "johndoe@example.com"
console.log("Remaining properties:", reste);  // { age: 30, address: '123 Main St' }


// Question no 42 


// Nested Destructuring:

// ● Create an object student with properties id, name, grades, and
// info (where info is another object with properties age and major).
// ● Use nested destructuring with the rest operator to extract id, name,
// and major to individual variables, and the remaining properties to a
// variable rest.
// ● Log the variables to the console.


const student = {
    id: 101,
    namee: "Alice",
    grades: [90, 85, 88],
    info: {
        age: 20,
        major: "Computer Science"
    }
};


const { id, namee, info: { major }, ...resti } = student;

// Log the variables to the console
console.log("ID:", id);           // 101
console.log("Name:", namee);       // "Alice"
console.log("Major:", major);     // "Computer Science"
console.log("Remaining properties:", resti);  // { grades: [ 90, 85, 88 ], info: { age: 20, major: 'Computer Science' } }


/// Question no 43 


// Filter Even Numbers:

// ● Create a function filterEven that uses the rest operator to take any
// number of arguments.
// ● The function should return a new array containing only the even
// numbers.
// ● Call the function with different numbers of arguments and log the
// results.



function filterEven(...numbers) {
 
    return numbers.filter(num => num % 2 === 0);
}


console.log(filterEven(1, 2, 3, 4, 5, 6));  // [2, 4, 6]
console.log(filterEven(10, 13, 15, 18, 20)); // [10, 18, 20]
console.log(filterEven(7, 9, 11));           // []
console.log(filterEven(4, 8, 12, 16));       // [4, 8, 12, 16]



// Question no 44

// Combine and Sort Arrays:

// ● Create a function combineAndSort that uses the rest operator to
// take any number of arrays.
// ● The function should combine all the arrays into one and return the
// sorted result.
// ● Call the function with different arrays and log the results.



function combineAndSort(...arrays) {

    return [].concat(...arrays).sort((a, b) => a - b); 
}


console.log(combineAndSort([3, 1, 4], [9, 2, 5], [8, 7, 6]));  // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(combineAndSort([12, 5], [1, 9, 7], [4, 6]));       // [1, 4, 5, 6, 7, 9, 12]
console.log(combineAndSort([10, 20], [5, 15], [25, 30]));      // [5, 10, 15, 20, 25, 30]
console.log(combineAndSort([13, 8], [2, 7], [4, 1]));          // [1, 2, 4, 7, 8, 13]


// Question no 45



// Skipping Elements:

// ● Create an array colors with the elements "red", "green", "blue",
// "yellow".
// ● Use destructuring to assign the first element to primaryColor and
// the third element to tertiaryColor.
// ● Log the variables to the console.





const colours = ["red", "green", "blue", "yellow"];


const [primaryColor, , tertiaryColor] = colours;

console.log("Primary Color:", primaryColor); // red
console.log("Tertiary Color:", tertiaryColor); // blue


// Question no 46

// Rest Operator:

// ● Create an array numbers with the elements 1 through 5.
// ● Use destructuring to assign the first element to firstNumber and
// the rest of the elements to remainingNumbers.
// ● Log the variables to the console.





const numbersss = [1, 2, 3, 4, 5];

// Use destructuring to assign the first element to firstNumber and the rest to remainingNumbers
const [firstNumber, ...remainingNumbers] = numbersss;

// Log the variables to the console
console.log("First Number:", firstNumber); // 1
console.log("Remaining Numbers:", remainingNumbers); // [2, 3, 4, 5]





// Question no 47 


// Basic Destructuring:

// ● Create an object person with properties name, age, and city.
// ● Use destructuring to assign the properties to variables name, age,
// and city.
// ● Log the variables to the console.





const persons = {
    naeme: "John",
    age: 30,
    city: "New York"
};


const { name, age, city } = persons;

console.log("Name:", naeme); // John
console.log("Age:", age);   // 30
console.log("City:", city); // New York



// Question no 48

// Renaming Variables:

// ● Create an object car with properties make, model, and year.
// ● Use destructuring to assign the properties to variables carMake,
// carModel, and carYear.
// ● Log the variables to the console.



const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};


const { make: carMake, model: carModel, year: carYear } = car;


console.log("Car Make:", carMake);  // Toyota
console.log("Car Model:", carModel); // Corolla
console.log("Car Year:", carYear);  // 2021




// Question no 49

// Default Values:

// ● Create an object settings with properties theme and language.
// ● Use destructuring to assign the properties to variables theme and
// language, and provide a default value of "English" for language.
// ● Log the variables to the console.




const settings = {
    theme: "dark",
    language: "Spanish"
};


const { theme, language = "English" } = settings;


console.log("Theme:", theme);      
console.log("Language:", language); 




// Question no 50

// Array of Arrays:

// ● Create an array nestedArray with the elements [1, 2], [3, 4],
// and [5, 6].
// ● Use nested destructuring to assign the first elements of each
// sub-array to variables a, b, and c.
// ● Log the variables to the console.


const nestedArray = [[1, 2], [3, 4], [5, 6]];


const [[a], [b], [c]] = nestedArray;


console.log("a:", a); // 1
console.log("b:", b); // 3
console.log("c:", c); // 5
