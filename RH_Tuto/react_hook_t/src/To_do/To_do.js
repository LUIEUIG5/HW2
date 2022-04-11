import React, { createContext, useReducer } from 'react'
import App_To_do from './App_To_do'

export const UserContext = React.createContext()
export const TodosContext = React.createContext()
const username = 'Sam'

const todosInitialState = {
    todos: [
        { id: 1, text: 'finishing writing hooks chapter' },
        { id: 2, text: 'play with kids' },
        { id: 3, text: 'read bible' },
    ],
}

const todosReducer = (state, action) => {
    switch (action.type) {
        case 'delete':
            const filteredTodoState = state.todos.filter(
                (todo) => todo.id !== action.payload.id
            )
            return { ...state, todos: filteredTodoState }
        default:
            return todosInitialState
    }
}

const To_do = () => {
    const [state, dispatch] = useReducer(todosReducer, todosInitialState)
    return (
        <div>
            <UserContext.Provider value={username}></UserContext.Provider>
            <TodosContext.Provider
                value={{ state, dispatch }}
            ></TodosContext.Provider>
        </div>
    )
}

export default To_do
