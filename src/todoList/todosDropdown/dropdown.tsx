import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import { FaRegFileAlt } from "react-icons/fa";

function Dropdown() {
    const {globalStore} = useContext(Context);
    const todos = globalStore.todos;

    return (
        <div className='listContainer'>
            {todos.map(item => (
                <li className='listItemContainer'>
                    <span className='listItemText'>
                        <FaRegFileAlt style={{color: 'rgba(75, 158, 255, 1)'}} /> {item}
                    </span>
                </li>
            ))}
        </div>
    )
}

export default observer(Dropdown);