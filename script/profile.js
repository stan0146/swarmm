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
details.innerHTML=`<p id="my-details" style="font-family: 'Inter', sans-serif;font-size: 23px;
line-height: 27.84px;color: #515363">My Details</p> <p class="det">Name: ${fname + ' ' + lname} </p> <p class="det">Email: ${email}</p>`

let name_title=document.getElementById("name");
name_title.innerHTML=`<p style="position:absolute; left: 10cm; top:8cm;font-family: 'Poppins', sans-serif;font-style: normal;font-weight: 500;font-size: 34px;color:#515363">${fname + ' '+ lname}</p>`