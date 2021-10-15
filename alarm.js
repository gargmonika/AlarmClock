console.log("This is alarmclock");
// display current time function, addZero to less than two digits function, set hours ,minutes,seconds for alarm,setalarm, clearalarm
// function to change 24 hour clock to 12 hour and addzero

// grab valueof heading to show current time
const currentTime = document.querySelector("#currentTime");
const setAlarmBtn = document.querySelector("#alarmbtn");
let alarmSet, activeAlarm = false;
let alarmSound = new Audio(
    'sound.mp3');

// currenttime function
function currentTimeShow() {
    var date = new Date(); // Date Object

    // Time variables
    var currentHours = date.getHours();
    var currentMinutes = date.getMinutes();
    var currentSeconds = date.getSeconds();
    var ampm;

    // set AM PmM for Time
    if (currentHours > 12) {
        ampm = "PM";
    } else {
        ampm = "AM";
    }

    // Change Military time to 12 hour clock
    if (currentHours > 12) {
        currentHours = currentHours - 12;
    }

    // console.log(currentHours, addZero(currentMinutes), addZero(currentSeconds));

    // display current time in h2
    currentTime.innerText = `${addZero(currentHours)}:${addZero(currentMinutes)}:${addZero(
    currentSeconds
  )} ${ampm}`;
    return currentTime.textContent;
}
setInterval(currentTimeShow, 1000); //update current time every second

// add zero to numbers of time leass than two digits
function addZero(time) {
    return time <= 9 ? `0${time}` : time;
}

const hourSelect = document.querySelector("#hours");
const minSelect = document.querySelector("#minutes");
const secSelect = document.querySelector("#seconds");
const timeZone = document.querySelector("#zone");

// function to set the values of option for hours, monutes, seconds
function setTimeValues(timeValue, maxValue) {
    timeValue = " ";
    for (let time = 0; time < maxValue; time++) {
        timeValue += `<option value="${addZero(time)}">${addZero(time)}</option>`;
    }
    return timeValue;
}

hourSelect.innerHTML = setTimeValues(hours, 13); // hour options

minSelect.innerHTML = setTimeValues(minutes, 60); // minutes options

secSelect.innerHTML = setTimeValues(seconds, 60); // seconds options


setAlarmBtn.addEventListener("click", () => {
    if (activeAlarm == false) {
        alarmSet = `${hourSelect.value}:${minSelect.value
  }:${secSelect.value} ${timeZone.value}`;

        hourSelect.disabled = true;
        minSelect.disabled = true;
        secSelect.disabled = true;
        timeZone.disabled = true;
        setAlarmBtn.textContent = "Clear Alarm";
        activeAlarm = true;
        var alarmOnOff = setInterval(() => {
            if (currentTime.textContent == alarmSet) {
                console.log("alarmon");
                alarmSound.play();
                clearInterval(alarmOnOff);
            } else {
                console.log('alarm off')
                alarmSound.pause();
            }

        }, 1000);
    } else {
        hourSelect.disabled = false;
        minSelect.disabled = false;
        secSelect.disabled = false;
        timeZone.disabled = false;
        setAlarmBtn.textContent = "Set Alarm";
        alarmSet = `00:00:00 AM`
        activeAlarm = false;
        alarmSound.pause();


    }



    console.log(alarmSet);


    console.log(currentTime.textContent);




});

// alarm on off
// function alarmOnOff() {
//     setInterval(() => {
//         if (currentTime.textContent == alarmSet) {
//             console.log("alarmON");
//             clearInterval(this);
//         } else {
//             console.log("alarm off")
//         }

//     }, 1000);
// }

// alarmOnOff();