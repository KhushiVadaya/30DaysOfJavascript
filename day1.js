//Activity 1: Varible Declaration
//Task 1: Declare a varible using 'var' ,assign it a number ,and log the value to the consle.
var num=6;
console.log(num); //Output: 6
//Task 2:  Declare a varible using 'let' ,assign it a string ,and log the value to the consle.
let intro="Hello, @ Everyone This is Khushi Yaduvanshi!";
console.log(intro); //Output: Hello, @ Everyone This is Khushi Yaduvanshi!
//Activity 2: Constant declaration
//Task 3:  Declare a variable using 'const', assign it a boolean value,and log the value to the console.
const IsroseIsblue=false;
console.log(IsroseIsblue); //Output: false

//Activity 3: Data Types

//Task 4:  Create variables of different data types and log each varible's type using the 'typeof' operator.
let weightInkg = 45;
let community="OCD";
let isDecember=false;
let languages=["c++","java","python","c","kotlin","javascript"];
let car={brand:"Toyota",model:"pirus",year:2015};
console.log("Value: ", weightInkg, ", Type: ", typeof weightInkg); // Output: Value: 45, Type: number
console.log("Value: ", community, ", Type: ", typeof community); // Output: Value: India, Type: string
console.log("Value: ", isDecember, ", Type: ", typeof isDecember); // Output: Value: false, Type: boolean
console.log("Value: ", languages, ", Type: ", typeof languages); // Output: Value:["c++","java","python","c","kotlin","javascript"] , Type: object
console.log("Value: ", car, ", Type: ", typeof car); // Output: Value:{brand:"Toyota",model:"pirus",year:2015} , Type: object 

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let Number = 987;
console.log(Number); // Output: 987
Number = 908;
console.log(Number); // Output: 908

// Activity 5: Understanding const

// Task 6: Try reassigning a variable declared with const and observe the error.
const constantValue = "Constant Value";
console.log(constantValue); // Output: Constant Value
// Uncommenting the next line will cause an error
// constantValue = "New Value"; // Error: Assignment to constant variable.

// Feature Request:

// 1. Variable Types Console Log
let numExample = 68462;
let stringExample = "Welcome to Javascript";
let booleanExample = true;
let objectExample = { year: "months", days: 30 };
let arrayExample = [1,2,3,4,5];
let undefinedExample;
let nullExample = null;

console.log("Value: ", numExample, ", Type: ", typeof numExample); // Output: Value: 68462, Type: number
console.log("Value: ", stringExample, ", Type: ", typeof stringExample); // Output: Value: Welcome to JavaScript, Type: string
console.log("Value: ", booleanExample, ", Type: ", typeof booleanExample); // Output: Value: true, Type: boolean
console.log("Value: ", objectExample, ", Type: ", typeof objectExample); // Output: Value: { year: "months", days: 30 }, Type: object
console.log("Value: ", arrayExample, ", Type: ", typeof arrayExample); // Output: Value: [1,2,3,4,5], Type: object (Arrays are a type of object in JavaScript)
console.log("Value: ", undefinedExample, ", Type: ", typeof undefinedExample); // Output: Value: undefined, Type: undefined
console.log("Value: ", nullExample, ", Type: ", typeof nullExample); // Output: Value: null, Type: object (This is a well-known quirk in JavaScript)

// 2. Reassignment Demo
let firstOutput = "abc";
console.log(firstOutput); // Output: abc
upadtedOutput = "xyz";
console.log(upadtedOutput); // Output: xyz

const fixedValue = "Constant Value";
console.log(fixedValue); // Output: Constant Value
// Uncommenting the next line will cause an error
// fixedValue = "Changed Value"; // Error: Assignment to constant variable.