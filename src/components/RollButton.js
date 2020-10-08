import React from 'react';
import {Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';

const RollButton = (props)=> {
    const element = <FontAwesomeIcon icon = {faArrowUp} />
    const roll = props.roll;
    return (
        <Link onClick={roll} to='hello' smooth={true} duration={100}
             className={`arrow ${props.btn ? '' : 'hidden'}`}
             
        > 
            <div >{element} hide</div> 
        </Link>
        
    )
}

export default RollButton;