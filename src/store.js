import { configureStore } from '@reduxjs/toolkit'
import toDoListReducer from './Components/ToDoList/toDoListSlice'

export default configureStore({
  reducer: {
    toDoList: toDoListReducer,
  },
})