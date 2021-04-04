
const loginForm = document.getElementById("login-form");
const loginErrorMsg = document.getElementById("login-error-msg");

function login_to(){

    let email = loginForm.email.value;
    let password = loginForm.password.value;
    let errormsg=document.getElementById("error_msg");


    data=getAccountList();
    accountList.fromData(data);

    let success=false;

    for (i=0;i<accountList._accountList.length;i++)
    {
        
        if (email === accountList._accountList[i]._email && password === accountList._accountList[i]._password) 
        {
            success=true; 
        } 

        else 
        {
            success=false;
   
        }
    }

    if (success==true){
        alert('Log in successful')

        window.location.href = "profile.html";
    }

    else{
        alert('Incorrect/invalid email or password. Please try again.');
    }
}



