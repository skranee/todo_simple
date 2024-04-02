import React, {useContext} from 'react';
import MainWindow from "./todoList/mainWindow";
import Dropdown from "./todoList/todosDropdown/dropdown";
import {observer} from "mobx-react-lite";
import {Context} from "./index";

function App() {
    const {globalStore} = useContext(Context);
    const clear = (): void => {
        const empty: string[] = [];
        globalStore.setToDos(empty);
    }

  return (
    <div className='background'>
        <MainWindow />
        <Dropdown />
        <button
            className='btnSubmit'
            onClick={clear}
            style={{height: '5%'}}
        >
            Clear
        </button>
    </div>
  );
}

export default observer(App);
