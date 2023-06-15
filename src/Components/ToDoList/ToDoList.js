import ToDoItem from "./ToDoItem/ToDoItem"
import SummaryBar from "../SummaryBar/SummaryBar";
import styles from "./ToDoList.module.scss"
import { useSelector } from "react-redux";

const ToDoList = () => {
    const toDoList = useSelector((state) => state.toDoList.toDoList);
    const filter = useSelector((state) => state.toDoList.filter);
    
    const FilterList = (filter) => {
        switch (filter) {
            case 'All': {
                return toDoList;
            }
            case 'Completed': {
                return toDoList.filter(item => item.isCompleted === true)
            }
            case 'Active': {
                return toDoList.filter(item => item.isCompleted === false)
            }
            default: {
                return toDoList;
            }
        }
    }

    const filteredList = FilterList(filter);    

    const elementsList = filteredList
        .map(toDoItem => {
            return (
                <ToDoItem
                    key={toDoItem.id}
                    toDoItem={toDoItem}
                />
            )
        });

    return (
        <div className={styles.module}>
            {elementsList}
            <SummaryBar itemsCount={elementsList.length} />            
        </div>
    )
}

export default ToDoList;