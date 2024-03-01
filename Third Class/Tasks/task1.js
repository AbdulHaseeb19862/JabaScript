var label = document.getElementById('lab');
var input = document.querySelector('input');
input.addEventListener('keydown',function(){
        label.innerHTML='Typing..';
    
    
})

input.addEventListener('keyup',function(){
    // setTimeout(() => {
    //     label.innerHTML = 'Online';
    // }, 2000);
    label.innerHTML = 'Online';
   
})