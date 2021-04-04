const EVENT_INDEX = "eventindex";
const EVENT_LIST = "eventlist";

class Event
{
    constructor(eventName, date, unavailability, startTime, endTime){
        this._eventName = eventName;
        this._date = date;
        this._unavailability = unavailability;
        this._startTime = startTime;
        this._endTime = endTime
    }
    getEventName() {return this._eventName;}
    getDate() {return this._date;}
    getUnavailability() {return this._unavailability;}
    getStartTime() {return this._startTime;}
    getEndTime() {return this._endTime;}

    //mutators
    set eventName(newName){this._eventName = newName;}
    set date(newdate){this._date = newdate;}
    set unavailability(newunav){this._unavailability = newunav;}
    set startTime(newTime){this._startTime = newTime;}
    set endTime(newTime){this._endTime = newTime;}

    fromData(data){
        this._eventName = data._eventName;
        this._date = data._date;
        this._unavailability = data._unavailability;
        this._startTime = data._startTime;
        this._endTime = data._endTime
    }

}

class EventsList
{
    constructor(){
        this._eventsList = [];
    }
    
    getEventsList(){return this._eventsList;}
    getEvent(index){return this._eventsList[index];}

    addEvent(eventName, date, unavailability, startTime, endTime)
    {
        let event = new Event(eventName, date, unavailability, startTime, endTime);
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

// global variable for user's event list
let eventList = new EventsList()

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

