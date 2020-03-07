import React from 'react'

function CreateTodo(props) {
    if (props.note) {
        const note = props.note;
        return (<div>ReadTodo {note.id} {note.title}</div>)
    }
    const note = props.noteRepository.get(props.noteId);
    return (<div>ReadTodo {note.id} {note.title}</div>)
}

export default CreateTodo;