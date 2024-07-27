                                                                      //Day 8: ES6 + FEATURES
//Activity 1: Template Literals
//Task 1: Use template literals to create a string that include for a person's name and age , and log the string to the console.
let name ="Jasmine";
let age = 26;
let str = `Hello , ${name} You are ${age} years old.`
console.log(str);
//Output: Hello , Jasmine You are 26 years old.
//Task 2: Create a multi-line sring using template literals ans log it to the console.
const Me = 
    `Hello everyone, 
     Myself Khushi Yaduvanshi
     I'm a B.Tech 2nd yr student. `;
console.log(Me);     
/*Output: Hello everyone, 
             Myself Khushi Yaduvanshi
             I'm a B.Tech 2nd yr student.*/


//Activity 2: Destructuring 
//Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const exams = ["JEE","UPSC","NEET","SSC"];
let [exam1,exam2] = exams;
console.log(exam1 +" "+exam2);
//Output: JEE UPSC

//Task 4: Use object destructuring to extract the title and author from a book and log them to the console.
const Book = {
    Title : "Atomic Habits",
    Author: "James Clear",
    Year : 1988,
};
let {Title,Author} = Book;
console.log("This is a book named "+Title+" by "+Author+".");
//Output: This is a book named Atomic Habits by James Clear. 


//Activity 3: Spread and Rest Operators
//Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const Array = [1,2,3,4,5];
const newArray = [...Array,6,7,8,9,10];
console.log("New Array is: "+newArray);

//Output: 

//Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them,and return the result.

function sum(...args){
    let sum=0;
    for(let arg of args) 
        {
            sum += arg;
        }    
    return sum;
   
}
console.log("Sum is: "+ sum(2,4,5,6,7));
//Output: Sum is: 24
//Activity 3: default Parameters 
//Task 7: Write a function that takes two parameters and return their, product with the second parameter having a default value of 1.
          //Log the result of calling this function with and without the second parameter.
function product(a,b){
    return a*b;
}
console.log(4);
//Output: 4

//Activity 5: Enhanced Object Literals
//Task 8: Use enhanced object literals to create an object with methods and properties ,and log the object to the console.
const firstname = "Ronaldo";
const Age = 40;
const Person = {
    firstname,
    Age,
    greet() {
        console.log(`Hello, my name is ${this.firstname} and I am ${this.Age} years old.`);
    },
    incrementAge() {
        this.Age += 5;
        console.log(`I am now ${this.Age} years old.`);
    }

};
console.log(Person);
Person.greet();
Person.incrementAge();
//Output: 
/*Age: 45
*firstname: "Ronaldo"
greet
: ƒ greet()
incrementAge: ƒ incrementAge()
[[Prototype]]: Object*/

//        Hello, my name is Ronaldo and I am 40 years old.
//        I am now 45 years old.

//Task 9: Create an object with computed property names based on variables and log the object to the console.  
const studentName = "Name";
const Roll = "Roll No";
const Course = "Degree";

const Student = {
    [studentName] : "Swayam",
    [Roll] : 12310288,
    [Course] : "B.Tech"

};
console.log(Student);
