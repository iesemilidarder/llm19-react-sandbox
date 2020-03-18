import React from 'react';
import Menu from "./components/Menu";
import logo from './logo.svg';
import './App.css';

function App() {
    let title = "Hola don pepito!";
    fetch("data/appData.json")
        .then(data => data.json())
        .then(data => {
            console.log(data);
            title = data.title;
        });
    return (
        <div className="App">
            <header className="App-header">
                <Menu/>
                <h1>{title}</h1>
                <img src={logo} className="App-logo" alt="logo" width={50}/>
            </header>
        </div>
    );
}

export default App;
