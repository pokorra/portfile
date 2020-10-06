import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';

const RollButton = (props)=> {
    const element = <FontAwesomeIcon icon = {faArrowUp} />
    const roll = props.roll;
    return (
        <button onClick={roll} className={`arrow ${props.btn ? '' : 'hidden'}`}>{element} hide</button> 
    )
}

export default RollButton;