                                                             //Day 7: OBJECTS
//Activity 1: Object Creation and Access

//Task 1: Create an object representing  a book with properties like title,author,and year and log the objet to the console.

const Book = {
    Title : "Atomic Habits",
    Author: "James Clear",
    Year : 1988,
}
console.log(Book);
//Output:
/*
 Author: "James Clear"
 Title: "Atomic Habits"
 Year: 1988
 [[Prototype]]: Object
*/

//Task 2: Access and log the title and author properties of the book object.

console.log(Book.Title);                             //Output: Atomic Habits
console.log(Book.Author);                            //Output: James Clear

//Activity 2: Object Methods

//Task 3: Add a method to the book object that returns a string with the book's title and author ,and log the result of calling this method.

const book1 ={
    title:"Harry Potter",
    author:"J.K. Rowling",
    year:"1997",
}
book1.description = function()
{
    console.log('The Book, '+this.title +"by  "+this.author +' is an mindblowing stuff.');
}
console.log(book1.description());
//Output: The Book, Harry Potter by J.K. Rowling is an mindblowing stuff.

//Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property,then log the updated object.

book1.year = 2010;
console.log(book1);
//Output:
/*author: "J.K. Rowling"
description
: 
ƒ ()
title: "Harry Potter"
year: 2010
*/

//Activity 3: Nested Objects

//Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the object to the console.

const library={
    name:"Gateway To Knowledge",
    Books:[ 
        {
            title:"To Kill a Mockinbird",
            author:"Harper Lee",
            year:1960
        },
        {
            title:"The Power of Your Subconscious Mind",
            author:"Joseph Murphy",
            year:1785
        },
        {
            title:"The Psychology of Money",
            author:"Morgan Housel",
            year:2020
        }
     ]  
};
console.log(library);
//Output:
/*
0: {title: 'To Kill a Mockinbird', author: 'Harper Lee', year: 1960}
1: {title: 'The Power of Your Subconscious Mind', author: 'Joseph Murphy', year: 1785}
2: {title: 'The Psychology of Money', author: 'Morgan Housel', year: 2020} 
*/


//Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log(library.name);                                         //Output: Gateway To Knowledge
library.Books.forEach(Book  =>{
     console.log(Book.title);
}); 
//Output:   
/*
To Kill a Mockinbird
The Power of Your Subconscious Mind
The Psychology of Money                          
*/

//Activity 4: The 'this' Keyword

//Task 7: Add a method to the object that uses the this keyword to return a string with the book's title and year ,and log the result of calling this method.

const book = {
    Title : "Atomic Habits",
    Author: "James Clear",
    Year : 1988,
}
book.description = function()
{
    console.log('The Book,'+ this.Title +" " +this.Year +" "+'is an amazing stuff.');
}
console.log(book.description());
//Output: The Book,Atomic Habits 1998 is an amazing stuff.

//Activity 5: Object Iteration

//Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

const libra={
    name:"Gateway To Knowledge",
    books:[ 
        {
            title:"To Kill a Mockinbird",
            author:"Harper Lee",
            year:1960
        },
        {
            title:"The Power of Your Subconscious Mind",
            author:"Joseph Murphy",
            year:1785
        },
        {
            title:"The Psychology of Money",
            author:"Morgan Housel",
            year:2020
        }
     ]  
};

libra.books.forEach(Book => {
    console.log("Book:");
    for (let property in Book) {
        console.log(property + ': '+Book[property]);
    }
    
    console.log(""); 
});

//Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

library.Books.forEach(Book => {
    console.log("Book: ");
    const keys = Object.keys(Book);
    console.log("Keys:",keys.join(", "));
    const values = Object.values(Book);
    console.log("Values:",values.join(", "));
    console.log("");
});

//Output:
/*
Book: 
Keys: title, author, year
Values: To Kill a Mockinbird, Harper Lee, 1960

Book: 
Keys: title, author, year
Values: The Power of Your Subconscious Mind, Joseph Murphy, 1785

Book: 
Keys: title, author, year
Values: The Psychology of Money, Morgan Housel, 2020
*/