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



function al (){
let index="";
if (accountList._accountList.length==0)
      {
        index=0;
      }
else {
        index=accountList._accountList[accountList._accountList.length-1]._index+1;
      }


accountList.addAccount(index,getEmail(),getPassword());
updateAccountList(accountList)
updateIndex(index);
}

