import React from 'react';
import './Menu.css';
import Button from '../Button/Button.jsx';

import Logo from '../../assets/images/Logo.png';

function Menu() {

    return (
        <nav className='Menu'>
            <a href='/'>
                <img className='Logo' src={Logo} alt="Logo" />
            </a>

            <Button className='ButtonLink' href='/'>Novo vídeo</Button>
        </nav>
    );

}

export default Menu;