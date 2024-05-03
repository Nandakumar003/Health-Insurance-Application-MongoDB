// LOGIN INFO CAPTURE
document.getElementById("existing-user").addEventListener('submit',ExistingUserLogin);
function ExistingUserLogin(e)
{
    e.preventDefault();
    var formData = {
        User:document.getElementById("E_Username").value,
        Password:document.getElementById("E_Password").value
    };
    console.log(formData);
}