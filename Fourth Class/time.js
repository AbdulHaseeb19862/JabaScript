// // var btn = document.querySelector('button');
// // btn.addEventListener("click",function(){
// //     window.location = "https://www.google.com/maps/@34.0203591,71.4892897,15z?entry=ttu";
// // })

// var btn = document.querySelector('button');
// btn.addEventListener("click",function(){
//     window.open('https://www.google.com/maps/@34.0203591,71.4892897,15z?entry=ttu',"_blank");
// })

// var showD = document.getElementById('showDate');
// var prtD = document.getElementById('printDate');
// showD.addEventListener('click',function(){
//     var date = new Date();
//     prtD.innerHTML = date.getDate();
// })

var btn = document.querySelector('button');
btn.addEventListener('click',function(){
    window.open('https://www.google.com/maps/@33.9988423,71.4892897,15z?entry=ttu','_blank')
})

var showD = document.getElementById('showDate');
var prtD = document.getElementById('printDate');
showD.addEventListener('click',function(){
    var date = new Date();
    prtD.innerHTML = date;
})