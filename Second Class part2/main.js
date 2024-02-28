if(false){
    console.log("Inside If Block");
}else{
    console.log("Inside else Block");
}
// var email = "haseeb@gmail.com"
// var password = 123456;

// var enterEmail = window.prompt("Enter Your Email")
// var enterPassword = window.prompt("Enter Your Password");
// if(email == enterEmail && password == enterPassword){
//     console.log("You are logged in")
// }else{
//     console.log("You are logged in failed")
// }

var num = 10;
if(num>0){
    console.log("Positive Number")
}else if(num===0){
    console.log("Zero Number")
} else{
    console.log("Negative Number")
}

var age = 20;

 age > 18 ? console.log("You are Selected") : console.log("You are not Selected")

 function convertNumToWords(num1){
    var result;
    switch(num1){
        case 1:
            result = "One"
            break;
        case 2:
            result = "Two"
            break;
        case 3:
            result = "Three"
            break;
        case 4:
            result = "Four";
            break;
        case 5:
            result = "Five"
            break;
        default:
            result = "I Don't Have More Words";
    }
    return result;

 }
//  var num1 = window.prompt("Enter Number!")
//  console.log(convertNumToWords(Number(num1)))

//  var count = 1;
//  while(count <=10){
//     console.log(count)
//     count++;
//  }

//  for(var i=1; i<=10; i = i+2){
//     console.log(i)

//  }

var cares = ["Nissan","Honda Civic","Toyota","Mehran"];
for(var i = 0; i< cares.length; i++){
    document.write(cares[i]);
    document.write('<br>');
}

for(var carName of cares){
    document.write(carName);
    document.write('<br>');
}