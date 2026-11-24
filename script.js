// ==============================
// QUESTION 1: City Name
// ==============================

var city = prompt("Enter your city name");

if (city === "Karachi") {
    alert("Welcome to city of lights");
}


// ==============================
// QUESTION 2: Gender
// ==============================

var gender = prompt("Enter your gender");

if (gender === "male") {
    alert("Good Morning Sir");
}
else if (gender === "female") {
    alert("Good Morning Ma'am");
}


// ==============================
// QUESTION 3: Traffic Signal
// ==============================

var signal = prompt("Enter traffic signal color");

if (signal === "red") {
    alert("Must Stop");
}
else if (signal === "yellow") {
    alert("Ready to move");
}
else if (signal === "green") {
    alert("Move now");
}


// ==============================
// QUESTION 4: Fuel Checking
// ==============================

var fuel = Number(prompt("Enter remaining fuel"));

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}


// ==============================
// QUESTION 5: Increment Operator
// ==============================

var a = 4;

if (++a === 5) {
    alert("Condition is true");
}


// ==============================
// QUESTION 6: Email Address
// ==============================

var email = "example@example.com";

alert("My email address is " + email);


// ==============================
// QUESTION 7: Book Name
// ==============================

var book = "A smarter way to learn JavaScript";

alert("I am trying to learn from the Book " + book);


// ==============================
// QUESTION 8: HTML Content
// ==============================

document.write("Yah! I can write HTML content through JavaScript");


// ==============================
// QUESTION 9: Shopping Discount
// ==============================

var amount = Number(prompt("Enter shopping amount"));

var discount;

if (amount >= 10000) {
    discount = amount * 0.20;
}
else if (amount >= 5000) {
    discount = amount * 0.10;
}
else {
    discount = 0;
}

var finalAmount = amount - discount;

alert("Discount: Rs. " + discount);
alert("Final Amount: Rs. " + finalAmount);


// ==============================
// QUESTION 10: Electricity Bill
// ==============================

var units = Number(prompt("Enter electricity units"));

var bill;

if (units <= 100) {
    bill = units * 10;
}
else if (units <= 200) {
    bill = (100 * 10) + ((units - 100) * 15);
}
else {
    bill = (100 * 10) + (100 * 15) + ((units - 200) * 20);
}

alert("Total Electricity Bill: Rs. " + bill);


// ==============================
// QUESTION 11: Profit and Loss
// ==============================

var costPrice = 45000;
var sellingPrice = 52000;

var profit = sellingPrice - costPrice;

var profitPercentage = (profit / costPrice) * 100;

alert("Total Profit: Rs. " + profit);
alert("Profit Percentage: " + profitPercentage.toFixed(2) + "%");


// ==============================
// QUESTION 12: Monthly Expenses
// ==============================

var money = 5000;

var food = money * 0.25;
var transport = money * 0.15;

var totalExpenses = food + transport;

var remainingMoney = money - totalExpenses;

alert("Money spent on food: Rs. " + food);
alert("Money spent on transport: Rs. " + transport);
alert("Total Expenses: Rs. " + totalExpenses);
alert("Remaining Money: Rs. " + remainingMoney);


// ==============================
// QUESTION 13: Average Speed
// ==============================

var distance = 180;
var time = 3;

var speed = distance / time;

alert("Average Speed: " + speed + " km/h");


// ==============================
// QUESTION 14: Age Calculator
// ==============================

var age = Number(prompt("Enter your current age"));

var futureAge = age + 15;

alert("Your age after 15 years will be: " + futureAge);


// ==============================
// QUESTION 15: Product Stock
// ==============================

var stock = 100;

var soldEveryHour = 5;

var hours = 7;

stock = stock - (soldEveryHour * hours);

alert("Remaining Products: " + stock);


// ==============================
// QUESTION 16: Number Checker
// ==============================

var number = Number(prompt("Enter a number"));

if (number > 0) {
    alert("The number is Positive");
}
else if (number < 0) {
    alert("The number is Negative");
}
else {
    alert("The number is Zero");
}// ==============================
// QUESTION 1: City Name
// ==============================

