import React from 'react';
import './App.css'
import AddClient from "./components/AddClient/AddClient";
import ClientList from "./components/ClientList/ClientList";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            client: []
        }
    }
    render() {
        return (
            <div className='App'>
                <AddClient/>
                <ClientList/>
            </div>
        );
    }
}

export default App;