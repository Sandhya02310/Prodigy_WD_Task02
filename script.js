let timer; // To store the interval
let isRunning = false;
let startTime;
let elapsedTime = 0;
let laps = [];

function formatTime(milliseconds) {
    const date = new Date(milliseconds);
    return date.toISOString().slice(11, -1);
}

function displayTime() {
    const formattedTime = formatTime(elapsedTime);
    document.getElementById('display').textContent = formattedTime;
}

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    } else {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            displayTime();
        }, 10);
    }
}

function pauseResume() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    } else {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            displayTime();
        }, 10);
    }
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    displayTime();
    laps = [];
    document.getElementById('laps').innerHTML = '';
}

function recordLap() {
    if (isRunning) {
        const lapTime = elapsedTime;
        laps.push(lapTime);
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${laps.length}: ${formatTime(lapTime)}`;
        document.getElementById('laps').appendChild(lapItem);
    }
}
