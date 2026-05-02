//overall progress = 3sec
//100%
let count=0;
let progress=document.querySelector(".progress-bar");
let percentText=document.querySelector("#percentage");
let interval=setInterval(function(){
    if(count<100){
        count++;
        progress.style.width=`${count}%`;
        percentText.textContent=`${count}%`;
    }else{
        document.querySelector("#downtext").textContent="Downloaded";
        clearInterval(interval);
    }
 },30);