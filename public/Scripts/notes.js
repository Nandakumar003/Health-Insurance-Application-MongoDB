// Notes List form
let num = 1;


document.getElementById("userNotes").addEventListener("input", function () {
    document.getElementById("error-message").innerHTML = ''
});


document.getElementById("notes-list").addEventListener('submit', AddNotes);
function AddNotes(e) {
    e.preventDefault();

    let notesdetails = document.getElementById("userNotes").value;
    var userData = JSON.parse(localStorage.getItem('user'))
    const usernotes =
    {
        // UserId: userData[0].UserID,
        UserId: 1,
        NotesId: `Note-${num}`,
        NotesDetail: notesdetails
    }
    num++;
    fetchData('/notes/AddNotes', usernotes, 'POST')
        .then(data => {
            if (!data.message) {
                let success = document.getElementById("error-message")
                success.style.color = "green";
                let p = document.getElementById("userNotes").value
                success.innerHTML = `<span style="color: black;">"${p}"</span> was Added Successfully!! &#128077`
                document.getElementById("userNotes").value = ''
            }
        })
        .catch(err => {
            let error = document.getElementById("error-message")
            error.style.color = "red";
            error.innerHTML = `Error: ${err}.`
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