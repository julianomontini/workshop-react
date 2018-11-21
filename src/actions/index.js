import axios from 'axios';

let nextTodoId = 201;

export const addTodo = ({title, description}) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    title,
    description
})

export const removeTodo = id => ({
    type: 'REMOVE_TODO',
    id
})

export const loadTodos = () => {
    return async dispatch => {
        try{
            dispatch({type: 'LOAD_TODOS_REQUEST'})
            let result = await axios.get('https://jsonplaceholder.typicode.com/todos');
            dispatch({type: 'LOAD_TODOS_SUCCESS', todos: result.data})
        }catch(e){
            dispatch({type: 'LOAD_TODOS_FAILURE'})
        }
    }
}