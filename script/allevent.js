let eventdummy=[{
        eventname: "Meeting",
        date: "12/04/2021",
        starttime: "1",
        endtime: "4",
        participants: "2" },{
            eventname: "Project",
            date: "19/04/2021",
            starttime: "13",
            endtime: "16",
            participants: "2" }
        ]   

        let list=getAccountList();

        accountList.fromData(list);



    
    
    index=0;

    let loginIndex=getLoginIndex();


    for (i=0;i<accountList._accountList[loginIndex]._eventsList.length;i++){
    let eventname= accountList._accountList[loginIndex]._eventsList[i]._eventName;
    let date= accountList._accountList[loginIndex]._eventsList[i]._date;
    let starttime=accountList._accountList[loginIndex]._eventsList[i]._startTime;
    let endtime=accountList._accountList[loginIndex]._eventsList[i]._endTime;;
    
    
    let list=document.getElementById("view")
    list.innerHTML+=    `<br><div style="background:#FBF8F1; margin-left: 1cm;margin-right: 1cm; border-radius:1cm;"> <br>
    <h2 style=" background-color:#FBF8F1; border-radius: 1px ; margin-left: 2cm;
    font-size: 40px;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    color: #071773;"> ${eventname} - ${date}  </h2>
    <h4 style="margin-left: 2cm;background-color:#FBF8F1; border-radius: 1px ; font-family: 'Inter', sans-serif;font-size: 17px;line-height: 21px;color: #071773;">Start time: ${starttime}</h4>
    <h4 style="margin-left: 2cm;background-color:#FBF8F1; border-radius: 1px ; font-family: 'Inter', sans-serif;font-size: 17px;line-height: 21px;color: #071773;">End time: ${endtime}</h4>
    <a href="events.html">
    <button id="${i}" style="  margin-left: 2cm;  background: #FDB433;
    border-radius: 26px;
    height: 52px;
    width: 2.8cm;
    left: 300px;
    right: 1200px;
    border-width: 0px;
    font-family: 'Inter', sans-serif;
    font-size: 17px;
    line-height: 21px;
    color: #071773;" onclick="view()">View event</button> </a> 
    <br><br><br>
    </div> `


    }
    
 