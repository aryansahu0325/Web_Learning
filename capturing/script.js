      //It i sthe code of the Event Bubbling
// let a=document.querySelector("#a");
// let b=document.querySelector("#b");
// let c=document.querySelector("#c");
// let btn=document.querySelector("button");

// btn.addEventListener("click", function () {
//     console.log("You clicked the button!");
// });

// c.addEventListener("click", function () {
//     console.log("c clicked");
// });

// b.addEventListener("click", function () {
//     console.log("b clicked");
// });

// a.addEventListener("click", function () {
//     console.log("a clicked");
// }); 

let a=document.querySelector("#a");
let b=document.querySelector("#b");
let c=document.querySelector("#c");
let btn=document.querySelector("button");

btn.addEventListener("click", function () {
    console.log("You clicked the button!");
});

c.addEventListener("click", function () {
    console.log("c clicked");
});

b.addEventListener("click", function () {
    console.log("b clicked");
});

a.addEventListener("click", function () {
    console.log("a clicked");
}, true);