import React from 'react';
import ContentItem from './ContentItem';

const Content3 = ({isVisible, setVisible, setDetailContent}) => {
    const id = 'sec3';
    return (
        <div className="content">
            <ContentItem 
                text="animal collective" color="#38b6ff" width="57%" font="white"
                setVisible={setVisible} isVisible={isVisible}
                setDetailContent={setDetailContent} number="0" id={id}
                />
            <ContentItem 
                text="book promo quiz" color="#ffde59" width="42%" font="black"
                setVisible={setVisible} isVisible={isVisible}
                setDetailContent={setDetailContent} number="1" id={id}
                />
            <ContentItem 
                text="question game" color="#545454" width="42%" font="white"
                setVisible={setVisible} isVisible={isVisible}
                setDetailContent={setDetailContent} number="2" id={id}
                />
            <ContentItem 
                text="start helping" color="#ccccce" width="26%" font="black"
                setVisible={setVisible} isVisible={isVisible}
                setDetailContent={setDetailContent} number="3" id={id}
                />
            <ContentItem 
                text="best shop" color="#ff5757" width="30%" font="white"
                setVisible={setVisible} isVisible={isVisible}
                setDetailContent={setDetailContent} number="4" id={id}
                />
        </div>
    )
}

export default Content3;