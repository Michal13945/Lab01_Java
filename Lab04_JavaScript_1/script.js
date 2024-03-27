const container = document.querySelector('.container')
const notesContainer = document.querySelector('.notes-container')
const title = document.querySelector('.title')
const noteContent = document.querySelector('.noteContent')
const noteColor = document.querySelector('.noteColor')
const notePin = document.querySelector('.notePin')
const saveBtn = document.querySelector('.saveBtn')
const idInput = document.querySelector('.index')

const saveNoteFunction = () => {
    const title = document.querySelector('.title').value
    const noteContent = document.querySelector('.noteContent').value
    const noteColor = document.querySelector('.noteColor').value
    const notePin = document.querySelector('.notePin').checked
    const date = new Date().toLocaleString()
    const idIndex = document.querySelector('.index').value

    const note = {
        title: title,
        noteContent: noteContent,
        noteColor: noteColor,
        notePin: notePin,
        date: date
    }

    if (idIndex == -1) {
        addNewNoteFunction(note);
    }
    else {
        editNoteFunction(note, idIndex);
    }

    window.location.reload();
}

const addNewNoteFunction = (note) => {
    const notes = localStorage.getItem('notes')

    if (notes == null) {
        localStorage.setItem("notes", JSON.stringify([note]))
    }
    else {
        const allNotes = JSON.parse(notes)

        const pinnedNotes = [];
        const normalNotes = [];

        for (let n of allNotes) {
            if (n.notePin === true) {
                pinnedNotes.push(n);
            }
            else {
                normalNotes.push(n);
            }
        }

        if (note.notePin === true) {
            pinnedNotes.push(note);
        }
        else {
            normalNotes.push(note);
        }

        const newNotes = pinnedNotes.concat(normalNotes);

        allNotes.push(newNotes)
        localStorage.setItem("notes", JSON.stringify(newNotes))
    }
}

const editNoteFunction = (note, idIndex) => {
    const notes = localStorage.getItem('notes')
    const allNotes = JSON.parse(notes)

    allNotes[idIndex] = note;

    const pinnedNotes = [];
    const normalNotes = [];

    for (let n of allNotes) {
        if (n.notePin === true) {
            pinnedNotes.push(n);
        }
        else {
            normalNotes.push(n);
        }
    }

    const newNotes = pinnedNotes.concat(normalNotes);

    allNotes.push(newNotes)
    localStorage.setItem("notes", JSON.stringify(newNotes))

    idInput.value = -1
}

const loadNotesFromLocalStorageFunction = () => {
    const notes = localStorage.getItem('notes')

    if (notes != null) {
        const allNotes = JSON.parse(notes);

        for (let note of allNotes) {
            createNoteInHtmlFunction(note.title, note.noteContent, note.noteColor, note.date, note.notePin, allNotes.indexOf(note));
        }
    }
}

const createNoteInHtmlFunction = (noteTitle, content, color, date, isPinned, index) => {
    const noteDiv = document.createElement('div');
    noteDiv.classList.add('note');
    noteDiv.style.borderColor = color;

    const deleteDiv = document.createElement('div');
    deleteDiv.innerHTML = "X";
    deleteDiv.classList.add('delete');

    const titleDiv = document.createElement('div');
    titleDiv.innerHTML = noteTitle;
    const contentDiv = document.createElement('div');
    contentDiv.innerHTML = content;
    const dateDiv = document.createElement('div');
    dateDiv.innerHTML = date;
    const pinDiv = document.createElement('div');
    pinDiv.innerHTML = isPinned ? 'Przypięta' : '';

    noteDiv.appendChild(deleteDiv);
    noteDiv.appendChild(titleDiv);
    noteDiv.appendChild(contentDiv);
    noteDiv.appendChild(dateDiv);
    noteDiv.appendChild(pinDiv);

    notesContainer.appendChild(noteDiv)

    noteDiv.addEventListener('click', () => {
        idInput.value = index
        title.value = noteTitle
        noteContent.value = content
        noteColor.value = color
        notePin.checked = isPinned
    })

    deleteDiv.addEventListener('click', (e) => {
        deleteNoteFunction(index);
        e.stopPropagation();
    })
}

const deleteNoteFunction = (index) => {
    const notes = localStorage.getItem('notes')
    const allNotes = JSON.parse(notes)

    allNotes.splice(index, 1);

    localStorage.setItem("notes", JSON.stringify(allNotes))
    window.location.reload();
}


saveBtn.addEventListener('click', saveNoteFunction)
loadNotesFromLocalStorageFunction();