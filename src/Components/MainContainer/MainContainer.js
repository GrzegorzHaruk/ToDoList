import { React, useState } from "react"

import Header from "../Header/Header"
import NewItemBar from "../NewItemBar/NewItemBar"
import ToDoList from "../ToDoList/ToDoList"
import styles from "./MainContaine.module.scss"

const MainContainer = () => {

    const [toDoList, setToDoList] = useState(
        [{
            id: 1,
            content: 'item1',
            isCompleted: false,
        },
        {
            id: 2,
            content: 'item2',
            isCompleted: true,
        },
        {
            id: 3,
            content: 'test',
            isCompleted: false,
        }]
    )

    function addItem(itetoDoItemContent) {
        const id = Date.now();
        setToDoList(prevState => [...prevState, { id: id, content: itetoDoItemContent, isCompleted: false}])
    }

    function removeItem(toDoItem) {
        setToDoList(prevState => {
            return prevState.filter(remove => remove.id !== toDoItem.id)
        })
    }

    return (
        <div className={styles.container}>
            <Header />
            <NewItemBar addItemHandler={addItem} />
            <ToDoList toDoList={toDoList} onDeleteHandler={removeItem} />
        </div>
    )
}

export default MainContainer;