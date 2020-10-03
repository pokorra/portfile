import React, {useState} from 'react';

const Menu = () => {
    const [visibleMenu, setVisibleMenu] = useState(false);
    const unroll = () => {
        visibleMenu ? setVisibleMenu(false) : setVisibleMenu(true);
    }

    return (
        <>
            <h3 className='unroll-menu' onClick={unroll}>*** menu ***</h3>
            <ul className='menu-option'>
                <li>about me</li>
                <li>technologies</li>
                <li>projects</li>
                <li>contact</li>
            </ul>
        </>
        
    );
}

export default Menu;