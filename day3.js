                                                                //Day 3: CONTROL STRUCTURES//
 
//Activity 1: If-Else Statements

//Task 1: WAP to check if a number is positive ,negative or zero and log the result to the console.
let num=prompt("Enter the number?");
if(num>0)
{
    console.log("num is positive");
}
else if(num<0)
{                                                            //taken num=8    //Output:num is positive
    console.log("num is negative");
}                                                            //taken num=-4   //Output:num is neagtive
else
{
    console.log("num is zero");                              //taken num=0    //Output:num is zero
}

//Task 2: WAP to check if a person  is eligible to vote (age >= 18) and log the result to the console.
let age = prompt("Enter the age of a person?");
if(age>=18)
{
    console.log("Person is eligible to vote.");              //taken age=32  //Ouput:Person is eligible to vote.
}
else                                                         //taken age=18  //Ouput:Person is eligible to vote.
{
    console.log("Person is not eligible to vote.");          //taken age=12  //Output:Person is not eligible to vote.
}



//Activity 2: Nested If-Else

//Task 3: WAP to find the largest of three numbers using nested If-Else.
let a=27;
let b=19;
let c=38;
if(a>b && a>c)
{
    console.log(a +" i.e. a is the largest number.");
}
else if(b>a && b>c)
{
    console.log(b +" i.e. b is the largest number.");
}
else{
    console.log(c +" i.e. c is the largest number.");
}


//Activity 3: Switch Case

//Task 4: WAP that uses the switch case to determine the day of the week based on number (1-7) and log the day name to the console.
function Day(number)
{
    switch(number)
    {
        case 1:
            console.log("Monday");
            break;

        case 2:
            console.log("Tuesday");  
            break; 

        case 3:
            console.log("Wednesday");  
            break; 

        case 4:
            console.log("Thursday");  
            break; 

        case 5:
            console.log("Friday");                         
            break;                                         

        case 6:
            console.log("Saturday");  
            break;

        case 7:
            console.log("Sunday");  
            break;
         
        default: ("Day is not defined");
            break;    
    }
}
//Output
Day(2) //Tuesday
Day(7) //Sunday
Day(0) //Day is not defined

//Task 5: WAP that uses the switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console.
function Grade(score)
{
    switch(true)
    {
        case (score >= 85):
            console.log('A');
            break;
        case (score >= 75):
                console.log('B');
                break;
        case (score >= 65):
            console.log('C');
            break;
        case (score >= 50):
            console.log('D');
            break;
        case (score <= 40):
            console.log('F');
            break;
        default:
            console.log("Invalid Score!");    

    }
}
//Output:
Grade(90)  // A
Grade(67)  // C
Grade(23)  // F
//Activity 4: Conditional (Ternary Operator)

//Task 6: WAP that uses the ternary operator to check if a number is even or odd and log the result to the console.
let number=44;
console.log(number % 2 == 0 ? 'Even' : 'Odd'); //Output: Even

//Activity 5: Combining Conditions

//Task 7: WAP to check if a year is a leap year using multiple conditions(divisible by 4,but not 100 unless also divisible by 400) and log the result to the console.

let Year = 1900;
if((Year % 4 == 0 && Year % 100 !== 0) || (Year % 400 == 0))
{
    console.log("Year is a leap year.");
}
else{
    console.log("Year is not a leap year.");
}
//Output:Year is not a leap year.

 
/*************************************************************************************************************************************************/

//FEATURE REQUEST:

//1.Number Check Script//
let num1=10;
if(num>0)
{
    console.log("num is positive");
}
else if(num<0)
{                                                             //Output:num is positive
    console.log("num is negative");
}                                                          
else
{
    console.log("num is zero");                              
}

//2.Voting Eligibility Script//

age=20;
if(age>=18)
{
    console.log("Eligible");
}                                                             //Output:Eligible
else{
    console.log("Not Eligible");
}

//3.Day Of The Week Script//
function DayOfTheWeekScript(number)
{
    switch(number)
    {
        case 1:
            console.log("Monday");
            break;

        case 2:
            console.log("Tuesday");  
            break; 

        case 3:
            console.log("Wednesday");  
            break; 

        case 4:
            console.log("Thursday");  
            break; 

        case 5:
            console.log("Friday");                         
            break;                                         

        case 6:
            console.log("Saturday");  
            break;

        case 7:
            console.log("Sunday");  
            break;
         
        default: ("Day is not defined");
            break;    
    }
}
//Output
DayOfTheWeekScript(6) //Saturday
DayOfTheWeekScript(4) //Thursday

//4.Grade Assignment Script//

function GradeAssignmentScript(score)
{
    switch(true)
    {
        case (score >= 85):
            console.log('A');
            break;
        case (score >= 75):
                console.log('B');
                break;
        case (score >= 65):
            console.log('C');
            break;
        case (score >= 50):
            console.log('D');
            break;
        case (score <= 40):
            console.log('F');
            break;
        default:
            console.log("Invalid Score!");    

    }
}
//Output:
GradeAssignmentScript(70)  // C
GradeAssignmentScript(57)  // D
GradeAssignmentScript(33)  // F

//5.Leap Year Check Script//

Year = 2000;
if((Year % 4 == 0 && Year % 100 !== 0) || (Year % 400 == 0))
{
    console.log("Year is a leap year.");
}
else{
    console.log("Year is not a leap year.");
}
//Output:Year is a leap year.