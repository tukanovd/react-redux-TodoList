export const addTask = (text) => {
    return {
        type: 'ADD_TASK',
        text
    }
};

export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        id
    }
};

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};