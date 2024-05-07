// Notes List form
let num = 1;
document.getElementById("notes-list").addEventListener('submit', AddNotes);
function AddNotes(e) {
    e.preventDefault();

    let notesdetails = document.getElementById("userNotes").value;
    const usernotes =
    {
        UserId: '1',
        NotesId: `Note-${num}`,
        NotesDetail: notesdetails
    }
    num++;
    fetch('http://localhost:3000/notes/AddNotes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(usernotes),

    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Handle successful response from backend
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle errors
        });
}