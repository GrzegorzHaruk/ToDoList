import React, { useState } from "react";
import ToDoItem from "./ToDoItem/ToDoItem"
import SummaryBar from "../SummaryBar/SummaryBar";
import styles from "./ToDoList.module.scss"

const ToDoList = ({ toDoList, onDeleteHandler }) => {

    const list = toDoList.map(item => {
        return (
            <ToDoItem
                value={item}
                onDelete={onDeleteHandler}
                isCompleted={false}
            />
        )
    });

    return (
        <div className={styles.module}>
            {list}
            <SummaryBar itemsCount={list.length} />
        </div>
    )
}

export default ToDoList;