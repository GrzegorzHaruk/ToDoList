import { useState } from "react";
import styles from "./ToDoItem.module.scss"

const Item = ({ value, isCompleted, onDelete }) => {

    const onDeleteHandler = () => {
        onDelete(value);
    }

    const [completed, setCompleted] = useState(isCompleted);

    const hadleTaskCompleted = () => {
        setCompleted(prevState => !prevState);
        console.log(completed)
    }

    return (
        <div className={completed ? styles.itemCompleted : styles.item}>
            <button onClick={hadleTaskCompleted} className={styles.completedBtn}></button>
            <p className={completed? styles.itemContentCompleted : styles.itemContent}>{value}</p>
            <button onClick={onDeleteHandler} className={styles.deleteBtn}></button>
        </div>
    )
}

export default Item;