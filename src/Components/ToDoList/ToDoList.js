import ToDoItem from "./ToDoItem/ToDoItem"
import SummaryBar from "../SummaryBar/SummaryBar";
import styles from "./ToDoList.module.scss"

import { useSelector } from "react-redux";

const ToDoList = () => {

    const toDoList = useSelector((state) => state.toDoList.value);
    
    const list = toDoList.map(toDoItem => {
        return (
            <ToDoItem
                toDoItem={toDoItem}
            />
        )
    });

    return (
        <div className={styles.module}>
            {list}
            <SummaryBar itemsCount={list.length} />
            <div onClick={()=> console.log(toDoList)} >CLICK</div>
        </div>
    )
}

export default ToDoList;