/* ***** USER RELATED JS FILE ***** */

// NEW USER PASSWORD VALIDATION CODE
//import { fetchData } from "./main.js";
document.getElementById("password").addEventListener("input", function () {
  var pass = document.getElementById("password").value
  var confpass = document.getElementById("confpassword").value;
  var mydiv = document.getElementById("error-message");
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
document.getElementById("submit").disabled = true;

// NEW USER CONFIRM PASSWORD VALIDATION CODE
document.getElementById("confpassword").addEventListener("input", function () {
  var pass = document.getElementById("password").value
  var confpass = document.getElementById("confpassword").value;
  var mydiv = document.getElementById("error-message");
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
      mydiv.innerHTML = "Password's Match &#x1F603;"
      mydiv.style.color = "green";
      ButtonStatus(true)
    }
  }
  else {
    ButtonStatus(false)
  }
});
function ButtonStatus(value) {
  if (value) {
    document.getElementById("submit").disabled = false;
    document.getElementById("submit").style.opacity = 1.0;
    document.getElementById("submit").style.cursor = "pointer";
  }
  else {
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.opacity = 0.6;
    document.getElementById("submit").style.cursor = "default";
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



// NEW USER REGISTRATION JS CODE
document.getElementById("newuser-registration").addEventListener('submit', NewUserSignUp);
function NewUserSignUp(e) {
  e.preventDefault();
  var formData = {
    firstName: document.getElementById("firstname").value,
    lastName: document.getElementById("lastname").value,
    email: document.getElementById("email").value,
    UserName: document.getElementById("Username").value,
    Password: document.getElementById("password").value
  };
  console.log(formData);
  // make a call to the server
  fetchData('/users/register', formdata, 'POST')
    .then(data => {
      if (!data.message) {
        setCurrentUser(data)
        window.location.href = "index.html"
      }
    })
    .catch(err => {
      let error = document.querySelector(".error")
      error.innerHTML = `${err.message}`
    })
  document.getElementById("welcome").innerText = `Welcome ${username}!`
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

//module.exports = { getCurrentUser, setCurrentUser, removeUser }