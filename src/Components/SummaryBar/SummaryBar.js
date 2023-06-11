import styles from "./SummaryBar.module.scss"

const SummaryBar = ({itemsCount}) => {
    return(
        <div className={styles.summaryBar}>
            Items: {itemsCount}
        </div>
    )
}

export default SummaryBar;