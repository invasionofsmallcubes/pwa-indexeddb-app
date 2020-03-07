export function Note(id, title) {
    return {
        id: id,
        title: title
    }
}

function NoteRepository() {
    return {
        create: (title) => {
            return Note('id', title);
        },
        get: (id) => {
            return Note(id, 'title');
        }
    }
}

export default NoteRepository;