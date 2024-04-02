import React, {useContext, useEffect, useState} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

function MainWindow() {
    const {globalStore} = useContext(Context);
    const [phrase, setPhrase] = useState<string>('');
    const [todos, setToDos] = useState<string[]>(globalStore.todos);

    useEffect(() => {
        if(!globalStore.todos.length) {
            setToDos([]);
        }
    }, [globalStore.todos, ])

    const handleChange = (event: any): void => {
        setPhrase(event.target.value);
    }

    const handleSet = (thing: string): void => {
        if(phrase.trim()) {
            setToDos(prev => [...prev, thing]);
            globalStore.setToDos([...todos, thing]);
        }
        setPhrase('');
    }

    const handleKeyDown = (event: any): void => {
        if(event.key === 'Enter') {
            handleSet(phrase);
        }
    }

    return (
        <div className='mainWindow'>
            <span className='todo_text'>
                Things To Do
            </span>
            <input
                className='todo_input'
                type='text'
                value={phrase}
                onChange={(event) => handleChange(event)}
                onKeyDown={(event) => handleKeyDown(event)}
            />
            <button className='btnSubmit' onClick={() => handleSet(phrase)}>
                Proceed
            </button>
        </div>
    )
}

export default observer(MainWindow);