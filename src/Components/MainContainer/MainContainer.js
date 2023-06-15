import Header from "../Header/Header"
import NewItemBar from "../NewItemBar/NewItemBar"
import ToDoList from "../ToDoList/ToDoList"
import styles from "./MainContainer.module.scss"

const MainContainer = () => {

    return (
        <div className={styles.container}>
            <Header />
            <NewItemBar />
            <ToDoList/>
        </div>
    )
}

export default MainContainer;