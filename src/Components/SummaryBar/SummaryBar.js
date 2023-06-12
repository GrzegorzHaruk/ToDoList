import styles from "./SummaryBar.module.scss"

const SummaryBar = ({ itemsCount }) => {
    return (
        <div className={styles.summaryBar}>
            <span className={styles.summaryBarItem}>Items: {itemsCount}</span>
            <span className={styles.summaryBarSort}>Completed</span>
            <span className={styles.summaryBarSort}>Active</span>
            <span className={styles.summaryBarSort}>All</span>
        </div>
    )
}

export default SummaryBar;