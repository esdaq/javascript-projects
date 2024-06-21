const input = require('readline-sync');
let str = "LaunchCode";
let substring = "";
outputString = "";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

// let str2 = str.slice(0, 3);
// str2 = str.slice(3) + str2;

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let moveLength = input.question("Enter number: ");
/*let str3 = str.slice(0, Number(relocateLength));
console.log(str3)
str4 = str.slice(Number(relocateLength)) + str3;
console.log(str4); */
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if(str.length < moveLength) {
  substring = str.slice(0, 3);
  outputString = str.slice(3) + substring;
  console.log(outputString);
  console.log("Error: world length is too short defaulted to 3");
}

