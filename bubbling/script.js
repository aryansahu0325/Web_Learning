document.querySelector("#nav").addEventListener("click", function () {
    alert("You clicked on the navigation bar!");
});

let ul=document.querySelector("ul");
ul.addEventListener("click", function () {
    alert("You clicked on the list!");
});

let ull=document.querySelector("ul");
ull.addEventListener("click", function (dets) {
    dets.target.classList.toggle("lt");
});