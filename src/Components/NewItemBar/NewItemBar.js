import { useState } from "react";
import styles from "./NewItemBar.module.scss"

const NewItemBar = ({ onSubmitHandler }) => {

    const [toDo, setToDo] = useState('');
    
    const onChangeHandler = (e) => {
        setToDo(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitHandler(toDo);
    };
    
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="your new item"
                className={styles.bar}
                onChange={onChangeHandler}
                value={toDo}
            />
        </form>
    )
}

export default NewItemBar;