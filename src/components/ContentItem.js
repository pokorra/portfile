import React from 'react';
// import {Link } from 'react-scroll';

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
    }
    
    return (
        
             <div
            onClick={unRoll}
            className='content-item'
            style={{width: props.width, backgroundColor: props.color, color: props.font}}> 
            {/* <Link to={props.id} smooth={true} duration={200}> */}
                 {props.text}
            {/* </Link> */}
           
        </div>
      
       
    )
}

export default ContentItem;