// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

import { Todo } from './TodoRepository';

global.todoId = 'id';
global.todoTitle = 'my title';

global.todo = Todo(todoId, todoTitle);

global.asyncNodeRepository = {
    async create({ title }) { return Todo(todoId, title) },
    async get({ id }) { return Todo(id, todoTitle) }
};

global.asyncTodoRepository = (promise) => {
    return {
        async create({ title }) { return promise },
        async get({ id }) { return promise }
    }
};


global.historyProps = {
    push: jest.fn(({ pathname, state }) => {
        console.log(pathname)
        console.log(state)
    })
}

global.historyProps2 = (promise) => {
    return {
        push: jest.fn(({ pathname, state }) => {
            console.log(pathname)
            console.log(state)
            return promise
        })
    }
}