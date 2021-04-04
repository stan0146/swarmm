let dummy=[{
    index: 0, 
    email: "hi@gmail.com", 
    password: "ih",
    fname: "john",
    lname:"last"}
    ]
    let index= dummy[0].index;
  
    let email=dummy[index].email;
    let password=dummy[index].password;
    let fname=dummy[index].fname;
    let lname=dummy[index].lname;
  
let details=document.getElementById("my-detail");
details.innerHTML=`<h4>My Details</h4> <p>Name: ${fname + ' ' + lname} </p> <p>Email: ${email}</p>`