import React from 'react';
import {Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import fewThings from './section1txt';

const Detail1 = (props) => {
    const element = <FontAwesomeIcon icon = {faArrowUp} />
    const text = fewThings;
    const roll =() => {
        props.setVisible(false);
        props.setBtn(false);
}


    return (
        <div className={`detail ${props.isVisible ? 'unroll' : ''}`}>
                <Link to='title1' smooth={true} duration={200}> 
                    <button onClick={roll} className={`arrow ${props.btn ? '' : 'hidden'}`}>{element}</button> 
                </Link> 
             <div className='detail1'> 
                {props.detailContent} 
                {text[props.detailContent-1]}
            </div>
        </div>
    )
}

export default Detail1;