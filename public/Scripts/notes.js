// Notes List form
let num = 1;
var notesObject = {
    notes: []
};
document.getElementById("notes-list").addEventListener('submit', AddNotes);
function AddNotes(e) {
    e.preventDefault();
    var formData = {
        Notesid: `Note-${num}`,
        text: document.getElementById("userNotes").value,
        timestamp: new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
    };
    console.log(formData)
    num++;
}

//     // make a call to the server
//     fetchData('/users/register', formdata, 'POST')
//         .then(data => {
//             if (!data.message) {
//                 setCurrentUser(data)
//                 window.location.href = "index.html"
//             }
//         })
//         .catch(err => {
//             let error = document.querySelector(".error")
//             error.innerHTML = `${err.message}`
//         })
//     document.getElementById("welcome").innerText = `Welcome ${username}!`
// }



// async function fetchData(route = '', data = {}, methodType) {
//     const response = await fetch(`http://localhost:3000${route}`, {
//         method: methodType, // *POST, PUT, DELETE, etc.
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     if (response.ok) {
//         return await response.json(); // parses JSON response into native JavaScript objects
//     } else {
//         throw await response.json();
//     }
// }