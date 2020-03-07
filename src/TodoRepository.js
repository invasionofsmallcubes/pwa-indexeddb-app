export function Todo(id, title) {
    return {
        id: id,
        title: title
    }
}

function TodoRepository() {
    return {
        create: (title) => {
            return Todo('id', title);
        },
        get: (id) => {
            return Todo(id, 'title');
        }
    }
}

export default TodoRepository;