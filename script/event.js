// function createNewEvent upon clicking create new event
// data to store: event name, date, unavailability, meeting hours
function createNewEvent() {
    //get inputs
    let eventName = document.getElementById("eventname").value;
    let date = document.getElementById("datepicker").value;
    let unavailability = document.getElementById("unavailability").value; // shows as array of hours during day e.g [4, 2, 12, 23]
    let meetingStart = document.getElementById("starttime").value; //functions mentioned in line 110 and 115 yet to do
    let meetingEnd = document.getElementById("endtime").value;

    // mkae sure not empty
    if (eventName == "" || date == "" || unavailability == "" || meetingStart == "" || meetingEnd == "") {
        alert('Please fill in all requirments.');
    }
    else{
        //put meeting times in 24 hour formate (i.e. 00:00)
        meetingStart += ":00";
        meetingEnd += ":00";
        //store in glob var eventList as new event
        eventList.addEvent(eventName, date, unavailability, meetingStart, meetingEnd);
        //update events list
        updateEventsList(eventList);


    }

}