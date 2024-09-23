const header = document.querySelector('h1');
const paragraph = document.querySelector('.special-paragraph');
const image = document.querySelector('#main-image');
const noteOutput = document.querySelector('.output');
const timerDisplay = document.querySelector('#time');
const timerBtn = document.querySelector('#start-btn');
const timerResetBtn = document.querySelector('#reset-btn');
const timerStopBtn = document.querySelector('#stop-btn');

header.classList.add('crazy');

header.style.textDecoration = 'underline';

// image.setAttribute('src', 'https://images.pexels.com/photos/16112572/pexels-photo-16112572/free-photo-of-view-of-sun-shining-between-the-trees-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');

// Instert a new article element into the output section
noteOutput.insertAdjacentHTML('beforeend', `
    <article>
        <h3>New note text</h3>
        <p>Added On: 9/20/2024</p>
    </article>
`);

// Timers
// setTimeout(function() {
//     console.log('Time Up!');
// }, 3000);


let count = 10;
let started = false;

timerBtn.addEventListener('click', function () {
    if (!started) {
        const timer = setInterval(function () {
            count--;

            timerDisplay.innerText = 'Time: ' + count;

            if (count <= 0) {
                clearInterval(timer);

                timerDisplay.innerText = 'Time: 10';
                count = 10;
                started = false;
            }
        }, 1000);

        started = true;
    }
});