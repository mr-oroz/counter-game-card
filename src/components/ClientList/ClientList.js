import React, { Component } from 'react';
import './ClientList.css';

class ClientList extends Component {
    constructor() {
        super()
        this.state = {
            inputNumber: ""
        }
    }

    onChangeNumber = (input) => {
        this.setState({ inputNumber: input })
    }

    
    onAddPoint = (inputNumber, index) => {
        this.props.onAddNewPountClient(inputNumber, index)
        this.setState({inputNumber: ''})
    }

    render() {
        const { client, onDeleteClient } = this.props;
        const {inputNumber} = this.state;
        return (
            <>
                return (
                <table className="table table-dark table-striped client-list">
                    <thead>
                        <tr>
                            <th scope="col">№</th>
                            <th scope="col">Имя игрока</th>
                            <th scope="col">Очко игрока</th>
                            <th scope="col">Добавить очко</th>
                            <th scope="col">Удалить игрока</th>
                        </tr>
                    </thead>
                    {
                        client.map((elem, index) => {
                            return (
                                <tbody key={index}>
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{elem.name}</td>
                                        <td>{elem.point}</td>
                                        <td className='point'>
                                            <input
                                                onChange={(e) => this.onChangeNumber(e.target.value)}
                                                placeholder='очко...'
                                                className='input__point'
                                                type="number" />
                                            <button
                                                onClick = {() => this.onAddPoint(inputNumber, index)}
                                                className='btn__point'>
                                                Добавить
                                            </button>
                                        </td>
                                        <td>
                                            <span
                                                onClick={() => onDeleteClient(index)}
                                                className='delete'>Удалить</span>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </table>
                )
            </>
        );
    }
}

export default ClientList;