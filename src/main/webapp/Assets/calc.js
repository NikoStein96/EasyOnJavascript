var button = document.querySelectorAll(".t1:not(#calculate)");
var calcDisplay = "";
var res = "";

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", addToDisplay(button[i]));
}

var calculate = document.getElementById("calculate").addEventListener("click", doMath())

function addToDisplay(button) {
    return function () {
        calcDisplay += button.innerHTML;
        document.getElementById("display").innerHTML = calcDisplay;
    };
}

function doMath(){
    return function () {
        var calcDisplay = document.getElementById("display").innerHTML;
        var finalResult = "";
        if(calcDisplay.indexOf("+")){
            res = calcDisplay.split("+");
            finalResult = parseInt(res[0]) + parseInt(res[1]);
            document.getElementById("display").innerHTML = finalResult;
        } else if(calcDisplay.indexOf("-")){
            res = calcDisplay.split("-");
            console.log(res);
            finalResult = parseInt(res[0]) - parseInt(res[1]);
            document.getElementById("display").innerHTML = finalResult;
        } else if(calcDisplay.indexOf("/")){
            res = calcDisplay.split("/");
            finalResult = parseInt(res[0]) / parseInt(res[1]);
            document.getElementById("display").innerHTML = finalResult;
        } else {
            res = calcDisplay.split("*");
            finalResult = parseInt(res[0]) * parseInt(res[1]);
            document.getElementById("display").innerHTML = finalResult;
        }
    };
}
