let inp=document.querySelector("input");
let span=document.querySelector("span");
inp.addEventListener("input", function () {
    let count=inp.value.length;
    let left=20-count;
    if (left < 0) {
        span.innerText = left;
        span.style.color = "red";
    } else {
        span.innerText = left;
    }
});