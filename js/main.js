var Fname = document.getElementById("fname");
var Email = document.getElementById("email");
var Msg = document.getElementById("msg");
var btn = document.getElementById("submit-button");
var fm = document.querySelector("form");

var re = /[A-Z0-9._%+\-]+@[A-Z0-9.\-]+.[A-Z]{2,4}/igm;

function canSubmit(e) {
    e.preventDefault();
    
    var data = {
    };
    var error = [];
   
    //checking if Fname is empty
    if (Fname.value !== "") { /*Fname.value !== ""*/
        data.name = Fname.value;
    } else {
        error.push("no fname");
    }
    

    //checking if email is empty
    if (Email.value) {
        /*run function to check email*/
        if (re.test(Email.value)) {
            data.email = Email.value;
        } else {
            error.push("Invalid email");
        }
        
    } else {
       
        error.push("no email");
    }

    //checking msg is empty
    if (Msg.value !== "") {
        data.msg = Msg.value;
    } else {
        error.push("no msg");
    }

    if(error.length > 0){
       console.log(error);
    } else {
        console.log(data);
        fm.reset();
    }
    
    
    
}

btn.addEventListener("click", canSubmit);

