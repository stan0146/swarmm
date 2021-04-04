


let loginIndex=getLoginIndex();
let list=getAccountList();
accountList.fromData(list);

i="";
if (accountList._accountList[loginIndex]._eventsList.length==1){
  i=0;
}
else{i=getClickEventIndex();}


  let eventname= accountList._accountList[loginIndex]._eventsList[i]._eventName;
  let date= accountList._accountList[loginIndex]._eventsList[i]._date;
  let starttime=accountList._accountList[loginIndex]._eventsList[i]._startTime;
  let endtime=accountList._accountList[loginIndex]._eventsList[i]._endTime;
  let participants=accountList._accountList[loginIndex]._eventsList[i]._participants;

let avatars=["images/BeeAvatar-Yellow.png","images/BeeAvatar-Blue.png","images/BeeAvatar-Green.png","images/BeeAvatar-Pink.png"]
let people=""

if (participants!=null){
for (i=0;i<participants.length;i++)
{
  people+=`
  <tr>
  <td class="image"> <img src="${avatars[i]}" style="width: 8%">  &nbsp  &nbsp ${participants[i]._name} &nbsp  &nbsp Email: ${participants[i]._email}</td>
  </tr> `

}
}



let section=document.getElementById("section22")
section.innerHTML=`      <br>
<div class="event_sum">
  <div id="event-date"></div>

  <div class="section3">

    <p id="besttime"> </p>

  </div>

  <br>

  <table style="margin-right: 2cm;width:30cm;"="fixed_date">
    <tr style="height: 2cm; width: 2cm;">
      <td id="cell0" style="width: 10px;"  >12:00 am </td>
      <td  id="cell1" >1:00 am</td>
      <td   id="cell2" >2:00 am</td>
      <td   id="cell3" >3:00 am</td>
      <td   id="cell4" >4:00 am</td>
      <td   id="cell5" >5:00 am</td>
      <td   id="cell6">6:00 am</td>
      <td   id="cell7">7:00 am</td>
      <td   id="cell8">8:00 am</td>
      <td   id="cell9" >9:00 am</td>
      <td   id="cell10">10:00 am</td>
      <td   id="cell11">11:00 am</td>
      <td   id="cell12">12:00 am</td>
      <td   id="cell13">1:00 pm</td>
      <td   id="cell14">2:00 pm</td>
      <td   id="cell15">3:00 pm</td>
      <td   id="cell16">4:00 pm</td>
      <td   id="cell17">5:00 pm</td>
      <td   id="cell18">6:00 pm</td>
      <td   id="cell19">7:00 pm</td>
      <td   id="cell20">8:00 pm</td>
      <td   id="cell21">9:00 pm</td>
      <td   id="cell22">10:00 pm</td>
      <td   id="cell23">11:00 pm</td>
    </tr>
  </table>
  
<h4 style="font-family: 'Inter', sans-serif;font-size: 23px;line-height: 27.84px;color: #071773;">People</h4>
  <table>
${people}
  </table>
  

</div>
<!--add beige space-->
<br>
`;

let start="";
if (starttime[0]==0){
  start=parseInt(starttime[1]);

}

else {
  start=  parseInt(starttime[0]+starttime[1]);

}

let end="";

if (endtime[0]==0){
  end=parseInt(endtime[1]);
  }
  
  else {
    end=parseInt(endtime[0]+ endtime[1]);
   
  }

 
for (i=start;i<=end;i++){
      
  document.getElementById(`cell${i}`).setAttribute("class", "busy");

}

let besttime=document.getElementById("besttime")

besttime.innerHTML=`<span style="font-size: 17px;color:#515363; font-family: 'Inter', sans-serif; text-align: left;"> The best time to meet is at : </span> ${starttime}  `


let eventdate=document.getElementById("event-date");
eventdate.innerHTML=`<p style="  font-family: 'Inter', sans-serif;font-size: 23px;line-height: 27.84px;color: #071773;"> ${eventname} - ${date} </p>` ;

