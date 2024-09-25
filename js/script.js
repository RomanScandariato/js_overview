const noteOutput = document.querySelector('.output');
const addNoteBtn = document.querySelector('#add-btn')
const randomNoteBtn = document.querySelector('#random-btn')
const noteModal = document.querySelector('#note-modal');
const noteModalTitleEl = document.querySelector('.modal-title');
const noteModalTextContentEl = document.querySelector('.modal-text-content');
const noteModalDateEl = document.querySelector('.modal-date');
const notes = [];

function outputNotes(arrayOfNotes) {

    noteOutput.innerHTML = '';

    for (const noteObject of arrayOfNotes) {
        noteOutput.insertAdjacentHTML('beforeend', `
        <article class="border border-light-subtle p-2 rounded-2 text-black-50 mb-3">
            <h3>${noteObject.title}</h3>
            <p>${noteObject.textContent}</p>
            <p>Added On: ${noteObject.date}</p>
        </article>
    `);
    }

}

function gatherNotes() {
    let title;
    let textContent;
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const dateOutput = month + '/' + day + '/' + year;

    let keepAsking = true;

    while (keepAsking) {
        title = prompt('Please provide the title');
        textContent = prompt('Please provide the text content of your note');
        if (title && textContent) {
            keepAsking = false;
        } else {
            alert('You must enter both title and text content');
        }
    }

    const noteObject = {
        title: title,
        textContent: textContent,
        date: dateOutput
    };

    notes.push(noteObject);

    return notes;
}

function outputRandomNote() {
    const ranNum = Math.random();
    const index = Math.floor(ranNum * notes.length);
    const note = notes[index];

// modal popup here
    noteModalTitleEl.innerText = note.title;
    noteModalTextContentEl.innerText = note.textContent;
    noteModalDateEl.innerText = note.date;

    $('#note-modal').modal('show');
}

addNoteBtn.addEventListener('click', function () {
    const notesArray = gatherNotes();

    outputNotes(notesArray);
});

randomNoteBtn.addEventListener('click', outputRandomNote);


