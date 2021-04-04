// function createNewEvent upon clicking create new event
// data to store: event name, date, unavailability, meeting hours
function createNewEvent() {
    //get inputs
    let eventName = document.getElementById("eventname").value;
    let date = document.getElementById("datepicker").value;
    let unavailability = document.getElementById("unavailability").value; // shows as array of hours during day e.g [4, 2, 12, 23]
    let meetingStart = document.getElementById("starttime").value;
    let participants = JSON.parse(localStorage.getItem(PARTICIPANTS_KEY))// participants from local storage

    // mkae sure not empty
    if (eventName == "" || date == "" || unavailability == "" || meetingStart == "" || meetingEnd == "") {
        alert('Please fill in all requirments.');
    }
    else {
        //put meeting times in 24 hour formate (i.e. 00:00)
        meetingStart += ":00";
        meetingEnd += ":00";
        //store in glob var eventList as new event
        eventList.addEvent(eventName, date, unavailability, meetingStart, meetingEnd, participants);
        //update events list
        updateEventsList(eventList);
        console.log("success");
        //change window to all event (?) page when done
        window.location = "events.html";
    }

}
let participantsList = [];
let participantCount = 0; //excludes current user
// upon clicking add participant button - adds a working bee :)
function addParticipant() {
    //iterate num of participants in local storage
    participantCount += 1;
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem(`${PARTICIPANTS_COUNT}`, JSON.stringify(participantCount));
    }
    else {
        console.log("localStorage is not supported by current browser.");
    }

    //prompt for participant's email
    let emailRef = prompt("Please enter email of participant: ");
    let nameRef = prompt("Please enter name of participant: ");
    let participant = {name: nameRef, email: emailRef};

    //push participants email to participantsList
    participantsList.push(participant);

    //store/update participants list in local storage
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem(`${PARTICIPANTS_KEY}`, JSON.stringify(participantsList));
    }
    else {
        console.log("localStorage is not supported by current browser.");
    }

    //add another bee icon
    //list of bees
    let bees = ["BeeAvatar-Blue.png", "BeeAvatar-Green.png", "BeeAvatar-Pink.png"];
    // get current num of participants
    let numParticipants = JSON.parse(localStorage.getItem(PARTICIPANTS_COUNT));
    if (numParticipants < bees.length) {
        let beesDisplayRef = document.getElementById("bees");
        beesDisplayRef.innerHTML += `<img src="images/${bees[numParticipants - 1]}" alt="${name}" style="width: 100px; height: 100px;">`;
    }
    else
    {
        alert("Maximum number of participants has been reached!");
    }

    //add table for new participant
    let tableRef = document.getElementById("tableSelect");
    tableRef.innerHTML += `<br><br>
    <table class="fixed_date">
              <tr style="height: 300px;">
                <td class="time" id="cell00${numParticipants}" onclick="fill()">12:00 am </td>
                <td class="time" id="cell01${numParticipants}" onclick="fill()">1:00 am</td>
                <td class="time" id="cell02${numParticipants}" onclick="fill()">2:00 am</td>
                <td class="time" id="cell03${numParticipants}" onclick="fill()">3:00 am</td>
                <td class="time" id="cell04${numParticipants}" onclick="fill()">4:00 am</td>
                <td class="time" id="cell05${numParticipants}" onclick="fill()">5:00 am</td>
                <td class="time" id="cell06${numParticipants}" onclick="fill()">6:00 am</td>
                <td class="time" id="cell07${numParticipants}" onclick="fill()">7:00 am</td>
                <td class="time" id="cell08${numParticipants}" onclick="fill()">8:00 am</td>
                <td class="time" id="cell09${numParticipants}" onclick="fill()">9:00 am</td>
                <td class="time" id="cell10${numParticipants}" onclick="fill()">10:00 am</td>
                <td class="time" id="cell11${numParticipants}" onclick="fill()">11:00 am</td>
                <td class="time" id="cell12${numParticipants}" onclick="fill()">12:00 am</td>
                <td class="time" id="cell13${numParticipants}" onclick="fill()">1:00 pm</td>
                <td class="time" id="cell14${numParticipants}" onclick="fill()">2:00 pm</td>
                <td class="time" id="cell15${numParticipants}" onclick="fill()">3:00 pm</td>
                <td class="time" id="cell16${numParticipants}" onclick="fill()">4:00 pm</td>
                <td class="time" id="cell17${numParticipants}" onclick="fill()">5:00 pm</td>
                <td class="time" id="cell18${numParticipants}" onclick="fill()">6:00 pm</td>
                <td class="time" id="cell19${numParticipants}" onclick="fill()">7:00 pm</td>
                <td class="time" id="cell20${numParticipants}" onclick="fill()">8:00 pm</td>
                <td class="time" id="cell21${numParticipants}" onclick="fill()">9:00 pm</td>
                <td class="time" id="cell22${numParticipants}" onclick="fill()">10:00 pm</td>
                <td class="time" id="cell23${numParticipants}" onclick="fill()">11:00 pm</td>
              </tr>
            </table>`
}