import React from 'react';
import {Link } from 'react-scroll';

const ContentItem = ({text, color, width, font, setVisible, isVisible, setDetailContent, number, id}) => {

    const unRoll = () => {
        if (!isVisible) {
            setVisible(true);
        } 
        setDetailContent(number);
    }

   
    
    return (
       <Link to={id} smooth={true} duration={200}
            className='content-item'
            style={{width: width, backgroundColor: color, color: font}}>
            <div className='content-inner-div' onClick={unRoll} > {text}            
            </div>
        </Link>  
    )
}

export default ContentItem;