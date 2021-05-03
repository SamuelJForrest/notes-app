// define variables: Title, textarea, select, and buttons
const noteTitleInput = document.querySelector('#note-title-input');
const noteTextarea = document.querySelector('#note-text');
const noteSelect = document.querySelector('#note-tag');
const submitBtn = document.querySelector('#submit-btn');
const clearBtn = document.querySelector('#clear-btn');
const notesFeed = document.querySelector('.notes');
const noteForm = document.querySelector('#note-form');
const noteInputArea = document.querySelector('.note-input');

// Event listener when form submits - creates note and fills it with info from inputs.

noteForm.addEventListener('submit', (e) => {
    //Prevent form submitting + create div to contain notes
    if (noteTitleInput.value === '' || noteTextarea.value === ''){
        e.preventDefault();
        let warning = document.createElement('div');
        warning.classList.add('warning');
        warning.textContent = 'Please enter valid text.';
        noteInputArea.append(warning);
        noteForm.addEventListener('click', () => {
            warning.remove();
        });
    } else if (noteSelect.value === 'default') {
        e.preventDefault();
        let selectWarning = document.createElement('div');
        selectWarning.classList.add('warning');
        selectWarning.textContent = 'Please select a priority';
        noteInputArea.append(selectWarning);
        noteForm.addEventListener('click', () => {
            selectWarning.remove();
        });
    } else {
    e.preventDefault();
    let note = document.createElement('div');
    note.classList.add('note');
    notesFeed.append(note);
    // Create div to contain note title and text
    let noteInfo = document.createElement('div');
    noteInfo.classList.add('note-info');
    let noteTitle = document.createElement('h2');
    noteTitle.textContent = noteTitleInput.value;
    noteInfo.append(noteTitle);
    let noteText = document.createElement('p');
    noteText.textContent = noteTextarea.value;
    noteInfo.append(noteTitle);
    noteInfo.append(noteText);
    note.append(noteInfo);
    // Create delete button image
    let deleteNote = document.createElement('button');
    deleteNote.classList.add('delete-btn');
    deleteNote.textContent = 'X';
    deleteNote.addEventListener('click', () => {
        note.style.animationName = 'note-remove';
        setTimeout(function(){
            note.remove();
        }, 450);
    })
    note.append(deleteNote);

    // Use select values to determine the background-color of note
    if (noteSelect.value === 'low') {
        note.classList.add('green');
    } else if (noteSelect.value === 'mid') {
        note.classList.add('amber');
    } else if (noteSelect.value === 'high') {
        note.classList.add('red');
    }
    }
    noteTitleInput.value = '';
    noteTextarea.value = '';
    noteSelect.value = 'default';
});
