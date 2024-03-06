var sDate = document.getElementById('showDate');
var pDate = document.getElementById('printDate');
var isVisible = false;
sDate.addEventListener('click',function(){
    if(isVisible){
        pDate.style.display = 'none';
    }else
    {
        var date = new Date();
        pDate.innerHTML = date.toTimeString();
        pDate.style.display = 'block';
    }
    isVisible =!isVisible;
})