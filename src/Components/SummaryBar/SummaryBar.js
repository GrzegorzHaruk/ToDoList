import styles from "./SummaryBar.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "./../ToDoList/toDoListSlice"
import Filter from "./Filter";

const SummaryBar = ({ itemsCount }) => {
    const dispatch = useDispatch();

    const handleFilter = (filter) => {
        dispatch(updateFilter(filter));
    }

    return (
        <div className={styles.summaryBar}>
            <span className={styles.summaryBarItem}>Items: {itemsCount}</span>
            <span onClick={() => handleFilter(Filter.Completed)} className={styles.summaryBarSort}>Completed</span>
            <span onClick={() => handleFilter(Filter.Active)} className={styles.summaryBarSort}>Active</span>
            <span onClick={() => handleFilter(Filter.All)} className={styles.summaryBarSort}>All</span>
        </div>
    )
}

export default SummaryBar;