import Async from "react-async";
import React from 'react';

function ReadTodo(props) {
    if (props.todo) {
        const todo = props.todo;
        return (<div>ReadTodo {todo.id} {todo.title}</div>)
    }
    return (
        <Async promiseFn={props.todoRepository.get} id={props.todoId}>
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
    // const todo = props.todoRepository.get(props.todoId);
    // return (<div>ReadTodo {todo.id} {todo.title}</div>)
}

export default ReadTodo;