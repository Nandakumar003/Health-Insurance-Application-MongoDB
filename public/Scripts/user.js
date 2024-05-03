/* ***** USER RELATED JS FILE ***** */

// NEW USER PASSWORD VALIDATION CODE
document.getElementById("password").addEventListener("input", function() {
    var pass = document.getElementById("password").value
    var confpass = document.getElementById("confpassword").value;
    var mydiv=document.getElementById("error-message");
    if(validPassword(pass))
    {
        if(confpass=='')
        {
            mydiv.innerHTML=""
            ButtonStatus(false)
        }
        else if(confpass!='' && pass!=confpass)
        {
            mydiv.innerHTML="Password Doesn't Match &#x1F611;"
            mydiv.style.color="red";
            ButtonStatus(false)
        }
        else if(confpass!='' && pass==confpass)
        {
            mydiv.innerHTML="Password's Match &#x1F603;"
            mydiv.style.color="green";
            ButtonStatus(true)
        }
    }
    else
    {
        mydiv.innerHTML="Password must have at least 1 uppercase letter, 1 symbol, 2 numbers," 
        + "and have a length of at least 8 characters."
        mydiv.style.color="red";
        ButtonStatus(false)

    }
});
document.getElementById("submit").disabled = true;

// NEW USER CONFIRM PASSWORD VALIDATION CODE
document.getElementById("confpassword").addEventListener("input", function() {
    var pass = document.getElementById("password").value
    var confpass = document.getElementById("confpassword").value;
    var mydiv=document.getElementById("error-message");
    if(validPassword(pass))
    {
        if(confpass=='')
        {
            mydiv.innerHTML="";
            ButtonStatus(false)
        }
        else if(pass!=confpass)
        {   
            mydiv.innerHTML="Password Doesn't Match &#x1F611;"
            mydiv.style.color="red";
            ButtonStatus(false)
        }
        else
        {
            mydiv.innerHTML="Password's Match &#x1F603;"
            mydiv.style.color="green";
            ButtonStatus(true)
        }
    }
    else
    {
        ButtonStatus(false)
    }
});
function ButtonStatus(value)
{
    if(value)
    {
        document.getElementById("submit").disabled = false;
        document.getElementById("submit").style.opacity=1.0;
        document.getElementById("submit").style.cursor = "pointer";
    }
    else
    {
        document.getElementById("submit").disabled = true;
        document.getElementById("submit").style.opacity=0.6;
        document.getElementById("submit").style.cursor = "default";
    }
}

// NEW USER REGISTRATION JS CODE
document.getElementById("newuser-registration").addEventListener('submit',NewUserSignUp);
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

function validPassword(pswd) 
{
    if(pswd.length >= 8) {
      let upper = 0;
      let numbers = 0;
      let symbols = 0;
      
      for(let i = 0; i<pswd.length; i++) {
        if(this.isDigit(pswd[i])) {
          numbers++;
        } else if(!this.isLetterOrDigit(pswd[i])) {
          symbols++;
        } else if(this.isUpperCase(pswd[i])) {
          upper++;
        }
      }

      if(upper >= 1 && numbers >= 2 && symbols >= 1) {
        return true;
      }
    }
    return false;
  }
  //returns if character is a letter
  function isUpperCase(char) {
    return (/[A-Z]/).test(char)
  }
  //returns if character is a digit
  function isDigit(char) {
    return (/[1-9]/).test(char)
  }
  //returns if character is a letter or digit
  function isLetterOrDigit(char) {
    return ((/[a-zA-Z]/).test(char) || (/[1-9]/).test(char))
  }