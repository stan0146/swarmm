
function fname() {
  let fname = document.getElementById("fname").value;
  updateFname(fname);
}

function lname() {
  let lname = document.getElementById("lname").value;
  updateLname(lname);
}


function email() {
  let email = document.getElementById("email").value;
  updateEmail(email);
}




function link() {
  window.location = "events.html";
}

function click_signup() {
  //check if input is not empty
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let email = document.getElementById("email").value;
  let pwd = document.getElementById("psw").value;
  let repeatpassword = document.getElementById("repeatpwd").value;

  if (fname==""||lname==""||pwd==""||email=="" ||repeatpassword=="")
  {
    alert('Please fill in all requirments')
  }

  else if (repeatpassword!=pwd){

    alert('Passwords do not match')
    
  }

  else{

    //add account to list
    updatePassword(pwd);

    index = "";

    let list = getAccountList();
    console.log(list)
    if (list != null) {
      accountList.fromData(list);
    }
  
  
    if (accountList._accountList.length > 0) {
      index = accountList._accountList[accountList._accountList.length - 1]._index + 1;
      updateLoginIndex(index);
    }
    else {
      index = 0;
      updateLoginIndex(index);
    }
  
  
    accountList.addAccount(index, getEmail(), getPassword(),getFname(),getLname());
    updateAccountList(accountList)
    updateIndex(index);
  
  
    let signRef = document.getElementById("signupbtn")
    signRef.addEventListener("click", link())
  }
  
  

  }
  


