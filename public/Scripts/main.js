let nav = document.getElementById("main-nav");
if (getCurrentUser()) {
  nav.innerHTML = `
  <ul>
  <li><a href="index.html">Home</a></li>
  <li><a id="profileLink" href="userprofile.html">View Profile</a></li>
  <li><a href="notes.html">Take Notes</a></li>
  <li><a href="reset.html">Reset</a></li>
  <li><a id="log-out" href="index.html">Log out</a></li>
  <li><a id="deleteAccountLink" href="" onclick="confirmDelete()">Delete Account</a></li>
  </ul>
  `
  var userData = JSON.parse(localStorage.getItem('user'))
  document.getElementById("welcome-banner").innerHTML = `Hi <span style="color: blue">${userData.LastName}, ${userData.FirstName}</span>. Welcome to Nanda Health Insurance. &#128522;`

} else {
  nav.innerHTML = `
  <ul>
  <li><a href="index.html">Home</a></li>
  <li><a href="login.html">Login</a></li>
  <li><a href="registration.html">Create Account</a></li>
  <li><a href="reset.html">Reset</a></li>
</ul>
  `
  document.getElementById("welcome-banner").innerHTML = "Welcome to Nanda Health Insurance. &#128522"
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
    var userData = JSON.parse(localStorage.getItem('user'))
    alert(`Thanks for visiting the site ${userData.LastName}, ${userData.FirstName}. See you again.`);

    removeUser();
  }
}

function confirmDelete() {
  const result = confirm('Are you sure you want to delete your account?');
  // Check user's choice
  if (result) {
    // User clicked OK
    alert('Account deleted successfully.');
    localStorage.removeItem('tempuser')
    removeUser()

  } else {
    // User clicked Cancel or closed the dialog
    // Do nothing or any other action you want
  }
}
