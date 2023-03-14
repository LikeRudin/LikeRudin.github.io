const clockForm = document.querySelector("#clockForm")
const timeText = clockForm.querySelector("#time")

const setTime = function() {
const date = new Date();


const hours = date.getHours().toString();
const minutes = date.getMinutes().toString();
const seconds = date.getSeconds().toString();

const hourText = hours.padStart(2, "0");
const minuteText = minutes.padStart(2, "0");
const secondText = "seconds :"+ seconds.padStart(2,"0");


clockIcon = `${hourText}:${minuteText}`;

timeText.innerHTML = `<abbr title="${secondText}"> ${clockIcon} </abbr>`;
}

const getDate = function() {
    
    const date = new Date();
    const years = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString();
    const day = date.getDate().toString();
    
    const monthText = month.padStart(2, "0");
    const dayText = day.padStart(2,"0");

    const yearMonthDay = years + monthText + dayText
    return yearMonthDay 
}




const setDate = function(dateText) {
    const dateTag = clockForm.querySelector("#date");
    dateTag.innerText = dateText;
}



setDate(getDate());

setTime();
setInterval(setTime, 1000);

