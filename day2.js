// Activity 1: Arithmetic Operations 

//Task 1: Write a program to add two numbers and log the result to the console.
let a =5;
let b =6;
console.log("a+b = ",a+b); //Ouput:a+b = 11

//Task 2: Write a program to subtract two numbers and log the result to the console.
 a=15;
 b=6;
 console.log("a-b = ",a-b); //Ouput:a-b = 9

//Task 3: Write a program to multiply two numbers and log the result to the console.
 a=15;
 b=6;
 console.log("a*b = ",a*b); //Ouput:a*b = 90

//Task 4: Write a program to divide two numbers and log the result to the console.
 a=30;
 b=6;
 console.log("a/b = ",a/b); //Ouput:a/b = 5

//Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
 a=30;
 b=7;
 console.log("a%b = ",a%b); //Ouput:a%b = 2


//Activity 2: Assignment Operators

//Task 6: Use += operator to add a number to a variable and log the result to the console.
a=8;
a += 13;  //Addition Operator
console.log("a += 13, a =", a);//Output:a += 13, a = 21

//Task 7: Use -= operator to subtarct a number from a variable and log the result to the console.
b=5;
b -= 23;  //Subtraction Operator
console.log("b -= 13, b =", b);//Output:b -= 23, b = -18;

//Activity 3: Comparison Operator

//Task 8: Write a program to compare two numbers using > and < and log the result to the console.
a=3;
b=6;
console.log("greater than:",a>b); //Output:greater than: false 
console.log("less than:",a<b); //Output:less than: true


//Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
console.log("greater than or equal to:",a>=b); //Output:greater than or equal to: false 
console.log("less than or equal to:",a<=b); //Output:less than or equal to: true

//Task 10: Write a program to compare two numbers using == and === and log the result to the console.
a=5;
b="5";
console.log("equal to :",a==b); //Output:equal to : true 
console.log(" strictly equal to :",a===b); //output:strictly equal to : false
 

//Activity 4: Logical Operators

//Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
let x=prompt("Enter the value of x:");
let y=prompt("Enter the value of y:");
let z=prompt("Enter the value of z:");
if(x>y && y>z)
{
    console.log("Condition fulfilled.");
}
else
{
    console.log("Invalid Input.");    //if x=12,y=10 ,z=8   Output: Condition fulfilled.   
}


//Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
if(x>y || y<z)
{
    console.log("Hey!,whats up.");
}
else{
    console.log("Error");     //if x=12,y=10 ,z=8  Output: Hey!,whats up.
}


//Task 13: Write a program that uses the ! operator to combine two conditions and log the result to the console.
if(!(x > y))
{
    console.log("Hey!,whats up.");
}
else
{
    console.log("Error"); //if x=12,y=10 ,z=8  Output: Error.
}


//Activity 5: Ternary Operator

//Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let val = 5;
console.log(val>=0 ? "positive" : "negative");//output: positive

//FEATURE REQUEST:

//Arithmetic operators
let n1=15;
let n2=6;
console.log("Addition:n1+n2 =",n1+n2); //Output: Addition:n1+n2 = 21
console.log("Subtractiontion:n1-n2 =",n1-n2); //Output: Subtractiontion:n1-n2 = 9
console.log("Multiplication:n1*n2 =",n1*n2); //Output: Multiplication:n1*n2 = 90
console.log("Division:n1/n2 =",n1/n2); //Output: Division:n1/n2 = 2.5
console.log("Remainder:n1%n2 =",n1%n2); //Output: Remainder:n1%n2 = 3

//Assignment Operator
n1 = 12;
n2 = 16;
n1 += 5;
n2 -= 6;
console.log(" n1 += 5, n1=",n1); //Addition Operator //Output: n1 += 5, n1=17
console.log(" n2 -= 6, n2=",n2); //Subtraction Operator //Output: n2 -= 6, n2=10

//Comparison Operator
console.log("greater than:",n1>n2); //Output:  greater than: true  
console.log("less than:",n1<n2); //Output:less than: false
console.log("greater than or equal to:",n1>=n2); //Output: greater than or equal to: true
console.log("less than or equal to:",n1<=n2); //Output: less than or equal to: false
console.log("equal to:",n1==n2); //Output: equal to: false
console.log("strictly equal to:",n1===n2); //Output: strictly equal to: false
 
//Logical operators
console.log(n1>n2 && n1>=n2); //Output:
console.log(n1>n2 || n1>=n2); //Output:
console.log(!(n1>n2)); //Output:

//Ternary Operators
let V= -15;
console.log(V>=0 ? "positive" : "negative"); //Output: