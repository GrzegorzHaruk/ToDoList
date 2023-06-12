import { useState } from "react";
import styles from "./NewItemBar.module.scss"

const NewItemBar = ({ addItemHandler }) => {

    const [toDoItem, setToDoItem] = useState('');
    
    const onChangeHandler = (e) => {
        setToDoItem(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addItemHandler(toDoItem);
    };
    
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="your new item"
                className={styles.bar}
                onChange={onChangeHandler}
                value={toDoItem}
            />
        </form>
    )
}

export default NewItemBar;