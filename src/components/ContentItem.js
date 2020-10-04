import React, {useState} from 'react';

const ContentItem = (props) => {
    const width = props.width;
    const color = props.color;
    const text = props.text;
    const font = props.font;

    const setVisible = props.setVisible;
    const isVisible = props.isVisible;


    const [item, setItem] = useState(false);

    const unRoll = () => {
        if (!isVisible) {
            setVisible(true);
        }
        if (!item) {
            setItem(0)
        }
        
        console.log(isVisible, item)
    }
    
    return (
        <div
            onClick={unRoll}      
            // className={`content-item ${item===0 ? 'content-item-clicked' : ''}`}
            className='content-item'
            style={{width: width, backgroundColor: color, color: font}}> 
            {text}
        </div>
    )
}

export default ContentItem;