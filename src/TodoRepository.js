export function Todo(id, title) {
    return {
        id: id,
        title: title
    }
}

function TodoRepository() {
    return {
        create: async ({ title }) => {
            return Todo('id', title);
        },
        get: async ({ id }) => {
            return Todo(id, 'title');
        }
    }
}

export default TodoRepository;