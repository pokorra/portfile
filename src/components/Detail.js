import React from 'react';
// import {Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import fewThings from './section1txt';
import data from './InnerDetail1';

const Detail = (props) => {
    const element = <FontAwesomeIcon icon = {faArrowUp} />
    const text = fewThings;
    const roll =() => {
        props.setVisible(false);
        props.setBtn(false);
}

    {/* const TheComponent = components[props.first] */}

    return (
        <div className={`detail ${props.isVisible ? 'unroll' : ''}`}>
                    <button onClick={roll} className={`arrow ${props.btn ? '' : 'hidden'}`}>{element} hide</button> 
             <div className='detail1'> 
                {props.detailContent} 
                {text[props.detailContent-1]}
                
            </div>
            
        </div>
    )
}

export default Detail;