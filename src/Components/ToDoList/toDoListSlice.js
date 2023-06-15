import { createSlice } from "@reduxjs/toolkit";
import { GetFilter, GetList, SetFilter, SetList } from "../../Repositories/ToDoListRepository";

const initialToDoList = [{
    id: 1,
    content: 'active',
    isCompleted: false,
},
{
    id: 2,
    content: 'completed',
    isCompleted: true,
},
{
    id: 3,
    content: 'active',
    isCompleted: false,
}]

export const toDoListSlice = createSlice({
    name: 'toDoList',
    initialState: {
        toDoList: GetList(),        
        filter: GetFilter(),
    },
    reducers: {
        addItem: (state, action) => {
            const newItem = {
                id: Date.now(),
                content: action.payload,
                isCompleted: false,
            }
            state.toDoList.push(newItem)
            SetList(state.toDoList);
        },        
        removeItem: (state, action) => {
            console.log(action.payload)
            state.toDoList = state.toDoList.filter(remove => remove.id !== action.payload)
            SetList(state.toDoList);
        },
        updateFilter: (state, action) => {            
            state.filter = action.payload;  
            SetFilter(state.filter);
        },
        toggleCompleted: (state, action) => {
            
            const index = state.toDoList.findIndex(item=>item.id === action.payload.id);
            state.toDoList[index].isCompleted = !state.toDoList[index].isCompleted;
            SetList(state.toDoList);
        },
    },
})

export const {addItem, removeItem, updateItem, updateFilter, toggleCompleted} = toDoListSlice.actions;
export default toDoListSlice.reducer