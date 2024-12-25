const minutesDisplay = document.querySelector('#minutes');
const secondsDisplay = document.querySelector('#seconds');
const pauseButton = document.querySelector('#pause');
const resetButton = document.querySelector('#reset');
let interval;

let minutes = 0;
let seconds = 0;

function startTimer() {
    if (pauseButton.innerHTML === 'Start' || pauseButton.innerHTML === 'Resume') {
        interval = setInterval(() => {
            if (minutes === 59 && seconds === 59) {
                pauseTimer();
            } else if (seconds == 59) {
                seconds = 0;
                minutes++;
            } else {
                seconds++;
            }
            
            minutesDisplay.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
            secondsDisplay.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

        }, 1000);
        pauseButton.textContent = 'Pause';
    } else {
        pauseTimer();
    }
}

function resetTimer() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;

    minutesDisplay.innerHTML = '00';
    secondsDisplay.innerHTML = '00';
    pauseButton.textContent = 'Start';
}

function pauseTimer() {
    clearInterval(interval);
    pauseButton.textContent = 'Resume';
}

pauseButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);