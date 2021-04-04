// function createNewEvent upon clicking create new event
// data to store: event name, date, unavailability, meeting hours
function createNewEvent() {
    //get inputs
    let eventName = document.getElementById("eventname").value;
    let date = document.getElementById("datepicker").value;
    let unavailability = document.getElementById("unavailability").value; // shows as array of hours during day e.g [4, 2, 12, 23]
    let meetingStart = document.getElementById("starttime").value;
    let meetingEnd = document.getElementById("endtime").value;
    let participants = JSON.parse(localStorage.getItem(PARTICIPANTS_KEY))// participants from local storage

    accountList.fromData(JSON.parse(localStorage.getItem(ACCOUNT_DATA_KEY)));
    // mkae sure not empty (except participants)
    if (eventName == "" || date == "" || unavailability == "" || meetingStart == "" || meetingEnd == "") {
        alert('Please fill in all requirments.');
    }
    else {
        //put meeting times in 24 hour formate (i.e. 00:00)
        meetingStart += ":00";
        meetingEnd += ":00";
        //store in glob var eventList as new event
        // point to current user via LOGIN_INDEX_KEY
        let user = accountList.getAccount(Number(JSON.parse(localStorage.getItem(LOGIN_INDEX_KEY))));
        // add event to user's ._eventsList
        user.addEvent(eventName, date, unavailability, meetingStart, meetingEnd, participants);
        //update
        updateAccountList(accountList);
        //reset participants and num participants local storage data
        window.localStorage.removeItem(PARTICIPANTS_KEY);
        window.localStorage.removeItem(PARTICIPANTS_COUNT);
        //change window to all event (?) page when done
        window.location.href = "allevent.html";
    }

}

// USer is first participant


let participantCount = 0;
let participantsList = []
// upon clicking add participant button - adds a working bee :)
function addParticipant() {
    if (JSON.parse(localStorage.getItem(PARTICIPANTS_COUNT)) == null) {
        let userName = `${JSON.parse(localStorage.getItem(FNAME_KEY))} ${JSON.parse(localStorage.getItem(LNAME_KEY))}`;
        let userEmail = JSON.parse(localStorage.getItem(EMAIL_KEY));
        let userPartici = new Participant(userName, userEmail);
        participantsList = [userPartici];
        participantCount = 1; //includes current user
        userPartici.beeIcon("BeeAvatar-Yellow.png");
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem(`${PARTICIPANTS_COUNT}`, JSON.stringify(participantCount));
            localStorage.setItem(`${PARTICIPANTS_KEY}`, JSON.stringify(participantsList));
        }
        else {
            console.log("localStorage is not supported by current browser.");
        }
    }
    //iterate num of participants in local storage
    participantCount += 1;
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem(`${PARTICIPANTS_COUNT}`, JSON.stringify(participantCount));
    }
    else {
        console.log("localStorage is not supported by current browser.");
    }

    //prompt for participant's email
    let nameRef = prompt("Please enter name of participant: ")
    let emailRef = prompt("Please enter email of participant: ");;
    let participant = new Participant(nameRef, emailRef);

    //add another bee icon
    //list of bees
    let bees = ["BeeAvatar-Yellow.png", "BeeAvatar-Blue.png", "BeeAvatar-Green.png", "BeeAvatar-Pink.png"];
    // get current num of participants
    if (participantCount < bees.length) {
        let beesDisplayRef = document.getElementById("bees");
        participant.beeIcon(bees[participantCount - 1])
        beesDisplayRef.innerHTML += `<img src="images/${participant._beeIcon}" alt="${participant._name}" style="width: 100px; height: 100px;">`;
        //push participants email to participantsList
        participantsList.push(participant);
        updateParticipantList(participantsList); //update in local storage and pull later to event

        //add table for new participant
        let tableRef = document.getElementById("tableSelect");
        tableRef.innerHTML += `<br><br>
        <table class="fixed_date">
              <tr style="height: 300px;">
                <td class="time" id="cell00${participantCount}" onclick="fill()">12:00 am </td>
                <td class="time" id="cell01${participantCount}" onclick="fill()">1:00 am</td>
                <td class="time" id="cell02${participantCount}" onclick="fill()">2:00 am</td>
                <td class="time" id="cell03${participantCount}" onclick="fill()">3:00 am</td>
                <td class="time" id="cell04${participantCount}" onclick="fill()">4:00 am</td>
                <td class="time" id="cell05${participantCount}" onclick="fill()">5:00 am</td>
                <td class="time" id="cell06${participantCount}" onclick="fill()">6:00 am</td>
                <td class="time" id="cell07${participantCount}" onclick="fill()">7:00 am</td>
                <td class="time" id="cell08${participantCount}" onclick="fill()">8:00 am</td>
                <td class="time" id="cell09${participantCount}" onclick="fill()">9:00 am</td>
                <td class="time" id="cell10${participantCount}" onclick="fill()">10:00 am</td>
                <td class="time" id="cell11${participantCount}" onclick="fill()">11:00 am</td>
                <td class="time" id="cell12${participantCount}" onclick="fill()">12:00 am</td>
                <td class="time" id="cell13${participantCount}" onclick="fill()">1:00 pm</td>
                <td class="time" id="cell14${participantCount}" onclick="fill()">2:00 pm</td>
                <td class="time" id="cell15${participantCount}" onclick="fill()">3:00 pm</td>
                <td class="time" id="cell16${participantCount}" onclick="fill()">4:00 pm</td>
                <td class="time" id="cell17${participantCount}" onclick="fill()">5:00 pm</td>
                <td class="time" id="cell18${participantCount}" onclick="fill()">6:00 pm</td>
                <td class="time" id="cell19${participantCount}" onclick="fill()">7:00 pm</td>
                <td class="time" id="cell20${participantCount}" onclick="fill()">8:00 pm</td>
                <td class="time" id="cell21${participantCount}" onclick="fill()">9:00 pm</td>
                <td class="time" id="cell22${participantCount}" onclick="fill()">10:00 pm</td>
                <td class="time" id="cell23${participantCount}" onclick="fill()">11:00 pm</td>
              </tr>
            </table>`
    }
    else {
        alert("Maximum number of participants has been reached!");
    }
}