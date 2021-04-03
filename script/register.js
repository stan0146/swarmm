function email(){
          
        
    let email = document.getElementById("email").value;
    console.log(email)
    updateEmail(email);
    }

function password(){
    let password = document.getElementById("psw").value;
    console.log(password)
    updatePassword(password)
}

function link(){
  window.location="profile.html";
}

function click_signup(){
let index="";


let list=getAccountList();
accountList.fromData(list);
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

