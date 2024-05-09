// LOGIN INFO CAPTURE
document.getElementById("password-form").style.display = 'none'
document.getElementById("reset-credentials").addEventListener('submit', ResetCredentials);
function ResetCredentials(e) {
    e.preventDefault();
    var queryParams = {
        username: document.getElementById("usernameoremail").value,
        useremail: document.getElementById("usernameoremail").value,
        userid: document.getElementById("usernameoremail").value
    }
    let err = document.getElementById("error-message")
    const url = '/getUserData';
    const queryString = new URLSearchParams(queryParams).toString();
    const fullUrl = `http://localhost:3000/users${url}?${queryString}`;

    fetch(fullUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Username/Email doesn't exist! &#128577`);
            }
            return response.json();
        })
        .then(data => {
            // Handle the response data
            setCurrentUser(data)
            console.log(data);
            document.getElementById("usernameoremail").disabled = true;
            document.getElementById("submit").disabled = true;
            document.getElementById("submit").style.opacity = 0.6;
            document.getElementById("submit").style.cursor = "default";
            err.innerHTML = `Hi, ${data[0].LastName}, ${data[0].FirstName}. Please proceed in reseting your password`
            err.style.color = "green"
            document.getElementById("password-form").style.display = 'block'
            let prevpassword = data[0].Password;
        })
        .catch(error => {
            // Handle errors
            err.style.color = "red";
            err.innerHTML = `${error.message}`
        });
}
if (true) {
    document.getElementById("password").addEventListener("input", function () {
        var pass = document.getElementById("password").value
        var confpass = document.getElementById("confpassword").value;
        var mydiv = document.getElementById("error-message1");
        if (validPassword(pass)) {
            if (confpass == '') {
                mydiv.innerHTML = ""
                ButtonStatus(false)
            }
            else if (confpass != '' && pass != confpass) {
                mydiv.innerHTML = "Password Doesn't Match &#x1F611;"
                mydiv.style.color = "red";
                ButtonStatus(false)
            }
            else if (confpass != '' && pass == confpass) {
                mydiv.innerHTML = "Password's Match &#x1F603;"
                mydiv.style.color = "green";
                ButtonStatus(true)
            }
        }
        else {
            mydiv.innerHTML = "Password must have at least 1 uppercase letter, 1 symbol, 2 numbers,"
                + "and have a length of at least 8 characters."
            mydiv.style.color = "red";
            ButtonStatus(false)
        }
    });
    document.getElementById("password-submit").disabled = true;

    // NEW USER CONFIRM PASSWORD VALIDATION CODE
    document.getElementById("confpassword").addEventListener("input", function () {
        var pass = document.getElementById("password").value
        var confpass = document.getElementById("confpassword").value;
        var mydiv = document.getElementById("error-message1");
        if (validPassword(pass)) {
            if (confpass == '') {
                mydiv.innerHTML = "";
                ButtonStatus(false)
            }
            else if (pass != confpass) {
                mydiv.innerHTML = "Password Doesn't Match &#x1F611;"
                mydiv.style.color = "red";
                ButtonStatus(false)
            }
            else {
                var userData = JSON.parse(localStorage.getItem('user'))
                if (pass === userData[0].Password) {
                    mydiv.innerHTML = "New password cannot be the same as your old password! &#129488"
                    mydiv.style.color = "red";
                    ButtonStatus(false)
                }
                else {
                    mydiv.innerHTML = "Password's Match &#x1F603;"
                    mydiv.style.color = "green";
                    ButtonStatus(true)
                }
            }
        }
        else {
            ButtonStatus(false)
        }
    });
    function ButtonStatus(value) {
        if (value) {
            document.getElementById("password-submit").disabled = false;
            document.getElementById("password-submit").style.opacity = 1.0;
            document.getElementById("password-submit").style.cursor = "pointer";
        }
        else {
            document.getElementById("password-submit").disabled = true;
            document.getElementById("password-submit").style.opacity = 0.6;
            document.getElementById("password-submit").style.cursor = "default";
        }
    }
    function validPassword(pswd) {
        if (pswd.length >= 8) {
            let upper = 0;
            let numbers = 0;
            let symbols = 0;

            for (let i = 0; i < pswd.length; i++) {
                if (this.isDigit(pswd[i])) {
                    numbers++;
                } else if (!this.isLetterOrDigit(pswd[i])) {
                    symbols++;
                } else if (this.isUpperCase(pswd[i])) {
                    upper++;
                }
            }

            if (upper >= 1 && numbers >= 2 && symbols >= 1) {
                return true;
            }
        }
        return false;
    }
    //returns if character is a letter
    function isUpperCase(char) {
        return (/[A-Z]/).test(char)
    }
    //returns if character is a digit
    function isDigit(char) {
        return (/[1-9]/).test(char)
    }
    //returns if character is a letter or digit
    function isLetterOrDigit(char) {
        return ((/[a-zA-Z]/).test(char) || (/[1-9]/).test(char))
    }
}

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


// CODE to Update User Password to Backend Database Table

