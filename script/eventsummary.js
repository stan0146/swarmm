let eventdummy=[{
        eventname: "party",
        date: "12/08/2020",
        starttime: "1",
        endtime: "4",
        participants: "2" }
        ]   


index=0;
let eventname= eventdummy[index].eventname;
let date= eventdummy[index].date;
let starttime=eventdummy[index].starttime;
let endtime=eventdummy[index].endtime;
let participants=eventdummy[index].participants;


for (i=starttime;i<=endtime;i++){
      console.log(i)
  document.getElementById(`cell${i}`).setAttribute("class", "busy");
}

let besttime=document.getElementById("besttime")

besttime.innerHTML=`<span style="font-size: 17px;"> The best time to meet is at : </span> ${starttime}:00pm `
