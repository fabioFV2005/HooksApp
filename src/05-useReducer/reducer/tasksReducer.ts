
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}


export const getTasksInitialState =():TaskState =>{
    return {
        todos:[],
        completed:0,
        length:0,
        pending:0
    }
}

export type TaskAction =
    | {
        type: 'ADD_TODO', payload: {
            id: number;
            text: string;
        }
    }
    | { type: 'TOGGLE_TODO', payload: number }
    | {
        type: 'DELETE_TODO', payload: {
            id: number;
        }
    };

export const tasksReducer = (
    state: TaskState,
    action: TaskAction
): TaskState => {
    switch (action.type) {
        case 'ADD_TODO': {
            const newTodo: Todo = {
                id: action.payload.id,
                text: action.payload.text,
                completed: false
            }
            // ! don't do it
            //  state.todos.push(newTodo);  <- NO MUTAR

            return {
                ...state,
                length: state.todos.length + 1,
                pending: state.pending + 1,
                todos: [...state.todos, newTodo]
            };
        }

        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id),
                length: state.todos.length,
                completed: state.todos.filter(todo => todo.completed).length ,
                pending: state.todos.filter(todo => !todo.completed).length,

            }
        case 'TOGGLE_TODO':
            const updatedTodos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo;
            })


            return {
                ...state,
                todos: updatedTodos,
                completed: state.todos.filter(todo => !todo.completed).length,
                pending: state.todos.filter(todo => todo.completed).length,

            }
        default:
            return state
    }

    // return state;
}

