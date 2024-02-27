//we have 8 data types 
//int,string,intbeg,symbol,null,undefine,array,object
// 1) Primitive : are those types which we have by default
// 2) None Primitive : which is derived from primitive
var Student = "Abdul Haseeb";
var age = 21;
var married = false;

console.log(Student);
console.log(age);
console.log(married)

// Now we are going to operator
//Arithmatic Operator

var num1 = 100;
var num2 = 50;

console.log("Addition",num1+num2);
console.log("Subtraction",num1-num2);
console.log("Multiplication",num1*num2);
console.log("Division",num1/num2);
console.log("Modulus",num1%num2);

var num3 = 10;
console.log("Increement",num3++);
console.log(num3)

console.log("Dereement",num3--);
console.log(num3);

//Assignment Operator
//For example we are adding number

var number = 10;
number = number + 20;
console.log(number);

number += 20;
console.log(number);

// array is unstructured data we have
var arr1 = ["Abdul Haseeb",21,"Web Developer"];
console.log(arr1);
//If we access specific element and then we specify in braces []
console.log(arr1[1]);

//Object is a Structured voice data we have
var Devel = {
    name: "Abdul Haseeb",
    age: 21,
    Develop: "Web Developer",
}

console.log(Devel.name,Devel.age);

// JavaScript has three types of alert boxes or popups
//window.alert("Alert! You are leaving the page");
//window.confirm("Alert! You are confirm leaving this page");
// var num1 = window.prompt("Alert! Enter Your first number");
// var num2 = window.prompt("Alert! Enter Your second number");
// document.getElementById("h3").innerHTML = Number(num1) + Number(num2);

// Function : It is a collection of statements and performs a specific task

function printStatements(){
    console.log("Welcome To JavaScript");
    console.log("Hello, Abdul Haseeb");
    console.log("Please, Never give up keep it on");
    console.log("In Sha Allah The Time Will Come Sir");
    
}
printStatements();

function favNumber(){
    var fav = parseInt(Math.random()*100)
    return fav;
}

 
document.getElementById("h3").innerHTML = favNumber();
