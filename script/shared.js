const ACCOUNT_DATA_KEY="accountData";
const EMAIL_KEY=  "email";
const PASSWORD_KEY="password";
const INDEX_KEY="index";
const ACCOUNT_LIST_KEY="accountList"

class Account
{
    constructor(index, email, password){
        this._index=index;
        this._email=email;
        this._password=password;
    }
    getIndex() {return this._index}
    getEmail(){return this._email;}
    getPassword(){return this._password}

    fromData(data){
        this._index=data._index
        this._email=data._email
        this._password=data._password
    }
}

class AccountList
{
    constructor(){
        this._accountList=[];
    }


    getAccountList(){return this._accountList;}
    getAccount(index){return this._accountList[index];}
    getlength() {return this._accountList.length}
    
    addAccount(index, email,password)
    {
        let account= new Account(index,email,password);
        this._accountList.push(account);
    }
    
    removeAccount(index)
    {
        this._accountList.splice(index,1);
    }
  

    fromData(data)
    {
        let dataArray=data._accountList;
        this._accountList=[];
        for (let i=0; i<dataArray.length;i++)
        {
          let account= new Account();
          account.fromData(dataArray[i]);
          this._accountList.push(account);
        }
    }

}

let accountList= new AccountList;
    
    

function updateAccountList(accountList)
{
    if (typeof(Storage) !== "undefined")
  {
    localStorage.setItem(`${ACCOUNT_DATA_KEY}`,JSON.stringify(accountList));
  }
  else
  {
    console.log("localStorage is not supported by current browser.");
  }
}
    
function getAccountList()
{
  let data = JSON.parse(localStorage.getItem(`${ACCOUNT_DATA_KEY}`));
  return data;
}

function updateIndex(index)
{
  if (typeof(Storage) !== "undefined")
  {
    localStorage.setItem(`${INDEX_KEY}`,JSON.stringify(index));
  }
  else
  {
    console.log("localStorage is not supported by current browser.");
  }
}

function updateEmail(email)
{
  if (typeof(Storage) !== "undefined")
  {
    localStorage.setItem(`${EMAIL_KEY}`,JSON.stringify(email));
  }
  else
  {
    console.log("localStorage is not supported by current browser.");
  }
}

function updatePassword(password)
{
  if (typeof(Storage) !== "undefined")
  {
    localStorage.setItem(`${PASSWORD_KEY}`,JSON.stringify(password));
  }
  else
  {
    console.log("localStorage is not supported by current browser.");
  }
}

function getIndex()
{
  let data = JSON.parse(localStorage.getItem(`${INDEX_KEY}`));
  return data;
}
function getEmail()
{
  let data = JSON.parse(localStorage.getItem(`${EMAIL_KEY}`));
  return data;
}
function getPassword()
{
  let data = JSON.parse(localStorage.getItem(`${PASSWORD_KEY}`));
  return data;
}

function checkIfDataExistsLocalStorage()
{
  let data =getAccountList();
  if(data)
  if (data !== "undefined" && data !==null && data !=="")
  {
    if( data._accountList.length>0)
    {
      accountList.fromData(data);
    }
  }
  else
  {
    return false;
  }
}


