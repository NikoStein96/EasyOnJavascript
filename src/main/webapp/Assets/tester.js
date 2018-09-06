const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

var originText;
var timer = [0,0,0,0];
var interval;
var timerRunning = false;
var texts = ["Ifølge en anonym kilde har topfolk i Det Hvide Hus indgået pagt om at modarbejde Trump, og nu vil præsidenten angiveligt gøre alt for at finde synderen", "Tidligere landsholdsanfører Daniel Agger udtrykker respekt for de 17 danske debutanter i kampen mod Slovakiet", "Den 49-årige kvinde skal i retten i dag torsdag","Efter den mest opsigtsvækkende venskabskamp i dansk fodboldhistorie er vikar-landsholdet nu tilbage i Danmark. Følg med her","21-årig mands udvinding af højgiftigt stof i Viborg-lejlighed kunne have fået voldsomme følger","Tæsk, trusler på livet og tyverier, lyder et udpluk af i alt 40 lovbrud, som to unge mænd på 17 og 23 år blev dømt for ved Retten i Randers","Daniel Holm kender flere A-landsholdsspillere, men har ikke fået hug for at spille på nødlandsholdet","Magnus Millang er aktuel med ny komediefilm, der har afsæt i en meget personlig historie","Robin Olsen har ikke fået den succes i Roma, som han nok havde håbet på. Han har nemlig allerede lukket fem mål ind, og nu kalder italienske journalister ham en katastrofe","Villa i Humlebæk brændte natten til torsdag helt ned. Nu leder man efter husets beboer"];

function setText() {
    nr = Math.floor(Math.random()*10);
    var text = texts[nr];
    document.getElementById("origin-text").innerHTML = text;
    originText = text;
}
setText();

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    let originTextMatch = originText.substring(0,textEntered.length);

    if (textEntered == originText) {
        clearInterval(interval);
        testWrapper.style.borderColor = "#429890";
    } else {
        if (textEntered == originTextMatch) {
            testWrapper.style.borderColor = "#65CCf3";
        } else {
            testWrapper.style.borderColor = "#E95D0F";
        }
    }

}

// Start the timer:
function start() {
    let textEnterdLength = testArea.value.length;
    if (textEnterdLength === 0 && !timerRunning) {
        timerRunning = true;
        interval = setInterval(runTimer, 10);
    }
    console.log(textEnterdLength);
}

// Reset everything:
function reset() {
    setText();
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timerRunning = false;
    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
}

// Event listeners for keyboard input and the reset
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
