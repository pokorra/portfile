import React from 'react';
import {Link } from 'react-scroll';

const ContentItem = (props) => {
    const setVisible = props.setVisible;
    const isVisible = props.isVisible;
    const number = props.number;
    const setDetailContent = props.setDetailContent;

    const unRoll = () => {
        
        if (!isVisible) {
            setVisible(true);
        }
        setDetailContent(number);
        // <Link to={props.id} smooth={true} duration={200}></Link>
    }
    
    return (
       <Link to={props.id} smooth={true} duration={200}
            className='content-item'
            style={{width: props.width, backgroundColor: props.color, color: props.font}}>
            <div className='content-inner-div' onClick={unRoll}>
                    {props.text}
            
            </div>
        </Link>
        
           
      
       
    )
}

export default ContentItem;