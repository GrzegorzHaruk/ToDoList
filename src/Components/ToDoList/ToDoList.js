import ToDoItem from "./ToDoItem/ToDoItem"
import SummaryBar from "../SummaryBar/SummaryBar";
import styles from "./ToDoList.module.scss"

const ToDoList = ({ toDoList, onDeleteHandler }) => {

    const list = toDoList.map(toDoItem => {
        return (
            <ToDoItem
                toDoItem={toDoItem}
                onDelete={onDeleteHandler}
            />
        )
    });

    return (
        <div className={styles.module}>
            {list}
            <SummaryBar itemsCount={list.length} />
        </div>
    )
}

export default ToDoList;