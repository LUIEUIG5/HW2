import React, { useState, useContext, useReducer } from 'react'
import { UserContext } from './To_do'
import { Button } from 'react-bootstrap'

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'reset':
            return initialState
        default:
            return initialState
    }
}

const initialState = {
    count: 0,
}

const App_To_do = () => {
    const value = useContext(UserContext)
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Received, {value}</div>
            Count: {state.count}
            <br />
            <Button onClick={() => dispatch({ type: 'increment' })}>
                Increment{' '}
            </Button>
            <Button
                variant="secondary"
                onClick={() => dispatch({ type: 'decrement' })}
            >
                {' '}
                Decrement
            </Button>
            <Button
                variant="success"
                onClick={() => dispatch({ type: 'reset' })}
            >
                Reset
            </Button>{' '}
        </div>
    )
}

export default App_To_do
