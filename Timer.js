const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

const formatTime = (time) => {
    return time <10 ? `0${time}`: time;
}

const updateCountDown = (deadline) => {
    const currentTime = new Date();
    const timeDifference = deadline - currentTime;

    // calculate days,hours, mins, secs from timeDifference
    let calSecs = Math.floor(timeDifference / 1000) % 60;
    let calcMins = Math.floor(timeDifference / 1000 / 60) % 60;
    let calcHours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
    let calcDays = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

    days.textContent = formatTime(calcDays);
    mins.textContent = formatTime(calcMins);
    hours.textContent = formatTime(calcHours);
    secs.textContent = formatTime(calSecs);

}

const CountDown = (targetDate) => {
    setInterval(() => updateCountDown(targetDate), 1000);
    
}


const targetDate = new Date("August 02 2024 03:05");
CountDown(targetDate);