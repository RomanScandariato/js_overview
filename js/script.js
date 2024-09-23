const timerDisplay = document.querySelector('#time');
const timerBtn = document.querySelector('#start-btn');
const resetBtn = document.querySelector('#reset-btn');


let count = 10;
let started = false;
let timer;

function resetTimer(eventObj) {
    clearInterval(timer);
    timerDisplay.innerText = 'Time: 10' ;
    count = 10;
    started = false;
}

function startTimer(eventObj) {
    if (!started) {
        timer = setInterval(function () {
            count--;

            timerDisplay.innerText = 'Time: ' + count;

            if (count <= 0) {
                clearInterval(timer);
            }
        }, 1000);

        started = true;
    }
}

function getKeyPress(eventObject) {
    if (eventObject.keyCode === 83) {
        startTimer();
    }

    if (eventObject.keyCode === 82) {
        resetTimer();
    }
}

timerBtn.addEventListener('click', startTimer);

resetBtn.addEventListener('click', resetTimer);

document.addEventListener('keydown', getKeyPress);