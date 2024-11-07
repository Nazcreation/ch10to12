//Ch # 1: Alert
//Q # 1.
alert("Welcome to my website!");

//Q # 2. 
alert("Hello World!");


//Ch # 2: Variables for strings.
//Q # 1. Message:
var message = 'Hello world!';
alert(message);

//Q # 2. Age:
var age = 25;
alert("age");

//Q # 3. Greeting:
var greeting = "Good morning!";
alert(greeting);

var greeting = "Good evening!";
alert(greeting);

//Q # 4. Favourit color:
var Favouritcolor = "Green";
alert("Favourit color is" + Favouritcolor);

//Q # 5 is same as Q2

//Q # 1 Ch: 3.Variables for Numbers
var height = 170;
var newheight = height + 10;
alert(newheight);

//Q # 2
var num1 = 50;
var num2 = 30;
var sum = num1 + num2;
alert(sum);

//Q # 3 
var numToBeAdded = 20;
var num = 300;
var total = 320;
alert(total);

//Q # 4
var price = 120;
var tax = price * 0.10;
var totalprice = price + tax;
alert(totalprice);

//Creat variable myAddress with camelCase naming convention
let myAddress = "Karachi City";
alert(myAddress);

//Declare variable using camelCase
let userName = "Naz";
let userEmail = "naz@example.com";
let userPassword = "passwordabcd";
alert("Name:" + userName + ",Email:" + userEmail + ",Password:" + userPassword);

//Declare varibale with spaces (incorrect)
//let user address = "123 Main St";// SyntaxError

// Correct variable name using camelCase
let userAddress = "123 Main St";
alert(userAddress);

//Variable sensitivity(case sensitive)
let rose = "Floribundas";
//alert(Rose);//ReferenceError:Rose is not defined

// Ch:5.Math expressions: Familiar operators

//Q # 1.Basic artithmetic operators

// Q.1: Add 25 and 30, store in sum, and display in alert
var sum = "25 + 30";
alert("The sum is: " + sum);

// Q.2: Add num1 and num2, store in sum, and display in alert
var num1 = 25;
var num2 = 5;
var sum2 = num1 + num2;
alert("The sum of num1 and num2 is: " + sum2);

// Q. 3: Calculate remainder of 27 divided by 4, store in modulusResult, and display in alert
let modulusResult = 27 % 4;
alert("The remainder of 27 divided by 4 is: " + modulusResult);

// Ch: 6.Math expressions: Unfamiliar operators

// Q.1: Post-increment operator
var num = 3;
var newNum = num++;
alert("num: " + num);  // Displays 4
alert("newNum: " + newNum);  // Displays 3

// Q.2: Using counter++ twice
let counter = 10;
counter++;
counter++;
alert("Final counter value: " + counter);  // Displays 12

// Q.3: Post-decrement and pre-increment operators
let points = 20;
points--;
++points;
alert("Final points value: " + points);  // Displays 20

// Q. 4: Pre-increment operator used three times
let number = 0;
++number;
++number;
++number;
alert("Final number value: " + number);  // Displays 3

//1. Calculation with modulus and parentheses:

let calculation = (20 % 6) + 4 * 2;
alert(calculation);

//To solve this, follow the order of operations (PEMDAS):

//- Calculate 20 % 6 = 2
//- Add 4 * 2 = 8
//- Add 2 + 8 = 10

//The value of calculation is 10.

//1. Expression with parentheses:

let expressionValue = (6 + 2) * (5 - 3);
alert(expressionValue);

//To solve this:

//- Calculate expressions inside parentheses first:
//6 + 2) = 8
//(5 - 3) = 2
//- Multiplyresults: 8 * 2 = 16

//The value of expressionValue is 16.

//1. FinalTotal with operator precedence:

let finalTotal = 3 + 4 * 2 - 1;
alert(finalTotal);

//To solve this, follow PEMDAS:

//- Multiply 4 * 2 = 8
//- Add 3 + 8 = 11
//- Subtract 1 from 11 = 10

//The value of finalTotal is 10.

//1. Evaluating answer:

let answer = 2 + 3 * 4 % 5;
alert(answer);

//To solve this:

//- Multiply 3 * 4 = 12
//- Calculate modulus 12 % 5 = 2
//- Add 2 + 2 = 4

//The value of answer is 4.

// Ch:8.Prompts....

// Q.1: for user's name
var userNam = prompt("What is your name?");
alert("Hello, " + userName + "!");

// Q.2: for user's age
var age = prompt("How old are you?");
if (age === null) {
    alert("No age provided");
} else {
    alert("You are " + age + " years old.");
}

