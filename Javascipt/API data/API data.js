

function clear (){
    clear()
}

function getUsers() {
    let b = document.getElementById("button")

    b.remove()

    fetch("https://jsonplaceholder.typicode.com/users")

    .then((response) => response.json())

    .then((d) => {
        data = d;
        displayUsers(data);
    })

    .catch((e) => {
        console.log("Error:",e);
    });
}

function displayUsers(users){
    let tbody = document.getElementById("tbody")
    tbody.innerHTML=""

    users.forEach(user => {
        let {name, username, email, address } = user

        let { lat, lng } = address.geo

        let tr = document.createElement("tr")

        let tdName = document.createElement("td")

        let tdUsername = document.createElement("td")

        let tdEmail = document.createElement("td")

        let tdLat = document.createElement("td")

        let tdLng = document.createElement("td")

        tdName.textContent = name
    })
}