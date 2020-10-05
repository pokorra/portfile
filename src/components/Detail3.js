import React from 'react';
import {Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';

const Detail3 = (props) => {
    const element = <FontAwesomeIcon icon = {faArrowUp} />

    const roll =() => {
        props.setVisible(false);
        props.setBtn(false);
}


    return (
        <div className={`detail ${props.isVisible ? 'unroll' : ''}`}>
            <Link to='title3' smooth={true} duration={200}>
            <button onClick={roll} className={`arrow ${props.btn ? '' : 'hidden'}`}>{element}</button>
            </Link>
             
             <div className='detail1'> {props.detailContent} </div>
        </div>
    )
}

export default Detail3;