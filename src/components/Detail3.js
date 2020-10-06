import React from 'react';
import RollButton from './RollButton';
import projects from './data/Section3ProjectsData';

const Detail3 = (props) => {
    const roll =() => {
        props.setVisible(false);
        props.setBtn(false);
    }
    const i = props.detailContent;
    const data = projects[i];

    // if (data.tech > 0) {
    //     data.tech.map(technology)
    // }

    return (
        <div className={`detail ${props.isVisible ? 'unroll' : ''}`}>
            <RollButton btn={props.btn} roll={roll}/> 
            <div className='detail3'>
                <img src={data.photo} alt={data.name}></img>
                <div className='description'>
                    <h3>{data.name}</h3>
                    <div>{data.desc}</div>
                    <ul className='techno-list'>
                        {data.tech.map(item => (
                                <li className='techno-item' key={item}> {item} </li>    
                        ))}
                    </ul>
                    <p>You can see it <a href={data.view} target="_blank" rel="noopener noreferrer" className='link'> here</a>, 
                    or you can view the code <a href={data.code} target="_blank" rel="noopener noreferrer" className='link'>there</a>. </p>
                </div>   
            </div>
        </div>
    )
}

export default Detail3;