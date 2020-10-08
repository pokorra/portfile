import React from 'react';
import ContentItem from './ContentItem';

const Content2 = (props) => {
    const id = 'sec2';
    return (
        <div className="content">
            <ContentItem 
                text="technologies I worked with" color="#3c5947" width="60%" font="white"
                setVisible={props.setVisible} isVisible={props.isVisible}
                setDetailContent={props.setDetailContent} number="0" id={id}
                />
            <ContentItem 
                text="soft skills packet" color="#545454" width="39%" font="white"
                setVisible={props.setVisible} isVisible={props.isVisible}
                setDetailContent={props.setDetailContent} number="1"  id={id}
                 />
        </div>
    )
}

export default Content2;