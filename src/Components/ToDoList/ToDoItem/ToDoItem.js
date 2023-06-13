import { useState } from "react";
import styles from "./ToDoItem.module.scss"
import { useDispatch } from "react-redux";
import { removeItem, updateItem } from "../toDoListSlice";

const Item = ({ toDoItem }) => {
    const dispatch = useDispatch();
    const [item, setToDoItem] = useState(toDoItem);

    const onDeleteHandler = () => {
        dispatch(removeItem(toDoItem.id))
    }
    
    const hadleTaskCompleted = () => {

        const newItem = {
            ...item,
            isCompleted: !toDoItem.isCompleted,
        }

        setToDoItem(newItem)
        console.log(newItem);
        dispatch(updateItem(newItem));
    }

    return (
        <div className={item.isCompleted? styles.itemCompleted : styles.item}>
            <button onClick={hadleTaskCompleted} className={styles.completedBtn}></button>
            <p className={item.isCompleted ? styles.itemContentCompleted : styles.itemContent}>{toDoItem.content}</p>
            <button onClick={onDeleteHandler} className={styles.deleteBtn}></button>
        </div>
    )
}

export default Item;