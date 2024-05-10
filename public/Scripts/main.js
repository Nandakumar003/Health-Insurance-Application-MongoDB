let nav = document.getElementById("main-nav");
if (getCurrentUser()) {
  nav.innerHTML = `
  <ul>
  <li><a href="index.html">Home</a></li>
  <li><a id="profileLink" href="userprofile.html">View Profile</a></li>
  <li><a href="notes.html">Take Notes</a></li>
  <li><a href="reset.html">Reset</a></li>
  <li><a id="log-out" href="index.html">Log out</a></li>
  
</ul>
  `
} else {
  nav.innerHTML = `
  <ul>
  <li><a href="index.html">Home</a></li>
  <li><a href="login.html">Login</a></li>
  <li><a href="registration.html">Create Account</a></li>
  <li><a href="reset.html">Reset</a></li>
</ul>
  `
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

let p1 = document.getElementById("log-out");
if (p1) {
  p1.addEventListener('click', logout)
  function logout(e) {
    e.preventDefault();
    removeUser();
  }
}