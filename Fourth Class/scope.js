// var fullName = 'Abdul Haseeb';
// console.log(fullName);

function scope(){
    var fullName = 'Abdul Haseeb';
    var age = 21;
    function naam(){
        console.log(`My name is ${fullName}`)
    }
    naam();
    console.log(age);      
}
scope();

{ 
   
    if(18>8){
        let age = 21;//let have a block scope in javascriptx
        // var age = 21;
        // console.log(`My age is ${age}`);
    }
    console.log(age)
}