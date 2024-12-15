/// Question

// Simple Promise:

// ● Write a function delay that returns a promise which resolves after a
// given number of milliseconds.
// ● Use the delay function to log "Hello, world!" to the console after a
// delay of 2 seconds.



function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

delay(2000).then(() => {
  console.log("Hello, world!");
});



/// Question


// Promise Chain:

// ● Write a function fetchData that returns a promise which resolves
// with some data (e.g., a simple object).
// ● Chain a .then() method to the fetchData promise to log the data
// to the console.



function fetchData() {
  return new Promise(resolve => {

      const data = { name: "Nabeel", age: 25 };
      setTimeout(() => {
          resolve(data); 
             }, 1000);   });
}


fetchData().then(data => {
  console.log(data); 
});

// /// Question
// Error Handling:

// ● Write a function fetchUserData that returns a promise which
// resolves with user data (e.g., an object with name and age
// properties).
// ● Modify the function to reject the promise with an error message if the
// user data is missing an age property.
// ● Use a .catch() method to handle the error and log an appropriate
// message to the console.


function fetchUserData() {
  return new Promise((resolve, reject) => {
      
      const userData = { name: "Nabeel", age: 25 };
      
      if (!userData.age) {
          reject("Error: Missing age property in user data");
      } else {
          resolve(userData);       }
  });
}


fetchUserData()
  .then(user => {
      console.log(user); 
  })
  .catch(error => {
      console.log(error); 
  });


/// Question

// Simulate Network Request:

// ● Write a function getWeather that simulates a network request to
// fetch weather data (use setTimeout).
// ● The function should return a promise that resolves with weather data
// after 1 second.
// ● Simulate an error scenario where the promise rejects with an error
// message.
// ● Use .then() and .catch() to handle both success and error
// cases, logging appropriate messages to the console.


function getWeather() {
  return new Promise((resolve, reject) => {
      
      setTimeout(() => {
          
          const weatherData = { temperature: 25, condition: "Sunny" };

          
          const errorOccurred = false; 
          if (errorOccurred) {
              reject("Error: Unable to fetch weather data");
          } else {
              resolve(weatherData); 
          }
      }, 1000); 
  });
}


getWeather()
  .then(weather => {
      console.log(`Weather fetched successfully: Temperature: ${weather.temperature}°C, Condition: ${weather.condition}`);
  })
  .catch(error => {
      console.log(error); 
  });




// /// Question
// Simple async Function:

// ● Write an async function sayHello that uses await to call the
// delay function (from Task 1) and logs "Hello, world!" to the console
// after a delay of 2 seconds.


function delays(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function sayHelloo() {
  await delays(2000);  
  console.log("Hello, world!");  
}


sayHelloo();





// /// Question
// Fetch Data with async/await:

// ● Write an async function getUserData that uses await to call the
// fetchUserData function (from Task 2).
// ● Use a try/catch block to handle potential errors and log appropriate
// messages to the console.

async function getUserData() {
  try {
    const data = await fetchUserData(); 
    console.log('User Data:', data); 
  } catch (error) {
    console.error('Error fetching user data:', error); 
  }
}

getUserData();


/// Question

// Fetch and Process Data:

// ● Write a function fetchUser that returns a promise which resolves
// with user data (e.g., an object with name and age properties).
// ● Write a function fetchPosts that returns a promise which resolves
// with an array of posts for a given user.
// ● Write an async function getUserAndPosts that uses await to
// fetch user data and then their posts, logging both to the console.


function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = { name: 'Nabeel', age: 30 }; 
      resolve(user);
    }, 1000); 
  });
}


function fetchPosts(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const posts = [
        { id: 1, title: 'Post 1 by ' + user.name },
        { id: 2, title: 'Post 2 by ' + user.name },
        { id: 3, title: 'Post 3 by ' + user.name }
      ];       resolve(posts);
    }, 1000);   });
}


async function getUserAndPosts() {
  try {
    const user = await fetchUser(); 
    console.log('User Data:', user);

    const posts = await fetchPosts(user); 
    console.log('Posts:', posts);
  } catch (error) {
    console.error('Error fetching user and posts:', error); 
  }
}

getUserAndPosts();


//Question


// Error Handling in async/await:

// ● Modify the fetchUser function to reject the promise with an error if
// the user data is not found.
// ● Write an async function getUserInfo that uses await to call the
// fetchUser function and handles potential errors with a try/catch
// block, logging appropriate messages to the console.
// Modified fetchUser function to reject with an error if user data is not found

function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = null;
      
      if (user) {
        resolve(user);       } 
        else {
        reject('User data not found'); 
      }
    }, 1000); 
  });
}

async function getUserInfo() {
  try {
    const user = await fetchUser(); 
    console.log('User Info:', user); 
  } catch (error) {
    console.error('Error:', error); 
  }
}


getUserInfo();

//Question


// Simulate API Calls:

// ● Write a function apiCall that simulates an API call and returns a
// promise which resolves with data after a random delay (use
// setTimeout and Math.random()).
// ● Write an async function getData that uses await to call apiCall
// three times in sequence, logging each result to the console.
// ● Use try/catch to handle any errors that may occur during the API
// calls.



function apiCall() {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 2000 + 1000; 
    setTimeout(() => {
      const success = Math.random() > 0.2; 

      if (success) {
        resolve(`Data fetched after ${delay.toFixed(0)} ms`); 
      } else {
        reject('API call failed'); 
      }
    }, delay);
  });
}


async function getData() {
  try {
    console.log('Starting API calls...');
    const result1 = await apiCall(); // First API call
    console.log('First API Call Result:', result1);

    const result2 = await apiCall(); // Second API call
    console.log('Second API Call Result:', result2);

    const result3 = await apiCall(); // Third API call
    console.log('Third API Call Result:', result3);
  } catch (error) {
    console.error('Error during API calls:', error); // Handle any errors
  }
}

getData();
