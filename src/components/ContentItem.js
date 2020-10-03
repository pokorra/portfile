import React from 'react';

const ContentItem = (props) => {
    const width = props.width;
    const color = props.color;
    const text = props.text;
    const font = props.font;

    return (
        <div className="content-item" style={{width: width, backgroundColor: color, color: font}}> {text} </div>
    )
}

export default ContentItem;