                                                            //Day 4: LOOPS//
// Activity 1: For Loop
//Task 1: Write a program to print numbers from 1 to 10 using a for loop.

for(let i=1;i<=10;i++)
    {
         console.log(i);
    } 
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
//Task 2: Write a program to print the multiplication table of 5 using a for loop.
for(let i=5;i<=5*10;i += 5)
{
    console.log(i);
}
//Output:
/*
   5
   10
   15
   20
   25
   30
   35
   40
   45
   50
*/    

// Activity 2:  While Loop.
//Task 3:  Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let i = 1
let sum = 0;
while(i <= 10)
{
     sum += i; 
     i++;
}
console.log("Sum = ",sum);
//Output: Sum = 55;

//Task 1: Write a program to print numbers from 10 to 1 using a while loop.
i=10;
while(i>0)
{
   
    console.log(i);
    i--;
}
//Output
/*
  10
  9
  8
  7
  6
  5
  4
  3
  2
  1
*/

// Activity 3: Do...While Loop

//Task : Write a program to print numbers from 1 to 5 using a do... while loop.
i=0
do 
{
    i++;
    console.log(i);

}
while(i<5);
//Output:
/*
   1
   2
   3
   4
   5
*/   
//Task 6:  Write a program to calculate the factorial  of a number  using a do... while loop.
let num = 5;
fact = 1;
do
{
    fact *= num;
    num--;
}    
while( num != 0);
console.log("5! =",fact);   
//Output: 5! = 120

//Activity 4: Nested Loops

//Task 7: Print pattern
for(let i=1;i<=5;i++)
{
    let str = "";
    for(j=1;j<=i;j++)
    {
        str = str+"*"+" ";
    }
    console.log(str);
}
//Output:
/* 
*
**
***
****
*****
*/
//Activity 5: Loop Control Statements
//Task 8 : Write a program to print numbers from 1 ot 10, but skip using continue statement.
for(let i=1;i<=10;i++)
    {
         if(i==5)
         {
            continue;
         }
         console.log(i);
    } 
//Output:
/*
  1
  2
  3
  4
  6
  7
  8
  9
  10
*/
//Task 9: Write a program to print numbers from 1 ot 10, but stop the loop using break statement.

for(let i=1;i<=10;i++)
    {
         if(i==8)
         {
            break;
         }
         console.log(i);
    } 

