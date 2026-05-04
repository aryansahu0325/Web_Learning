function createToaster(config){
    return function(notification){
        document.createElement("div");
        div.className="fixed bg-gray-800 text-white px-6 py-3 rounded shadow-lg pointer-events-none";

    };
}

let toaster = createToaster({
    positionX:"right",
    positionY:"top",
    theme:"dark",
    duration:3,
});

toaster("This is a dummy notification ! ");