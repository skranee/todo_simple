import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

function Dropdown() {
    const {globalStore} = useContext(Context);
    const todos = globalStore.todos;

    return (
        <div className='listContainer'>
            {todos.map(item => (
                <li className='listItem'>
                    {item}
                </li>
            ))}
        </div>
    )
}

export default observer(Dropdown);