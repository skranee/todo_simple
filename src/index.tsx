import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStore from "./globalStore/globalStore";

const globalStore = new GlobalStore();

export const Context = createContext({
    globalStore
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Context.Provider value={{
      globalStore
  }}>
    <App />
  </Context.Provider>
);
