let nm=document.querySelector("#name");
let form=document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();
    if(nm.value.length<=2){
        document.querySelector("#hide").style.display="initial";  
    }
    else{
        document.querySelector("#hide").style.display="none";
    }
});
form.addEventListener("submit", function(dets){
    dets.preventDefault();
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let ans=regex.test("a@a.a");
    console.log(ans);
});