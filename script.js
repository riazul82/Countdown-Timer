// Selecting elements for showing output
const dd = document.getElementById("day");
const hh = document.getElementById("hour");
const mm = document.getElementById("minute");
const ss = document.getElementById("second");

let timeCount = setInterval(() => {

    let curntTime = Date.now();
    let eventTime = new Date('May 30, 2022 14:19:00').getTime();

    //total seconds
    totalTime = (eventTime - curntTime) / 1000;

    // time constants
    let dayConst = 86400;
    let hourConst = 3600;
    let minuteConst = 60;

    // distribute total seconts to days, hours, minutes and seconds
    let days = Math.floor(totalTime / dayConst);
    totalTime = totalTime % dayConst;

    let hours = Math.floor(totalTime / hourConst);
    totalTime = totalTime % hourConst;

    let minutes = Math.floor(totalTime / minuteConst);
    totalTime = totalTime % minuteConst;

    let seconds = Math.floor(totalTime);

    // fix single number input
    if (days < 10) {
        days = '0' + days;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    // stop countdown
    if (totalTime < 0) {
        clearInterval(timeCount);

        days = '00';
        hours = '00';
        minutes = '00';
        seconds = '00';
    }

    // update timer
    dd.textContent = days;
    hh.textContent = hours;
    mm.textContent = minutes;
    ss.textContent = seconds;

}, 1000);