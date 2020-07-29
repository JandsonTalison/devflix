import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';
import Button from '../Button';

import Logo from '../../assets/images/Logo.png';

function Menu() {

    return (
        <nav className='Menu'>
            <Link to='/'>
                <img className='Logo' src={Logo} alt="Logo" />
            </Link>

            <Link to='/cadastro/video'>
                <Button className='ButtonLink'>Novo vídeo</Button>
            </Link>
        </nav>
    );

}

export default Menu;