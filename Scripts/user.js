/* ***** USER RELATED JS FILE ***** */

// NEW USER PASSWORD VALIDATION CODE
document.getElementById("password").addEventListener("input", function() {
    var pass = document.getElementById("password").value
    var confpass = document.getElementById("confpassword").value;
    var mydiv=document.getElementById("error-message");
    if(confpass=='')
    {}
    else if(confpass!='' && pass!=confpass)
    {
        mydiv.innerHTML="Password Doesn't Match &#x1F611;"
        mydiv.style.color="red";
    }
    else if(confpass!='' && pass==confpass)
    {
        mydiv.innerHTML="Password's Match &#x1F603;"
        mydiv.style.color="green";
    }
});
// NEW USER CONFIRM PASSWORD VALIDATION CODE
document.getElementById("confpassword").addEventListener("input", function() {
    var pass = document.getElementById("password").value
    var confpass = document.getElementById("confpassword").value;
    var mydiv=document.getElementById("error-message");
    if(confpass=='')
    {
        mydiv.innerHTML="";
    }
    else if(pass!=confpass)
    {   
        mydiv.innerHTML="Password Doesn't Match &#x1F611;"
        mydiv.style.color="red";
    }
    else
    {
        mydiv.innerHTML="Password's Match &#x1F603;"
        mydiv.style.color="green";
    }
});


// NEW USER REGISTRATION JS CODE
let newuserreg=document.getElementById("newuser-registration");
newuserreg.addEventListener('submit',NewUserSignUp);
function NewUserSignUp(e)
{
    e.preventDefault();
    var formData = {
        firstName: document.getElementById("firstname").value,
        lastName: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        UserName:document.getElementById("Username").value,
        Password:document.getElementById("password").value
    };
    console.log(formData);
}