import React from 'react';
import RollButton from './RollButton';
import fewThings from './section1txt';

const Detail1 = (props) => {
   
    const text = fewThings;
    const roll =() => {
        props.setVisible(false);
        props.setBtn(false);
}


    return (
        <div className={`detail ${props.isVisible ? 'unroll' : ''}`}>
            <RollButton btn={props.btn} roll={roll}/>
            <div className='detail1'> 
                {props.detailContent} 
                {text[props.detailContent-1]}
            </div>
        </div>
    )
}

export default Detail1;