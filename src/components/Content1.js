import React from 'react';
import ContentItem from './ContentItem';


const Content1 = (props) => {

    
    return (
        <div className="content">
            <ContentItem 
                text="who am I" color="#ff5757" width="54%" font="white"
                setVisible={props.setVisible} isVisible={props.isVisible}
                setDetailContent={props.setDetailContent} number="1" id="title1"
                />
            <ContentItem 
                text="my work experiences" color="#ccccce" width="45%" font="black"
                setVisible={props.setVisible} isVisible={props.isVisible}
                setDetailContent={props.setDetailContent} number="2" id="title1"
                />
        </div>
    )
}

export default Content1;