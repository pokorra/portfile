import React from 'react';
import {Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';

const RollButton = ({btn, roll})=> {
    const element = <FontAwesomeIcon icon = {faArrowUp} />

    return (
        <Link onClick={roll} to='hello' duration={100}
             className={`arrow ${btn ? '' : 'hidden'}`}>
            <div >{element} hide</div> 
        </Link>   
    )
}

export default RollButton;