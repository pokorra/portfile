import React from 'react';
import ContentItem from './ContentItem';
import fewThings from './section1txt';

const Content1 = (props) => {
    
    const text = fewThings;
    // console.log(text);
    // console.log(text[0]);

    
    return (
        <div className="content">
            <ContentItem 
                text="who am I" color="#ff5757" width="54%" font="white"
                setVisible={props.setVisible} isVisible={props.isVisible}
                btn={props.btn} setBtn={props.setBtn} />
            <ContentItem 
                text="my work experiences" color="#ccccce" width="45%" font="black"
                setVisible={props.setVisible} isVisible={props.isVisible}
                btn={props.btn} setBtn={props.setBtn} />
        </div>
    )
}

export default Content1;