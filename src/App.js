import React from 'react';
import Header from './components/Header';
import AddClient from './components/AddClient';
import ClientList from './components/ClientList';
import { Container } from 'react-bootstrap'
import './App.css';

class App extends React.Component {
    state = {
        client: []
    }

    componentDidMount() {
        this.setState({
            client: JSON.parse(localStorage.getItem('client')) || []
        })
    }
    componentDidUpdate(props, prev) {
        if (prev.state !== this.state.client) {
            localStorage.setItem('client', JSON.stringify(this.state.client))
        }
    }

    onAddNewClient = (body) => {
        if (body !== '') {
            const newItem = {
                name: body,
                point: 0,
            }
            this.setState(({ client }) => {
                const newArr = [...client, newItem];
                return {
                    client: newArr,
                }
            })
        } else {
            alert('Напиши имя игрока')
        }
    }

    onAddNewPountClient = (body, index) => {
        this.setState(({ client }) => {
            const item = client.findIndex((e, i) => i === index);
            const old = client[item];
            const newItem = { ...old, point: (+old.point + +body) === 108 ? 0 : (+old.point + +body) }
            const newArr = [...client.slice(0, index), newItem, ...client.slice(index + 1)];
            return {
                client: newArr
            }
        })
    }

    onDeleteClient = (idx) => {
        this.setState(({ client }) => {
            const index = client.findIndex((e, i) => i === idx);
            const newArr = [...client.slice(0, index), ...client.slice(index + 1)];
            return {
                client: newArr
            }
        })
    }

    render() {
        const { client } = this.state;
        const number = client.length
        return (
            <div className='App'>
                <Header number={number} />
                <Container>
                    <AddClient onAddNewClient={this.onAddNewClient} />
                    <ClientList
                        onAddNewPountClient={this.onAddNewPountClient}
                        onDeleteClient={this.onDeleteClient}
                        client={client} />
                </Container>
            </div>
        );
    }
}

export default App;