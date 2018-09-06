var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
var boysandgirls = boys.concat(girls);
var firstClick = true;

var listAll = document.getElementById("all");
var listBoys = document.getElementById("boys");
var listGirls = document.getElementById("girls");

for (var i = 0; i < boys.length; i++) {
    listBoys.innerHTML += boys[i] + "<br>";
}

for (var i = 0; i < girls.length; i++) {
    listGirls.innerHTML += girls[i] + "<br>";
}

for (var i = 0; i < boysandgirls.length; i++) {
    listAll.innerHTML += boysandgirls[i] + "<br>";
}

function updateGirls() {
    listGirls.innerHTML = "";

    for (var i = 0; i < girls.length; i++) {
        listGirls.innerHTML += girls[i] + "<br>";
    }
}

function updateBoys() {
    listBoys.innerHTML = "";

    for (var i = 0; i < boys.length; i++) {
        listBoys.innerHTML += boys[i] + "<br>";
    }
}

function updateAll() {
    listAll.innerHTML = "";

    for (var i = 0; i < boysandgirls.length; i++) {
        listAll.innerHTML += boysandgirls[i] + "<br>";
    }

}

document.getElementById("addboy").addEventListener("click", function () {
    boys.push(document.getElementById("newboy").value);
    boysandgirls.push(document.getElementById("newboy").value);

    updateBoys();
    updateAll();
});

document.getElementById("addgirl").addEventListener("click", function () {
    girls.push(document.getElementById("newgirl").value);
    boysandgirls.push(document.getElementById("newgirl").value);

    updateGirls();
    updateAll();
});

document.getElementById("removeboy").addEventListener("click", function () {
    if (document.getElementById("first").checked) {
        boys.shift();
    } else {
        boys.pop();
    }
    updateBoys();
});

document.getElementById("removegirl").addEventListener("click", function () {
    if (document.getElementById("first").checked) {
        girls.shift();
    } else {
        girls.pop();
    }
    updateGirls();
});

document.getElementById("reverse").addEventListener("click", function(){
   boysandgirls.reverse();
   updateAll();
});

document.getElementById("sort").addEventListener("click", function(){
    if(firstClick === true){
    boysandgirls.sort(function (a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a === b)
            return 0;
        return a < b ? -1 : 1;
    });
    } else {
        boysandgirls.reverse();
    }
    firstClick = false;
    updateAll();
});