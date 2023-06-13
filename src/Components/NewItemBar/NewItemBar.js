import { useState } from "react";
import styles from "./NewItemBar.module.scss"

import { useDispatch } from "react-redux"; 
import { addItem } from "../ToDoList/toDoListSlice";

const NewItemBar = () => {

    const [toDoItemContent, setToDoItemContent] = useState('');
    const dispatch = useDispatch();
    
    const onChangeHandler = (e) => {
        setToDoItemContent(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(addItem(toDoItemContent))
    };
    
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="your new item"
                className={styles.bar}
                onChange={onChangeHandler}
                value={toDoItemContent}
            />
        </form>
    )
}

export default NewItemBar;