// Q.3: for number of pets
var pets = prompt("How many pets do you have?");
if (pets === "") {
    alert("You didn't enter anything.");
} else {
    alert("You have " + pets + " pets.");
}

// Q.4: for a number between 1 and 10
var num = prompt("Enter a number between 1 and 10");
var numInt = parseInt(num);
if (isNaN(numInt) || numInt < 1 || numInt > 10) {
    alert("Invalid input. Please enter a number between 1 and 10.");
} else {
    var result = numInt * 2;
    alert("The result is: " + result);
}

// Q.5: for favorite number with default value
var favNum = prompt("What is your favorite number?");
if (favNum === "") {
    favNum = 7; // default value
}
alert("Your favorite number is: " + favNum);


//Chapter: "9" if statements....


//Q:1. Prompt and If Statement.
var userAnswer = prompt("What is the capital of France?");
if (userAnswer === "Paris") {
    alert("Correct!");
} else {
    alert("Try again!");
}

//let answer = prompt("What is the capital of France?");
//if (answerz . toLowerCase() === "paris") {
// alert("Correct!");
//} else {
//alert("Try again!");
//}


//Q:2. If-Else Statement
var userAnswer = prompt("What is the capital of France?");
if (userAnswer === "Paris") {
    alert("Correct!");
} else {
    alert("Incorrect, the correct answer is Paris.");
}

//Q:3. Multiple Correct Answers
var userAnswer = prompt("What is the capital of the United Kingdom?");
if (userAnswer === "London" || userAnswer === "The United Kingdom") {
    alert("Correct!");
} else {
    alert("Incorrect, the correct answer is London.");
}

//Q:4. Incrementing a Score
var score = 0;
function askQuestion() {
    var userAnswer = prompt("What is the capital of the United Kingdom?");
    if (userAnswer === "London" || userAnswer === "The United Kingdom") {
        score++;
        alert("Correct! Your score is now: " + score);
    } else {
        alert("Incorrect, the correct answer is London. Your score is: " + score);
    }
}
askQuestion();

//Q:5. Testing Multiple Variables
var capitalAnswer = prompt("What is the capital of Germany?");
var mathAnswer = prompt("What is 10 + 10?");
var isCapitalCorrect = (capitalAnswer === "Berlin");
var isMathCorrect = (mathAnswer == 20);
if (isCapitalCorrect && isMathCorrect) {
    alert("You got both right!");
} else if (isCapitalCorrect || isMathCorrect) {
    alert("You got one correct!");
} else {
    alert("You got both wrong.");
}
//Q:6  Odd or Even Checker:

let numbera = parseInt(prompt("Enter a number:"));

// Check if the number is even or odd
if (numbera % 2 === 0) {
    console.log(numbera + " is even.");
} else {
    console.log(numbera + " is odd.");
}
// Q:7  Grade Calculator:
let scorea = parseInt(prompt("Enter your score:"));

// Assign a grade based on the score
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
// Q:8 Leap Year Checker:
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log(year + " is a leap year.");
            } else {
                console.log(year + " is not a leap year.");
            }
        } else {
            console.log(year + " is a leap year.");
        }
    } else {
        console.log(year + " is not a leap year.");
    }
}
// Example usage:
let year = parseInt(prompt("Enter a year:"));
isLeapYear(year);

// Q 9  Number Comparison:
function findLargestNumber(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        console.log("The largest number is: " + num1);
    } else if (num2 >= num1 && num2 >= num3) {
        console.log("The largest number is: " + num2);
    } else {
        console.log("The largest number is: " + num3);
    }
}

// Example usage: Get three numbers from the user
let number1 = parseInt(prompt("Enter the first number:"));
let number2 = parseInt(prompt("Enter the second number:"));
let number3 = parseInt(prompt("Enter the third number:"));

findLargestNumber(number1, number2, number3);

// Q 10 Discount Calculator:

function calculateFinalPrice(originalPrice) {
    let discountRate;

    // Determine the discount rate based on the original price
    if (originalPrice < 50) {
        discountRate = 0; // No discount for prices less than $50
    } else if (originalPrice >= 50 && originalPrice <= 100) {
        discountRate = 0.10; // 10% discount for prices between $50 and $100
    } else {
        discountRate = 0.20; // 20% discount for prices greater than $100
    }

    // Calculate the discount amount
    let discountAmount = originalPrice * discountRate;

    // Calculate the final price
    let finalPrice = originalPrice - discountAmount;

    // Output the results
    console.log("Original Price: $" + originalPrice.toFixed(2));
    console.log("Discount Rate: " + (discountRate * 100) + "%");
    console.log("Discount Amount: $" + discountAmount.toFixed(2));
    console.log("Final Price: $" + finalPrice.toFixed(2));
}

