const container = document.querySelector('.container')
const title = document.querySelector('.title')
const noteContent = document.querySelector('.noteContent')
const noteColor = document.querySelector('.noteColor')
const notePin = document.querySelector('.notePin')
const saveBtn = document.querySelector('.saveBtn')


const saveNoteFunction = () =>
{
    const title = document.querySelector('.title').value
    const noteContent = document.querySelector('.noteContent').value
    const noteColor = document.querySelector('.noteColor').value
    const notePin = document.querySelector('.notePin').checked
    const date = new Date().toLocaleString()

    const note = {
        title: title,
        noteContent: noteContent,
        noteColor: noteColor,
        notePin: notePin,
        date: date
    }    
    
    localStorage.setItem("note", JSON.stringify(note))
}


saveBtn.addEventListener('click', saveNoteFunction)

















// const teraz = Data.now()
// const wczoraj = new Date('2024-03-20')
