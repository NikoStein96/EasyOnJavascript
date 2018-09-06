fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(function (response) {
            if (response.status !== 200)
            {
                console.log("Problem occured... Status Code: " + response.status);
                return;
            }
            response.json().then(function (data) {
                console.log(data);
                console.log(data.data.avatar);
                document.getElementById("imgJson").setAttribute("src", data.data.avatar);
            });
        })
        .catch(function (error) {
            console.log("Error occured...", error);
        });