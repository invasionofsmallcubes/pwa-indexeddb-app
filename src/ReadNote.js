import React from 'react'

function CreateNote(props) {
    if (props.note) {
        const note = props.note;
        return (<div>ReadNote {note.id} {note.title}</div>)
    }
    const note = props.noteRepository.get(props.noteId);
    return (<div>ReadNote {note.id} {note.title}</div>)
}

export default CreateNote;