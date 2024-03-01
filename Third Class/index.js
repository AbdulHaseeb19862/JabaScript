//Note: hoisting works on 'var' key and function and for function due to it's consider as var due it apply. and below we have examples of both

console.log(evenOddChecker(4));


function evenOddChecker(num){
    if(num%2===0){
        return "Even Number"
    }
    else{
        return "Odd Number"
    }
}



//What is hoisting
// In JavaScript, a variable can be declared after it has been used.

// In other words; a variable can be used before it has been declared.

// For Example
console.log(a);//It will show undefine because of that we did not assign the value for a;

a = 10;
console.log(a);


var a;




// through function we can pass array and object.
//Example Given Below

function car(arr){
    console.log(arr);
}
//Example Of Array
car(['Audi','Honda','Mehran','BMW']);

//Now Example Of Object

function cars(arr){
    //console.log(arr.Engine); You can console one property
    console.log(arr)// You can console whole Property
}

cars({
    name : 'Adui',
    Model : 2024,
    Engine : '3CC',
})