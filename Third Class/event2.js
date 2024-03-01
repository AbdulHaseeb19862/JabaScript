var btn = document.querySelector('button');
var h1 = document.getElementById("h11");

function eventHandler(){
    console.log("I am clicked.....");
    h1.innerHTML = "Event Listener Again";
    btn.removeEventListener('click', eventHandler);
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = 'yellow';
}

function mouseHover(){
    console.log('I am Hovered........');
    btn.removeEventListener('mouseenter',mouseHover)
}


btn.addEventListener('click', eventHandler);
btn.addEventListener('mouseenter',mouseHover);
