const title = document.querySelector("h1");
const clock = document.querySelector("h2");

function getTime() {
    const xmasDay = new Date("2021-12-24:00:00:00+0900");
    const xmasDaySeconds = Math.floor(xmasDay/1000);
    const date = Date.now();
    const UnixSeconds = Math.floor(date / 1000);

    const Days = xmasDaySeconds-UnixSeconds;
    const Hours = Days%(60*60*24);
    const Minutes = Hours%(60*60);
    const Seconds = Minutes%60;

    const leftDays = Math.floor( Days / (60*60*24) );
    const leftHours = Math.floor( Hours / (60*60) );
    const leftMinutes = Math.floor( Minutes / (60) );
    const leftSeconds = Math.floor( Seconds );

    clock.innerHTML = `${
        leftDays < 10 ? `0${leftDays}` : leftDays }d ${
        leftHours < 10 ? `0${leftHours}` : leftHours }h ${
        leftMinutes < 10 ? `0${leftMinutes}` : leftMinutes }m ${
        leftSeconds < 10 ? `0${leftSeconds}` : leftSeconds }s`;
}

function init() {
    title.innerHTML = 'Time Until Christmas Eve ';
    getTime();
    setInterval(getTime, 1000);
}

init();