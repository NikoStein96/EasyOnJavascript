var s = "";

document.getElementById("getuser").addEventListener("click", function () {
    var user = document.getElementById("user").value;
    fetch("https://jsonplaceholder.typicode.com/users/" + user)
            .then(function (response) {
                if (response.status !== 200)
                {
                    console.log("Problem occured... Status Code: " + response.status);
                    return;
                }
                response.json().then(function (data) {
                    var test = document.getElementById("data").innerHTML;
                    var objArray = [data.name, data.phone, data.address.city, data.address.street, data.address.suite, data.address.zipcode];
                    console.log(objArray);
                    for (var i = 0; i < objArray.length; i++) {
                        document.getElementById("data").innerHTML += "<p>" + objArray[i] + "</p>";
                    }
                });
            })
            .catch(function (error) {
                console.log("Error occured...", error);
            });
})

document.getElementById("getall").addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users/")
            .then(function (response) {
                if (response.status !== 200)
                {
                    console.log("Problem occured... Status Code: " + response.status);
                    return;
                }
                response.json().then(function (data) {
                    s = "<table><tr><th>Name</th><th>Phone</th></tr>";
                    for (var i = 0; i < data.length; i++) {
                        s += "<tr>";
                        s += "<td>" + data[i].name + "</td>";
                        s += "<td>" + data[i].phone + "</td>";
                        s += "</tr>";
                    }

                    setTimeout(() => {
                        s += "</table>";
                         document.getElementById(data).innerHTML = s;
                    }, 100);

                });
            })
            .catch(function (error) {
                console.log("Error occured...", error);
            });
})
