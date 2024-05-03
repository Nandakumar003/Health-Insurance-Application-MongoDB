// Notes List form
let num=1;
var notesObject = {
    notes: []
};
document.getElementById("notes-list").addEventListener('submit',TakeNotes);
function TakeNotes(e)
{
    e.preventDefault();
    var formData = {
        Notesid:`Note-${num}`,
        text:document.getElementById("userNotes").value,
        timestamp: new Date().toLocaleString('en-US', {timeZone: 'America/New_York'})
    };
    num++;
    notesObject.notes.push(formData)
    console.log(notesObject);
}