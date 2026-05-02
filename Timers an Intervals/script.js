// let si=setInterval(function(){
//     console.log("hello");
// },5000);
// let tm=setTimeout(function(){
//     console.log("hello");
// },5000);
// clearTimeout(si);
// clearInterval(tm);

let count=10;  //can be printing numbers from 10 to 0 after 1 sec 1sec=1000ms
let interval=setInterval(() => {
    if(count>=0){
        console.log(count);
        count--; 
    }
    else
    {
        clearInterval(interval);
    }
}, 1000);