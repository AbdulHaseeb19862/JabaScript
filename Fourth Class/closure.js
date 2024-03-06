var count = 100;
function outFun(){
    var multBy10 = count *10;
    console.log(count);
    console.log("I am Outer Function")
    function innerFun(){
        multBy10 += 10;
        console.log("I am Inner Function");
        console.log(multBy10);
    }
    return innerFun();
}

console.log(outFun());



function ret(){
    console.log('I am Abdul Haseeb');
    return 9;
}
console.log(ret());


let p = 'Abdul Haseeb';//We can change the let but remember it has block scope 
console.log(p);
p = "Adnan Bangash";
console.log(p);

const b = 'Abdul Haseeb Bangash';//And here we can change the value of variable if we try to modified and then it will give to us error
console.log(b);

//NAN through it we check the it is string or number;
var a = "ab3c";
console.log(isNaN(a)); //note: if it is true and it is string and it false then it is number

var c = 4.4;
console.log(isNaN(c));

// For Mathematics we library math. let's go to example of random number
console.log(parseInt(Math.random()*100));



