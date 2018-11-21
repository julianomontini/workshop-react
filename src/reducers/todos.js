const todos = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return[
                {
                    id: action.id,
                    title: action.title,
                    description: action.description,
                    completed: false
                },
                ...state
            ]
        case 'REMOVE_TODO':
            return state.filter(t => t.id !== action.id);
        case 'LOAD_TODOS_SUCCESS':
            return action.todos.filter(t => t.userId === 1);
        default:
            return state;
    }
}

export default todos;