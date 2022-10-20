import React,  { createContext }  from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './App';
import Row from './store/MainStore';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

type MainContext = {
row: Row
}

export const Context = createContext<MainContext >({} as MainContext)
root.render(
  <Context.Provider value={{
    row: new Row(),

  }}> 
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Context.Provider>,
);


