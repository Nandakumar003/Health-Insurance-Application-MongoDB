// LOGIN INFO CAPTURE
document.getElementById("reset-credentials").addEventListener('submit', ResetCredentials);
function ResetCredentials(e) {
    e.preventDefault();
    var queryParams = {
        username: document.getElementById("usernameoremail").value,
        useremail: document.getElementById("usernameoremail").value,
        userid: document.getElementById("usernameoremail").value
    }
    const url = '/getUserData';
    const queryString = new URLSearchParams(queryParams).toString();
    const fullUrl = `http://localhost:3000/users${url}?${queryString}`;
    fetch(fullUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Username/Email doesn't exist`);
            }
            return response.json();
        })
        .then(data => {
            // Handle the response data
            console.log(data);
        })
        .catch(error => {
            // Handle errors
            console.error(error);
            let err = document.getElementById("error-message")
            err.style.color = "red";
            err.innerHTML = `${error.message}`
        });
}