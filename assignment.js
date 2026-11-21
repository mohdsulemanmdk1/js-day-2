// -------------------------------------------------------------------
//  Problem 1: Valid or Invalid?




// a) firstName : valid
// b) 2ndPlace : invalid
// c) user_email :valid
// d) total--price :invalid
// e) $amount : valid
// f) my variable :invalid
// g) _privateData :valid
// h) let : invalid

// ------------------------------------------------------------------- 
// Problem  2: Fix the Variable Names
// Rewrite these variable names following proper JavaScript conventions (camelCase)





// Current (incorrect or non-standard)
// let user name = "Alice";
// let 1stprize = 1000;
// let total--cost = 250;
// let USERAGE = 25;







// Your corrected versions:
// 1.let userName = "Alice";
// 2.let firstPrize = 1000;
// 3.let totalCost = 250;
// 4.let useRage = 25;


// ------------------------------------------------------------------- 
// Problem 3: Naming Convention Practice
// Create appropriate variable names for the following (use camelCase)




// // Store a person's email address
// let ___________________ = "john@example.com";
// // Store whether a user is logged in (boolean)
// let ___________________ = true;
// // Store the maximum number of attempts
// const ___________________ = 3;
// // Store a student's final grade
// let ___________________ = 85;
// // Store a product's price in dollars
// let ___________________ = 99.99;

// Your corrected versions:


// Store a person's email address
// let emailId = "john@example.com";
// // Store whether a user is logged in (boolean)
// let isLogedIn = true;
// // Store the maximum number of attempts
// const maximumNumberOfAttempts = 3;
// // Store a student's final grade
// let totalMarks = 85;
// // Store a product's price in dollars
// let priceOfProduct = 99.99;





// ------------------------------------------------------------------- 
// Problem 4: Boolean Practice

// Create a variable for "is it raining?" - Set it to false
// let ___________________ = __________;
// // Create a variable for "is the user an adult?" (age >= 18) - Set it to true
// let ___________________ = __________;
// // Create a variable for "does the password match?" - Set it to false
// let ___________________ = __________;




// Create a variable for "is it raining?" - Set it to false
// let isRaining = false;
// // Create a variable for "is the user an adult?" (age >= 18) - Set it to true
// let isUserIsAnAdult = true;
// // Create a variable for "does the password match?" - Set it to false
// let isPasswordCorrect = false;



// ------------------------------------------------------------------- 
// Problem 5: Dynamic Typing

// let x = 10;
// console.log(typeof x); -----------> Prediction: number
// x = "Hello";
// console.log(typeof x); -----------> Prediction: string
// x = true;
// console.log(typeof x); -----------> Prediction: boolean


// ------------------------------------------------------------------- 
// Problem 6: String Indexing


// let language = "JavaScript";
//  console.log(language.length)

// // What is the first character?
// language[0] = j
// // What is the character at index 4?
// language[4] = S
// // What is the last character? (use length)
// language[language.length-1] = t
// // What is the length of the string?
// language.length = 10


// ------------------------------------------------------------------- 
// Problem 7: String Creation

// // Create a string with double quotes
// let message1 = "hello";
// // Create a string with single quotes that says: It's a sunny day
// let message2 = 'It is a sunny day';
// // Create a string with double quotes that says: He said, "Hello!"
// let message3 = " He said,Hello!";


// ------------------------------------------------------------------- 
// Problem 8: String Concatenation
// Complete the following:

 

// javascript
// let firstName = "John";
// let lastName = "Doe";
// // Concatenate to create "John Doe"
// let fullName = "john Doe";
// // Create a message: "Hello, John Doe!"
// let greeting = "hello,John Doe";
// let age = 25;
// // Create: "John is 25 years old"
// let info = "John is 25 years old" ;





// ------------------------------------------------------------------- 
// Problem 9: Convert to Template Literals


// let name = "Alice";
// let score = 95;
// // let message = "Student " + name + " scored " + score + " points.";
// // Your template literal version:
// let message = `student ${name} scored ${score} points`;
// console.log(message)








// let product = "Laptop";
// let price = 999;
// let quantity = 2;
// let total = price * quantity;
// // let receipt = "Item: " + product + ", Quantity: " + quantity + ", Total: $" + total;
// // Your template literal version:
// let receipt = `item ${product} quantity ${quantity} total $ is ${total}`;

// console.log(receipt)


// ------------------------------------------------------------------- 
// Problem 10: Template Literal Practice

// let cityName = "Paris";
// let temperature = 25;
// // Create: "The temperature in Paris is 25 degrees."
// let weather =`The temperature in ${cityName} is ${temperature} degrees.`;
// console.log(weather)

// let hourOfDay = 14;
// let userName = "Bob";
// // Create: "Good afternoon, Bob! It's 14:00."
// let greeting = `Good afternoon, ${userName}! It's  ${hourOfDay}:00.`;
// console.log(greeting)







// ------------------------------------------------------------------- 
// Problem 11: Null vs Undefined



// Write the correct value (null or undefined):

 
// A variable declared but not assigned
// let score;
// console.log(score); // Output:  undefined
// // A variable intentionally set as empty
// let winner = ___________;
// console.log(winner); // Output: null
// // Accessing a non-existent property
// let user = { name: "Alice" };
// console.log(user.age); // Output: undefined


