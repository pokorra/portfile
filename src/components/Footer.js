import React from 'react';
import {Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const element = <FontAwesomeIcon icon = {faArrowUp} />
    function change(){
        // this.style.background = "pink";
        console.log('klik');
    }
    return (
        <div className='footer-container'>
            <div className='footer-item'>
                <div className='footer-item-inner' onClick={change}></div>
            </div>
            <Link  to='hello' duration={200} smooth={true} className='footer-link'> 
                <button className='footer-up-btn'>{element} UP </button>
            </Link>
        </div>
    )
};

export default Footer;