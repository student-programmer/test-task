import React from 'react';
import './App.css';
import Logo from './components/Logo/Logo';
import Main from './components/Main/Main';
import Projects from './components/Projects/Projects';

function App() {
    return (
        <div className='App'>
            <Logo />
            <Projects />
            <div className='main_wrapper'>
                {' '}
                <Main />
            </div>
        </div>
    );
}

export default App;
