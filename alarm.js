document.addEventListener("DOMContentLoaded", () => {

    const selecthour = document.getElementById("hour");
    const selectminute = document.getElementById("minute"); 
   // const selectoptions = document.getElementById("option");
    const button = document.querySelector("button");
    const currentTime = document.querySelector("span");
    const content = document.getElementById("content");

    let alarmTime;
    isAlarmSet = false;
    alarm = new Audio("/Alarm clock/alarmclock.mp3");

    for (let i = 0; i < 24; i++) {
            
        i = i < 10 ? "0" + i : i;
    
        //let option = ` <option value="${i}">${i}</option>`;
         //selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
    
        selecthour.appendChild(document.createElement("option"));
        selecthour.lastElementChild.textContent = i;
        selecthour.lastElementChild.setAttribute("value", i);
    }

    for(let i = 0; i < 60; i++) {

        if(i < 10) {
            i = "0" + i
        }
        else(
            i = i
        )

        selectminute.appendChild(document.createElement("option"));
        selectminute.lastElementChild.textContent = i;
        selectminute.lastElementChild.setAttribute("value", i);
    }

    /*for(let i = 0; i < 2; i++) {

        if(i == 0) {
            i = "AM"
        } else {
            i = "PM"
        }

        selectoptions.appendChild(document.createElement("option"));
        selectoptions.lastElementChild.textContent = i;
        selectoptions.lastElementChild.setAttribute("value", i);
    }*/

    setInterval( () => {

        const time = new Date();
        let hour = time.getHours();
        let minute = time.getMinutes();
        let second = time.getSeconds();

       hour = hour < 10 ? "0" + hour : hour;
       minute = minute < 10 ? "0" + minute : minute;
       second = second < 10 ? "0" + second : second; 
       
        
        currentTime.innerText = `${hour}:${minute}:${second} `;

        if(alarmTime == `${hour}:${minute}`) {
            alarm.play();
            alarm.loop = true;
        }
        
    }, 1000);
    
   
    button.addEventListener("click", () => {
        if(isAlarmSet) {
            alarmTime="";            
            alarm.pause();
            button.textContent = "Set Alarm";
            content.classList.remove("disable");
            return isAlarmSet = false;
        }


        let time = `${selecthour.value}:${selectminute.value}`;
        console.log(time)
       
        if(time.includes("Hour") || time.includes("Minute")) {
            alert("EROOR!Select the time")
        }
        isAlarmSet = true;
        alarmTime = time
        content.classList.add("disable");
        button.textContent = "Clear Alarm"

    })



});
    


    
