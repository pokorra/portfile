import React from 'react';
import {Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';

const RollButton = ({btn, roll})=> {
    const element = <FontAwesomeIcon icon = {faArrowUp} />

    return (
        <Link onClick={roll} to='hello' duration={100} smooth={true}
             className={`arrow ${btn ? '' : 'hidden'}`}>
            <button >{element} hide</button> 
        </Link>   
    )
}

export default RollButton;