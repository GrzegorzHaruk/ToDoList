import styles from "./Header.module.scss"

export default function Header() {
    return (
        <header>
            <h1 className={styles.header}>
                To Do App
            </h1>
        </header>
    )
}