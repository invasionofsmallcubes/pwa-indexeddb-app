// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

import { Todo } from './TodoRepository';

global.todoId = 'id';
global.todoTitle = 'my title';

global.todo = Todo(todoId, todoTitle);

global.asyncTodoRepository = (promise) => {
    return {
        async create({ title }) { return promise },
        async get({ id }) { return promise }
    }
};

global.historyProps = function(promise) {
    return {
        push: jest.fn(({ pathname, state }) => {
            return promise
        })
    }
}