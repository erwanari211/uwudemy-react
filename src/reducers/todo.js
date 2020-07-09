const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD TODO':
            return [
                ...state,
                action.todo
            ]
            break;
        default:
            return state;
    }
}

export default todos;