var btn = document.querySelector('button');
btn.addEventListener('click',function(){
    window.location = 'https://www.google.com/maps/@34.0203591,71.4892897,15z?entry=ttu';
})

var prtDate = document.getElementById('print-Date')
var showDate = document.getElementById('show-Date');
var second = document.getElementById('second');
var isVisible = false;
showDate.addEventListener('click',function(){
    if(isVisible){
        prtDate.style.display = 'none';
    }
    else{
        var date = new Date();
        prtDate.innerHTML = date.getMilliseconds();
        prtDate.style.display = 'block';
    }
    isVisible =! isVisible;
})

showDate.addEventListener('click',function(){
    setInterval(function(){
        var date = new Date();
        second.innerHTML = date.toISOString();
        second.style.width = '200px';
        second.style.height = '100px';
        second.style.backgroundColor = 'orange';
        second.style.color = 'white';
        second.style.margin = 'auto';
    },3000)
})


