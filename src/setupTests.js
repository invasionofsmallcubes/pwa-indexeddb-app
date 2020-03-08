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

global.historyProps = {
    push: jest.fn(({ pathname, state }) => { })
}