// ------------------------------------------------------------------- 
// Problem 12: Predict the Output

// console.log(10 > 5); // true
// console.log(3 < 2); // false
// console.log(5 >= 5); // true
// console.log(8 <= 10); // true
// console.log(7 != 7); // false
// console.log(15 > 20); // false



// ------------------------------------------------------------------- 
// Problem 13: Write Comparisons




// let age = 18;
// // Write a comparison that returns true (age is greater than or equal to 18)
// console.log(age==18) // true
// let temperature = 30;
// // Write a comparison that returns true (temperature is greater than 25)
// console.log(temperature>25)// true
// let score = 75;
// // Write a comparison that returns false (score is less than 60)
// console.log(score<60)// false


// ------------------------------------------------------------------- 
// Problem 14: == vs ===
// Predict the output (true or false):



// console.log(5 == 5); // true
// console.log(5 === 5); // true
// console.log(5 == "5"); // true
// console.log(5 === "5"); // false
// console.log(true == 1); // true
// console.log(true === 1); // false
// console.log(0 == false); // true
// console.log(0 === false); // false



// ------------------------------------------------------------------- 
// Problem 15: Fix the Code
// Rewrite these comparisons using strict equality (===):


// let userInput = "10";
// if (userInput === 10) {
// console.log("Input is 10");
// }
// else{
//     console.log("input is not 10" )
// }



// ------------------------------------------------------------------- 
// Problem 16: String Comparison Prediction



// Predict true or false:
 
// console.log('a' > 'A'); // true
// console.log('b' < 'c'); // true
// console.log('apple' < 'banana'); // true
// console.log('Z' < 'a'); // true
// console.log("10" < "2"); // true



// ------------------------------------------------------------------- 
// Problem 17: Case-Insensitive Comparison
// Write code to compare two strings ignoring case:


// let str1 = "Hello";
// let str2 = "HELLO";
// // Write a comparison that returns true (comparing in lowercase)

// console.log(str1 > str2)




// ------------------------------------------------------------------- 
// Problem 18: User Greeting
// Write code to create a personalized greeting:

 

// let userName = "suleman";
// let hour = 9; // 9 AM
// // Create a greeting: "Good morning, suleman!"
// // Hint: Use template literals
// let greeting =`Good morning, ${userName} this is ${hour}th hour of the day` ;
// console.log(greeting);

// ------------------------------------------------------------------- 
// Problem 19: Age Checker
// Complete this age verification program:



// let userAge = 16;
// let minimumAge = 18;
// // Write a comparison to check if user is old enough
// let isOldEnough = userAge>minimumAge ;
// console.log(isOldEnough);



// ------------------------------------------------------------------- 
// Problem 20: Email Validator
// Check if an email starts with a letter (not a number or special character):


// let email = "alice@example.com";
// // Get the first character
// let firstChar = email[0];
// // Check if it's a lowercase letter (between 'a' and 'z')
// let isValid = firstChar>='a' && firstChar<='z';
// console.log(isValid);


// ------------------------------------------------------------------- 
// Problem 21: String Builder
// Build a product description using template literals:







// let productName = "Wireless Mouse";
// let productPrice = 29.99;
// let inStock = true;
// // Create: "Product: Wireless Mouse | Price: $29.99 | In Stock: true"
// let description = `Product:${productName}| Price: ${productPrice} | In Stock: ${inStock} `;
// console.log(description);





// ------------------------------------------------------------------- 
// Problem 22: Initial Generator
// Extract initials from a name:


// let firstName = "John";
// let middleName = "Robert";
// let lastName = "Smith";
// // Create initials: "J.R.S."
// let initials =  `${firstName[0]}.${middleName[0]}.${lastName [0]}`;
// console.log(initials);






// ------------------------------------------------------------------- 
// Problem 23: Find and Fix Errors
// Find the errors in this code and write the corrected version:


// let 1stPlace = "Gold";
// let user name = "Alice";
// let total--cost = 100;
// if (age = 18) {
// console.log("You can vote");
// }
// let message = 'It's a beautiful day';










// let firstPlace = "Gold";
// let user_name = "Alice";
// let total__cost = 100;
// if (age = 18) {
// console.log("You can vote");
// }
// let message =  'It\'s a beautiful day';;




// ------------------------------------------------------------------- 
// Problem 24: Logic Error
// This code has a logic error. Find and fix it:


// let userInput = "25";
// if (userInput === 25) {
// console.log("Input is correct");
// } else {
// console.log("Input is incorrect");
// }










// let userInput = "25";
// if (userInput == 25) {
// console.log("Input is correct");
// } else {
// console.log("Input is incorrect");
// }









// ------------------------------------------------------------------- 
// Problem 25: Password Validator
// Create a simple password checker:



 




// let password = "Pass123";
// // Check the following:
// // 1. Password length is at least 6 characters
// let isLongEnough = password.length >6 ;
// // 2. First character is uppercase (between 'A' and 'Z')
// let startsWithUppercase = password[0]>='A' && password[0]<='Z';
// // 3. Last character is a digit (between '0' and '9')
// let lastChar = password[password.length - 1]
// let endsWithNumber = lastChar >= '0' && lastChar <= '9';
// console.log("Password is long enough:", isLongEnough);
// console.log("Starts with uppercase:", startsWithUppercase);
// console.log("Ends with number:", endsWithNumber);
