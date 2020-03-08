import Async from "react-async";
import React from 'react';

function ReadTodo(props) {
    if (props.note) {
        const note = props.note;
        return (<div>ReadTodo {note.id} {note.title}</div>)
    }
    return (
        <Async promiseFn={props.noteRepository.get} id={props.noteId}>
            {({ data, error, isPending }) => {
                if (isPending) return (<div>Loading...</div>);
                if (error) return (<div>Something went wrong: ${error.message}</div>);
                if (data)
                    return (
                        <div>ReadTodo {data.id} {data.title}</div>
                    )
                return null
            }}
        </Async>
    );
    // const note = props.noteRepository.get(props.noteId);
    // return (<div>ReadTodo {note.id} {note.title}</div>)
}

export default ReadTodo;