// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Assigning a variable called name to the value Dane. 
// Creating a conditional statement
// The computer will first see if the name is Mary and will print a particular thing
// If the computer sees the name is not Mary the computer will do another action (print a different thing). 
// In this case, since name is not Mary, the computer will console.log 'how do you do?'
// With if/else/else if statements the computer is checking for True or False and told to do a certain action regarding if it is either true or false
//


//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Creating a variable called secret 
// Creating a variable called code and assigning it to the number 123
// Starting a conditional statement and the computer first goes to see if the variable code is equal to the number 123. Which it is in this case.
// If code is equal to 123, then we assign the variable secret to the string 'super' and sets the value of code equal to the value of code times 2
// Starting another conditional statement that checks if code is greater than the value 250, and if it is, the computer will set the variabke equal to 'duper'.
// The value of code would be 246 which is less than 250, so we would not go into this conditional.
// Lastly, we console.log the value of secret which is 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Create a boolean variable called isStudent, and set it equal to true
// Create a variable called age and set it equal to the number 34
// Create a variable called zip and set it equal to the number 55407
// Starting a conditional statement that checks if the variable isStudent is equal to true AND the variable zip is greater than the number 80000. If this is true the computer would console.log `You're a student on the West Coast!`
// isStudent is true but zip is less than 80000, so we move on to the next condition. 
// Then the computer checks to see if isStudent is equal to false OR age is less than the number 30. If this is true, the computer would console.log 'What are your hobbies?'
// isStudent is not equal to false and age is greater than 30, so the computer moves on to the next condition
// The computer then checks if isStudent is equal to true, if it is it will console.log 'Welcome to Prime!'. 
// This condition is met, so that is the output. 
// If that condition was not met, it would default to console.log 'How about the weather?'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne is suppose to be set to 'blue'
// should be let colorOne = 'blue'
let colorOne = 'red';
// FIX - colorTwo is suppse to be set to 'red'
// should be let colorTwo = 'red'
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  // FIX - the problem wants both colorOne and colorTwo set to 'purple'
  // add in colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// FIX - the problem doesn't say to make time a constant variable
// should be let time = 4;
const time = 4;

// FIX - the problem wants both conditions met but the conditional is using OR instead of AND 
// should be if (temp > 39 && time >= 4) {
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
// FIX - the problem doesn't say to make minAge a constant variable
// should be let minAge = 21;
const minAge = 21;

// FIX - the problem is asking to check if age is greater than or equal to minAge, but this
// conditional is checking if minAge is less than or equal to age
// should be 
// if(age >= minAge) {
//   console.log('enter');
// } else {
//   console.log('no entry');
// }
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

