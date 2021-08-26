import React, {Component} from 'react'
import './Header.css';

class Header extends Component {
    render() {
        const {number} =this.props;
        return (
            <div className='header'>
                <h2>Карта игра 108</h2>
                <p className='client'>Число игрока {number}</p>
            </div>
        )
    }
}

export default Header;