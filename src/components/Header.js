import React from 'react';
import Title from './Title';
import Menu from './Menu';

const Header = () => {

    return (
        <header className='header'>
            <Title/>
            <Menu/>
        </header>
    );
}

export default Header;