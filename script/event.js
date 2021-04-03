const EVENT_INDEX = "eventkey";

class Event
{
    constructor(index, eventName, timezone, date, unavailability, startTime, endTime){
        this._index = index;
        this._eventName = eventName;
        this._timezone = timezone;
        this._date = date;
        this._unavailability = unavailability;
        this._startTime = startTime;
        this._endTime = endTime
    }
    getIndex() {return this._index;}
    getEventName() {return this._eventName;}
    getTimeZone() {return this._timezone;}
    getDate() {return this._date;}
    getUnavailability() {return this._unavailability;}
    getStartTime() {return this._startTime;}
    getEndTime() {return this._endTime;}

    fromData(data){
        this._eventName = data._eventName;
        this._timezone = data._timezone;
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

    addEvent(index, eventName, timezone, date, unavailability, startTime, endTime)
    {
        let event = new Event(index, eventName, timezone, date, unavailability, startTime, endTime);
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

let eventList = new EventsList()

function getEvent()
{
  let data = JSON.parse(localStorage.getItem(`${EVENT_INDEX}`));
  return data;
}