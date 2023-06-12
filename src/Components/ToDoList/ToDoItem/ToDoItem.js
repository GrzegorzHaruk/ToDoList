import { useState } from "react";
import styles from "./ToDoItem.module.scss"

const Item = ({toDoItem, onDelete }) => {

    const onDeleteHandler = () => {
        onDelete(toDoItem);
    }

    const [completed, setCompleted] = useState(toDoItem.isCompleted);

    const hadleTaskCompleted = () => {
        setCompleted(prevState => !prevState);
    }
    
    return (
        <div className={completed ? styles.itemCompleted : styles.item}>
            <button onClick={hadleTaskCompleted} className={styles.completedBtn}></button>
            <p className={completed? styles.itemContentCompleted : styles.itemContent}>{toDoItem.content}</p>
            <button onClick={onDeleteHandler} className={styles.deleteBtn}></button>
        </div>
    )
}

export default Item;