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
    fetchData('/notes/AddNotes', usernotes, 'POST')
        .then(data => {
            if (!data.message) {
                window.location.href = "index.html"
            }
        })
        .catch(err => {
            res.status(401).send({ message: err.message })
        })
}