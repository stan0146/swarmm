const ACCOUNT_DATA_KEY="accountData";
const EMAIL_KEY=  "email";
const PASSWORD_KEY="password";
const INDEX_KEY="index";
const ACCOUNT_LIST_KEY="accountList";
const FNAME_KEY="fname";
const LNAME_KEY="lname";
const LOGIN_INDEX_KEY="loginIndex";
const EVENT_INDEX = "eventindex";
const EVENT_LIST = "eventlist";
const PARTICIPANTS_KEY = "participants";
const PARTICIPANTS_COUNT = "numofparticipants";

//ACCOUNTS CLASSES
class Account
{
    constructor(index, email, password,fname,lname){
        this._index=index;
        this._email=email;
        this._password=password;
        this._fname=fname;
        this._lname=lname;
        this._eventsList = [];
    }
    getIndex() {return this._index}
    getEmail(){return this._email;}
    getPassword(){return this._password}
    getFname() {return this._fname}
    getLname(){return this._lname;}

    //method: get user's events array
    userEvents()
    {
      return this._eventsList;
    }

    removeEvent(index)
    {
      this._eventsList.splice(index,1);
    }

    fromData(data){
        this._index=data._index
        this._email=data._email
        this._password=data._password
        this._fname=data._fname;
        this._lname=data._lname;
        this._eventsList = data._eventsList;
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
    
    addAccount(index, email,password,fname,lname)
    {
        let account= new Account(index,email,password,fname,lname);
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

//EVENTS CLASSES
class Event
{
    constructor(eventName, date, unavailability, startTime, participants){
        this._eventName = eventName;
        this._date = date;
        this._unavailability = unavailability;
        this._startTime = startTime;
        this._participants = participants;
    }
    getEventName() {return this._eventName;}
    getDate() {return this._date;}
    getUnavailability() {return this._unavailability;}
    getStartTime() {return this._startTime;}
    getparticipants() {return this._participants;}

    //mutators
    set eventName(newName){this._eventName = newName;}
    set date(newdate){this._date = newdate;}
    set unavailability(newunav){this._unavailability = newunav;}
    set startTime(newTime){this._startTime = newTime;}
    set participants(newparticipants){this._participants = newparticipants;}

    fromData(data){
        this._eventName = data._eventName;
        this._date = data._date;
        this._unavailability = data._unavailability;
        this._startTime = data._startTime;
        this._participants = data._participants;
    }

}

class EventsList
{
    constructor(){
        this._eventsList = [];
    }
    
    getEventsList(){return this._eventsList;}
    getEvent(index){return this._eventsList[index];}

    addEvent(eventName, date, unavailability, startTime, participants)
    {
        let event = new Event(eventName, date, unavailability, startTime, participants);
        this._eventsList.push(event);
    }
    
    removeAccount(index)
    {
        this._eventsList.splice(index,1);
    }
  

    fromData(data)
    {
        let dataArray=data._eventsList;
        this._eventsList=[];
        for (let i=0; i<dataArray.length;i++)
        {
          let event = new Event();
          event.fromData(dataArray[i]);
          this._eventsList.push(event);
        }
    }

}

//GLOBAL VARS
let accountList= new AccountList;
let eventList = new EventsList;
    
//FUNCTIONS RELATED TO ACCOUNTS
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

function updateFname(fname)
{
  if (typeof(Storage) !== "undefined")
  {
    localStorage.setItem(`${FNAME_KEY}`,JSON.stringify(fname));
  }
  else
  {
    console.log("localStorage is not supported by current browser.");
  }
}

function updateLname(lname)
{
  if (typeof(Storage) !== "undefined")
  {
    localStorage.setItem(`${LNAME_KEY}`,JSON.stringify(lname));
  }
  else
  {
    console.log("localStorage is not supported by current browser.");
  }
}

function updateLoginIndex(index)
{
  if (typeof(Storage) !== "undefined")
  {
    localStorage.setItem(`${LOGIN_INDEX_KEY}`,JSON.stringify(index));
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

function getFname()
{
  let data = JSON.parse(localStorage.getItem(`${FNAME_KEY}`));
  return data;
}

function getLname()
{
  let data = JSON.parse(localStorage.getItem(`${LNAME_KEY}`));
  return data;
}

function getLoginIndex()
{
  let data = JSON.parse(localStorage.getItem(`${LOGIN_INDEX_KEY}`));
  return data;
}

// FUNCTIONS RELATED TO EVENTS
function getEventsList()
{
  let data = JSON.parse(localStorage.getItem(`${EVENT_INDEX}`));
  return data;
}

function updateEventIndex(index)
{
  if (typeof(Storage) !== "undefined")
  {
    localStorage.setItem(`${EVENT_INDEX}`,JSON.stringify(index));
  }
  else
  {
    console.log("localStorage is not supported by current browser.");
  }
}
function updateEventsList(eventsList)
{
    if (typeof(Storage) !== "undefined")
  {
    localStorage.setItem(`${EVENT_LIST}`,JSON.stringify(eventsList));
  }
  else
  {
    console.log("localStorage is not supported by current browser.");
  }
}

//LOCAL STOR FUNCTIONS
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


