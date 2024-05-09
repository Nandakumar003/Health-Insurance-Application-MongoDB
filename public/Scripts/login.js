// LOGIN INFO CAPTURE
document.getElementById("existing-user").addEventListener('submit', ExistingUserLogin);
function ExistingUserLogin(e) {
    e.preventDefault();
    var formData = {
        Username: document.getElementById("E_Username").value,
        Password: document.getElementById("E_Password").value
    };
    console.log(formData);
    // make a call to the server
    fetchData('/users/login', formData, 'POST')
        .then(data => {
            if (!data.message) {
                setCurrentUser(data)
                window.location.href = "index.html"
            }
        })
        .catch(err => {
            let error = document.getElementById("error-message")
            error.style.color = "red";
            error.innerHTML = `${err.message}`
        })
}
async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
        method: methodType, // *POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if (response.ok) {
        return await response.json(); // parses JSON response into native JavaScript objects
    } else {
        throw await response.json();
    }
}

// configuring local storage
function setCurrentUser(user) {
    localStorage.setItem('user', JSON.stringify(user))
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'))
}

function removeUser() {
    localStorage.removeItem('user')
    window.location.href = 'index.html'
}
