import React from 'react';

const Title = (props) => {
    const title = props.title.toUpperCase();
    return ( 
        <h3 className='title'>
            {title}
        </h3>
    )
}

export default Title;