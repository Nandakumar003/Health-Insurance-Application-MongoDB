// LOGIN INFO CAPTURE
document.getElementById("reset-credentials").addEventListener('submit', ResetCredentials);
function ResetCredentials(e) {
    e.preventDefault();
    var formData = {
        Username: document.getElementById("usernameoremail").value

    };
    console.log(formData);
}