// Example usage: Get the original price from the user
let originalPrice = parseFloat(prompt("Enter the original price of the item:"));
calculateFinalPrice(originalPrice);

//Ch: 10. Functions....

//Q no 1 Sumof TwoNumbers:
function numbers(num1, num2) {
    return num1 + num2;
}
let answerb = numbers(87, 21);
console.log("sum of the numbers is:" + answerb);
// Q no 2 
function changing(celcius) {
    return celcius * 9 / 5 + 32;
}
let answer1 = changing(100);
console.log(answer1);


//  Q no 3
function primeornot(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;

        }
        return true;
    }
}
let prime = (7);

console.log((`Is ${prime} prime? ${primeornot(prime)}`));

// Q  no 4 
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log("Reversed String: " + reverseString("hello"));

// Q  no 5 
function factorial(num) {
    if (num < 0) return undefined; // Factorial not defined for negative numbers
    if (num === 0 || num === 1) return 1; // 0! and 1! are 1
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log("Factorial of 5: " + factorial(5));

// Q   no 6 
function greetUser() {
    console.log("Hello, welcome!");
}
greetUser();
// Q  no 7 
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Feryal");

// Q   no 8 
function twonumbers(number1, number2) {
    return number1 + number2;
}
console.log(twonumbers(5, 9));

//Q   no 9 
function randomnum() {
    return Math.floor(Math.random() * 101);
}
console.log(randomnum());

// Q  no 10 
function Vote(agex) {
    return agex >= 18;
}
const agex = 20;
const eligible = Vote(agex);
console.log(eligible);

//11. Arrow Function....

// Q no 1 
const square = num => num * num;
console.log(square(64));

// Q no 2 
const evenNumbers = arr => arr.filter(num => num % 2 === 0);
console.log(evenNumbers([10, 5, 7.33, 25]));

// Q no 3 
const concatenateStrings = (str1, str2) => str1 + str2;
console.log(concatenateStrings("Hi,", "Feryal Abid!"));

// Q no 4 
const Max = arr => Math.max(...arr);
console.log(Max([10, 3, 20, 90, 88]));

//  Q no 5 
const sumOfNum = arr => arr.reduce((total, num) => total + num, 0);
console.log(sumOfNum([11, 28, 78, 66, 50]));

//  Q no 6 
const print = () => console.log("Hello World");
print();

// Q no 7 
const squareOfNumber = num => num * num;
console.log(squareOfNumber(9));

// Q  no 8 
const isPositive = num => num > 0;
console.log(isPositive(10));
console.log(isPositive(-9));

//  Q no 9 
const generate = () => Math.floor(Math.random() * 40) + 9;
console.log(generate());

//  Q no 10 
const convertion = minutes => minutes * 60;
console.log(convertion(8));

// Ch 12.Annoynumus Function.....

// Q no 1 
(function () {
    console.log("Hello");
})();
// Q  no 2 

const sum1 = function (i, j) {
    return i + j;
};
const result1 = sum1(95, 25);
console.log(result1);

// Q   no 3 
let Array = [90, 87, 55, 71, 10];

Array.sort(function (d, f) {
    return d - f;
});

console.log(Array);

// Q no  4 
(function (name) {
    console.log(`Hello, ${name}!`);
})("Feryal abid");
// Q  no  5 of ch 12
let check = (function (num) {
    if (num % 2 === 0) {
        console.log(`${num} is even.`);
    } else {
        console.log(`${num} is odd.`);
    }
})(10);

// Q   no 6 
let numy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNum = numy.filter(function (numy) {
    return numy % 2 !== 0;
});
console.log(oddNum);

// Q no 7 
let fact = (function (n) {
    if (n === 0 || n === 1) return 1;
    return n * (function f(n) { return n === 0 || n === 1 ? 1 : n * f(n - 1); })(n - 1);
})(3);
console.log(fact);

//  Q no 8 
setTimeout(function () {
    console.log("Time's up!");
}, 2000);

//  Q no 9 
let numArr = [1, 2, 3, 4, 5];
let sumc = numArr.reduce(function (total, currentValue) {
    return total + currentValue;
}, 0);

console.log(sum);

//  Q no 10 
(function (age) {
    if (age >= 18) {
        console.log(`Person with age ${age} is eligible to vote.`);
    } else {
        console.log(`Person with age ${age} is not eligible to vote.`);
    }
})(30);

(function (age) {
    if (age >= 18) {
        console.log(`Person with age ${age} is eligible to vote.`);
    } else {
        console.log(`Person with age ${age} is not eligible to vote.`);
    }
})(15);