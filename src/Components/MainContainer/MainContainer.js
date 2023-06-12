import { React, useState } from "react"

import Header from "../Header/Header"
import NewItemBar from "../NewItemBar/NewItemBar"
import ToDoList from "../ToDoList/ToDoList"
import styles from "./MainContaine.module.scss"

const MainContainer = () => {

    const [toDoList, setToDoList] = useState(['item', 'item2'])
    
    function addItem(item){
        setToDoList(prevState => [...prevState, item])        
    }

    function removeItem(item){        
        setToDoList(prevState => {
            return prevState.filter(remove => remove !== item)
        })
    }

    function toggleDisplay(){
        setToDoList(prevState => {
            return prevState.filter()
        })
    }
    
    return(
        <div className={styles.container}>
            <Header/>
            <NewItemBar addItemHandler={addItem}/>   
            <ToDoList toDoList={toDoList} onDeleteHandler={removeItem}/>
        </div>
    )
}

export default MainContainer;