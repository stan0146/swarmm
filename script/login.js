
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => 
{
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    data=getAccountList();
    accountList.fromData(data);

    for (i=0;i<accountList._accountList.length;i++)
    {

        if (username === accountList._accountList[i]._email && password === accountList._accountList[i]._password) 
        {
            alert("You have successfully logged in.");
            window.location.href = "profile.html"
        } 
        else 
        {
            loginErrorMsg.style.opacity = 1;
        }
    }
}
)

