import styles from "./SummaryBar.module.scss"
import { useDispatch } from "react-redux";
import { toggleFilter } from "./../ToDoList/toDoListSlice"
import { useState } from "react";

const SummaryBar = ({ itemsCount }) => {

    const Filter = {
        All: 'All',
        Completed: 'Completed',
        Active: 'Active'
    }

    const dispatch = useDispatch();
    const [filter, setFilter] = useState(Filter.All);

    const handleFilter = (filter) => {
        dispatch(toggleFilter(filter));
    }

    const filterCompleted = () => {
        setFilter(Filter.Completed)
        handleFilter(filter);
    }

    const filterActive = () => {
        setFilter(Filter.Active)
        handleFilter(filter);
    }

    const filterAll = () => {
        setFilter(Filter.All)
        handleFilter(filter);
    }

    return (
        <div className={styles.summaryBar}>
            <span className={styles.summaryBarItem}>Items: {itemsCount}</span>
            <span onClick={filterCompleted} className={styles.summaryBarSort}>Completed</span>
            <span onClick={filterActive} className={styles.summaryBarSort}>Active</span>
            <span onClick={filterAll} className={styles.summaryBarSort}>All</span>
        </div>
    )
}

export default SummaryBar;