var city = prompt("Enter your city name");

if (city === "Karachi") {
    alert("Welcome to city of lights");
}


// ==============================
// QUESTION 2: Gender
// ==============================

var gender = prompt("Enter your gender");

if (gender === "male") {
    alert("Good Morning Sir");
}
else if (gender === "female") {
    alert("Good Morning Ma'am");
}


// ==============================
// QUESTION 3: Traffic Signal
// ==============================

var signal = prompt("Enter traffic signal color");

if (signal === "red") {
    alert("Must Stop");
}
else if (signal === "yellow") {
    alert("Ready to move");
}
else if (signal === "green") {
    alert("Move now");
}


// ==============================
// QUESTION 4: Fuel Checking
// ==============================

var fuel = Number(prompt("Enter remaining fuel"));

if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}


// ==============================
// QUESTION 5: Increment Operator
// ==============================

var a = 4;

if (++a === 5) {
    alert("Condition is true");
}


// ==============================
// QUESTION 6: Email Address
// ==============================

var email = "example@example.com";

alert("My email address is " + email);


// ==============================
// QUESTION 7: Book Name
// ==============================

var book = "A smarter way to learn JavaScript";

alert("I am trying to learn from the Book " + book);


// ==============================
// QUESTION 8: HTML Content
// ==============================

document.write("Yah! I can write HTML content through JavaScript");


// ==============================
// QUESTION 9: Shopping Discount
// ==============================

var amount = Number(prompt("Enter shopping amount"));

var discount;

if (amount >= 10000) {
    discount = amount * 0.20;
}
else if (amount >= 5000) {
    discount = amount * 0.10;
}
else {
    discount = 0;
}

var finalAmount = amount - discount;

alert("Discount: Rs. " + discount);
alert("Final Amount: Rs. " + finalAmount);


// ==============================
// QUESTION 10: Electricity Bill
// ==============================

var units = Number(prompt("Enter electricity units"));

var bill;

if (units <= 100) {
    bill = units * 10;
}
else if (units <= 200) {
    bill = (100 * 10) + ((units - 100) * 15);
}
else {
    bill = (100 * 10) + (100 * 15) + ((units - 200) * 20);
}

alert("Total Electricity Bill: Rs. " + bill);


// ==============================
// QUESTION 11: Profit and Loss
// ==============================

var costPrice = 45000;
var sellingPrice = 52000;

var profit = sellingPrice - costPrice;

var profitPercentage = (profit / costPrice) * 100;

alert("Total Profit: Rs. " + profit);
alert("Profit Percentage: " + profitPercentage.toFixed(2) + "%");


// ==============================
// QUESTION 12: Monthly Expenses
// ==============================

var money = 5000;

var food = money * 0.25;
var transport = money * 0.15;

var totalExpenses = food + transport;

var remainingMoney = money - totalExpenses;

alert("Money spent on food: Rs. " + food);
alert("Money spent on transport: Rs. " + transport);
alert("Total Expenses: Rs. " + totalExpenses);
alert("Remaining Money: Rs. " + remainingMoney);


// ==============================
// QUESTION 13: Average Speed
// ==============================

var distance = 180;
var time = 3;

var speed = distance / time;

alert("Average Speed: " + speed + " km/h");


// ==============================
// QUESTION 14: Age Calculator
// ==============================

var age = Number(prompt("Enter your current age"));

var futureAge = age + 15;

alert("Your age after 15 years will be: " + futureAge);


// ==============================
// QUESTION 15: Product Stock
// ==============================

var stock = 100;

var soldEveryHour = 5;

var hours = 7;

stock = stock - (soldEveryHour * hours);

alert("Remaining Products: " + stock);


// ==============================
// QUESTION 16: Number Checker
// ==============================

var number = Number(prompt("Enter a number"));

if (number > 0) {
    alert("The number is Positive");
}
else if (number < 0) {
    alert("The number is Negative");
}
else {
    alert("The number is Zero");
}