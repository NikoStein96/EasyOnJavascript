document.getElementById("buttons").addEventListener("click", appendToDisplay);
document.getElementById("calculate").addEventListener("click", sum);
var display = document.getElementById("display")
display.addEventListener("click", clear);

function appendToDisplay() {
    display.innerText += event.target.innerText;
}

function sum() {
    display.innerText = eval(display.innerText);
    event.stopPropagation();
}

function clear() {
    display.innerText = "";
}
