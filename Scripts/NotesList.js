// Notes List form
var notesObject = {
    notes: []
};
document.getElementById("notes-list").addEventListener('submit',TakeNotes);
function TakeNotes(e)
{
    e.preventDefault();
    var formData = {
        text:document.getElementById("userNotes").value,
        timestamp: new Date().toLocaleString('en-US', {timeZone: 'America/New_York'})
    };
    notesObject.notes.push(formData)
    console.log(notesObject);
}