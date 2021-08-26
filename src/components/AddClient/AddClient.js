import React, { Component } from 'react';
import './AddClient.css';

class AddClient extends Component {
    constructor () {
        super()
        this.state = {
            text: ''
        }
    }
    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAddNewClient(this.state.text)
        this.setState({text: ''})
    }
    onChangeText = (input) => {
        this.setState({text: input})
    }

    render() {
        return (
            <form 
                onSubmit={this.onSubmit}
                className='addBlock'>
                <input
                    value={this.state.text}
                    onChange={(e) => this.onChangeText(e.target.value)}
                    className="input__add"
                    type="text"
                    placeholder='Добавить игрока...' />
                <button
                    type='submit'
                    className='btn__add'>
                    Добавить
                </button>
            </form>
        );
    }
}

export default AddClient;