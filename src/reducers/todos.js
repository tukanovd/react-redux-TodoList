const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            let newState = action.text;
            return {
                ...state,
                id: newState.id,
                text: newState.text,
                date: newState.date,
                endDate: newState.endDate,
                taskName: newState.taskName,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                completed: !state.completed
            });

        default:
            return state
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'DELETE_TASK':
            return state.filter(e => e.id !== action.id);
        case 'TOGGLE_TODO':
            return state.map(t =>
                todo(t, action)
            );
        default:
            return state
    }
};

export default todos