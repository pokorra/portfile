import React from 'react';
import RollButton from './RollButton';


const Detail2 = (props) => {
    const roll =() => {
        props.setVisible(false);
        props.setBtn(false);
}

    return (
        <div className={`detail ${props.isVisible ? 'unroll' : ''}`}>
            <RollButton btn={props.btn} roll={roll}/>
            <div className='detail1'> {props.detailContent} </div>
        </div>
    )
}

export default Detail2;