let dummy=[{
    index: 0, 
    email: "hi@gmail.com", 
    password: "ih",
    fname: "john",
    lname:"last"}
    ]

let accounts=getAccountList();
    accountList.fromData(accounts);
let index=getLoginIndex();

   let email= accountList._accountList[index]._email;
   let password= accountList._accountList[index]._password;
   let fname= accountList._accountList[index]._fname;
   let lname= accountList._accountList[index]._lname;

    
let details=document.getElementById("my-detail");
details.innerHTML=`<h4>My Details</h4> <p>Name: ${fname + ' ' + lname} </p> <p>Email: ${email}</p>`
