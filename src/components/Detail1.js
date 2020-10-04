import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';

const Detail1 = (props) => {
    const element = <FontAwesomeIcon icon = {faArrowUp} />

    const roll =() => {
        props.setVisible(false);
        props.setBtn(false);
}


    return (
        <div className={`detail ${props.isVisible ? 'unroll' : ''}`}>
             <button onClick={roll} className={`arrow ${props.btn ? '' : 'hidden'}`}>{element}</button>
             <div className='detail1'> </div>
        </div>
    )
}

export default Detail1;