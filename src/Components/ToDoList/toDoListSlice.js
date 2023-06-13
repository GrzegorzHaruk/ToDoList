import { createSlice } from "@reduxjs/toolkit";
import Item from "./ToDoItem/ToDoItem";

const initialToDoList = [{
    id: 1,
    content: 'do some stuff',
    isCompleted: false,
},
{
    id: 2,
    content: 'do another stuff',
    isCompleted: true,
},
{
    id: 3,
    content: 'control from slice',
    isCompleted: false,
}]

export const toDoListSlice = createSlice({
    name: 'toDoList',
    initialState: {
        value: initialToDoList,
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = {
                id: Date.now(),
                content: action.payload,
                isCompleted: false,
            }
            state.value.push(newItem)
        },

        removeItem: (state, action) => ({
            ...state, 
            value: state.value.filter(remove => remove.id !== action.payload)
        }),

        updateItem: (state, action) => ({
            ...state,
            value: state.value.map((item) => (item.id === action.payload.id ? { ...action.payload } : item))
        }),

        

        // toggleFilter: (state, action) => ({
            
        //     ...state,
        //     value: action.payload === 'Completed' ? state.value.filter(item => item.isCompleted) :
        //             action.payload === 'Active' ? state.value.filter(item => !item.isCompleted) :
        //             state.value
        // }),

        // toggleFilter: (state, action) => ({
            
        //     ...state,
        //     value: state.value.filter(item => item.isCompleted === true)
        // }),
    },
})

export const {addItem, removeItem, toggleFilter, updateItem} = toDoListSlice.actions;
export default toDoListSlice.reducer