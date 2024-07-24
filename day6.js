                                                            //Day 4: ARRAYS//
//Activity 1: Array Creation and Access


//Task 1: Create an array of numbers from 1 to 5 and log the array to console. 

const numbers = [1,2,3,4,5];
console.log(numbers);
//Output:
/* 
0:1
1:2
2:3
3:4
4:5
*/


//Task 2: Access the first and last elements of the array and log them to the console.

const arr = [2,3,4,5,6,8,10];
console.log(arr[0]);                                   //Ouput: 2
console.log(arr[arr.length-1]);                        //Ouput: 10

//Activity 2: Array Methods (Basic)

//Task 3: Use the *push* method to add a new number to the end of the array and log the updated array.

let fruits = ["Apple","Orange","Mango","Cherry"];
fruits.push("Guava");
console.log(fruits);
//Output:
/* 
0:"Apple"
1:"Orange"
2:"Mango"
3:"Cherry"
4:"Guava"
*/


//Task 4: Use the *pop* method to remove the last element of the array and log the updated array.

let heightsinCm = [90,100,134,110,157,160,180];
heightsinCm.pop();
console.log(heightsinCm);
//Output:
/* 
0:90
1:100
2:134
3:110
4:157
5:160
*/


//Task 5: Use the *shift* method to remove the first element from the array and log the updated array.

fruits = ["Apple","Orange","Mango","Cherry"];
fruits.shift();
console.log(fruits);
//Output:
/* 
0:"Orange"
1:"Mango"
2:"Cherry"
*/


//Task 6: Use the *unshift* method to add a new number to the beginning of the array and log the updated array.

let arraynums = [1,2,3,4,5];
arraynums.unshift(100);
console.log(arraynums);
//Output:
/* 
0:100
1:1
2:2
3:3
4:4
5:5
*/


//Activity 3: Array Methods (Intermediate)


//Task 7: Use the *map* method to create a new array where each number is doubled and log the new array.

const array = [50, 70, 115, 170,225];
const newarray = array.map(myFunction)

function myFunction(num) {
  return num * 2;
}
console.log(newarray);
//Output:
/* 
0:100
1:140
2:230
3:340
4:450
*/


//Task 8: Use the *filter* method to create a new array with only even numbers and log the new array.

const arrnum = [15,32,23,34,16,40,43];
const newres = arrnum.filter(checkEven);

function checkEven(n) {
  return n%2==0;
}
console.log(newres);
//Output:
/* 
0:32
1:34
2:16
3:40
*/


//Task 9: Use the *reduce* method to calculate the sum of all numbers in the array and log the result.
const values = [1,2,3,4,5,6,7,8,9,10];
const Sum = values.reduce((accumulator,currentValue) => {
    return accumulator + currentValue;
},0);
console.log("Sum is:",Sum);
//Output: Sum is: 55

//Activity 4: Array Iteration 

//Task 10: Use a for loop to iterate over the array and log each element to the console.

let Array=[1,2,3,8,9,10];
for(let i=0; i<Array.length; i++)
{
    console.log(Array[i]);
}
//Output:
/*
  1
  2
  3
  8
  9
  10
*/  


//Task 11: use the forEach method to iterate over the array and log each element to the console.

let count=[1,2,3,4,5,6,7,8,9,10];
count.forEach(element => {
    console.log(element);
});
//Output:
/*
  1
  2
  3
  4
  5
  6
  7
  8
  9
  10
*/  


//Activity 5: Multi-dimensional Arrays


//Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

let arr1 = ["John",2010];
let arr2 = ["Ana",2011];
let arr3 = ["Darvin",2012];
let arr4 =  ["Sam",2013];
let students = [arr1,arr2,arr3,arr4];

for(let i=0;i<students.length;i++)
{
    for(let j=0;j<students[i].length;j++)
    {
        console.log(students[i][j]);
    }
}
//Output:
/*
  John
  2010
  Ana
  2011
  Darvin
  2012
  Sam
  2013
*/  


//Task 13: Access and log a specific element from the two-dimensional array.

arr1 = ["John",2010];
arr2 = ["Ana",2011];
arr3 = ["Darvin",2012];
arr4 =  ["Sam",2013];
students = [arr1,arr2,arr3,arr4];

for(let i=0;i<students.length;i++)
{
    for(let j=0;j<students[i].length;j++)
    {
        console.log("students[3][1] = ",students[3][1]);
    }
}
//Output: students[3][1] = 2013