import React from 'react';
import {Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const element = <FontAwesomeIcon icon = {faArrowUp} />

    return (
        <div className='footer-container'>
            <div className='footer-item'>
            </div>
            <Link  to='hello' duration={200} smooth={true} className='footer-link'> 
                <button className='footer-up-btn'>{element} UP </button>
            </Link>
        </div>
    )
};

export default Footer;