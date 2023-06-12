import { useState } from "react";
import styles from "./NewItemBar.module.scss"

const NewItemBar = ({ addItemHandler }) => {

    const [toDoItemContent, setToDoItemContent] = useState('');
    
    const onChangeHandler = (e) => {
        setToDoItemContent(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addItemHandler(toDoItemContent);
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