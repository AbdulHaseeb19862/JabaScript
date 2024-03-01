var btn = document.querySelector("button");
var h1 = document.getElementById("h11");

function eventHandler(){
    console.log("I am clicked......");
    h1.innerHTML = "JavaScript Is Awesome!!!!";
    btn.removeEventListener('click',eventHandler);
    document.body.style.backgroundColor = 'aqua';
    document.body.style.color = 'orange'
}

btn.addEventListener('click',eventHandler);
// You can apply mutliple event listener
// btn.addEventListener('mouseenter',function(){
//     console.log("I am hoverd....");
// })

// btn.onclick = function eventHandler(){
//     console.log("I am clicked......");
//     h1.innerHTML = "JavaScript Is Awesome!!!!";
//     btn.removeEventListener('click', eventHandler);
// }