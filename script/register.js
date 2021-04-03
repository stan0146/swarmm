function email(){
          
        
    let email = document.getElementById("email").value;
    console.log(email)
    updateEmail(email);
    }

function password(){
    let pwd = document.getElementById("psw").value;
    console.log(pwd);
    updatePassword(pwd);
}

function repeatpwd(){
  let repeatpassword= document.getElementById("repeatpwd").value;
  let pwd=getPassword();
  if (pwd==repeatpassword) //fix bug
  {
    updatePassword(repeatpassword)
  }

  else {
    alert('password does not match');
  }
}


function link(){
  window.location="profile.html";
}

function click_signup(){
index="";

let list=getAccountList();
console.log(list)
if (list!=null){
  accountList.fromData(list);
}


if (accountList._accountList.length>0)
      {
        index=accountList._accountList[accountList._accountList.length-1]._index+1;
      }
else {
        index=0;
      }


accountList.addAccount(index,getEmail(),getPassword());
updateAccountList(accountList)
updateIndex(index);


let signRef= document.getElementById("signupbtn")
signRef.addEventListener("click",link())
}

