                                                            //Day 4: FUNCTIONS//

//Activity 1: Function Declaration

//Task 1: Write a function to check if a number is even or odd and log the result to the console.

function CheckEvenOdd(num)
{
    return num%2==0 ? "Even" : "Odd";
}                                                            
console.log("num is: "+ CheckEvenOdd(5));
//Output: num is: Odd

//Task 2: Write a function to calculate the square of a number and return the result.

function Square(n)
{
    return n*n;
} 
console.log("Square of number is: "+Square(169));
//Output: Square of number is: 28561



//Activity 2: Function Expression

//Task 3: Write a function expression to find the maximum of two numbers and log the result to the cosole.

const maximum = function(a,b)
{
    if(a>b)
    {
        console.log(a+" is maximum.");
    }
    else{
        console.log(b+" is maximum."); 
    }
};
console.log(maximum(6,8));
//Output: 8 is maximum.



//Task 4: Write a function expression to concatenate two strings and return the result.

function myConcat(separator) {
    let result = ""; 
    for (let i = 1; i < arguments.length; i++) {
      result += arguments[i] + separator;
    }
    return result;
  }
  console.log(myConcat(",","Amazon","Flipkart"));
//Output: Amazon,Flipkart


//Activity 2: Arrow Functions

//Task 5: Write an arrow function to claculate the sum of two numbers and return the result.

const Sum = (n1,n2) => n1 + n2;
console.log("Sum of two numbers is: "+Sum(234,465));
//Output: Sum of two numbers is: 699

//Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const containsChar = (str,ch) =>
str.includes(ch);
console.log(containsChar("Yaduvushi","v"));           //Output: true
console.log(containsChar("Yaduvushi","e"));           //Output: false
 


//Activity 4: Function parameters and Default Values

//Task 7: Write a function that takes two parameters and returns their product.Provide a default value for the second parameter.

const product = (n1,n2 = 1) => n1 * n2;
console.log(product(43,2));                           //Output: 86
console.log(product(43));                             //Output: 43, since the default value for n2 is 1

//Task 8: Write a function that takes a person's name and age and returns a greeting message.Provide a default value for the age.
 
const person = (name,age = 40) => 'Hello, '+ name+' ! You are ' +age+ ' years old.';
console.log(person("John",25));                       //Output: Hello, John ! You are 25 years old.
console.log(person("Harry"));                          //Output: Hello, Harry ! You are 40 years old.



//Activity 5: Higher-Order Functions

//Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

const callwithNum = (func,num) =>
func(num);
const square = (n) => n * n;   
console.log(callwithNum(square,8));                   //Output: 64
const increment = (n) => n+1;
console.log(callwithNum(increment,8));                //Output: 9


//Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

const applyFunctions = (func1 , func2, value) => func2(func1(value));
const Sqr = (n) => n * n;
const half = (n) => n / 2;
console.log(applyFunctions(Sqr,half,4));              //Output: 8