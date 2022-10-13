import React,  { createContext }  from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './App';
import MainStore from './store/MainStore';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

type MainContext = {
mainStore: MainStore
}

export const Context = createContext<MainContext >({} as MainContext)
root.render(
  <Context.Provider value={{
    mainStore: new MainStore(),

  }}> 
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Context.Provider>,
);


