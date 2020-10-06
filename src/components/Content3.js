import React from 'react';
import ContentItem from './ContentItem';

const Content3 = (props) => {

    return (
        <div className="content">
            <ContentItem 
                text="react quiz game" color="#38b6ff" width="64%" font="white"
                setVisible={props.setVisible} isVisible={props.isVisible}
                setDetailContent={props.setDetailContent} number="0"
                />
            <ContentItem 
                text="start helping" color="#ffde59" width="35%" font="black"
                setVisible={props.setVisible} isVisible={props.isVisible}
                setDetailContent={props.setDetailContent} number="1"
                />
            <ContentItem 
                text="tasks to do" color="#545454" width="42%" font="white"
                setVisible={props.setVisible} isVisible={props.isVisible}
                setDetailContent={props.setDetailContent} number="2"
                />
            <ContentItem 
                text="best shop" color="#ccccce" width="26%" font="black"
                setVisible={props.setVisible} isVisible={props.isVisible}
                setDetailContent={props.setDetailContent} number="3"
                />
            <ContentItem 
                text="zombie game" color="#ff5757" width="30%" font="white"
                setVisible={props.setVisible} isVisible={props.isVisible}
                setDetailContent={props.setDetailContent} number="4"
                />
        </div>
    )
}

export default Content3;