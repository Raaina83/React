import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            text: "Todo Msg",
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => { //action--> data jo pass ho raha hai, state--> current state
            const todo = {
                id: nanoid(),
                text: action.payload // action.payload.text
            }
            state.todos.push(todo)
        },
        
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        editTodo: (state, action) =>{
            console.log(action.payload.input)
            state.todos = state.todos.filter((todo) => todo.id === action.payload.id ? todo.text = action.payload.input : todo.text)
        }
    }
})

export const {addTodo, removeTodo, editTodo} = todoSlice.actions //must do this for components later

export default todoSlice.reducer //must do this for store