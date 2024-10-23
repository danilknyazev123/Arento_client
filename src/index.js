import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import AddStore from "./store/AddStore";

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        add: new AddStore()
    }}>
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);