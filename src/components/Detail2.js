import React from 'react';
import RollButton from './RollButton';
import skills from './data/section2data';

const Detail2 = (props) => {
    const roll =() => {
        props.setVisible(false);
        props.setBtn(false);
        }

    const i = props.detailContent;
    const skill = skills[i];
    const skillList = skill.list;
    // console.log(skillList);

    return (
        <div className={`detail ${props.isVisible ? 'unroll' : ''}`}>
            <RollButton btn={props.btn} roll={roll}/>
            <div className={skill.class}> 
                <h3>{skill.title}</h3>
                {skill.class==='technologies' ? (
                     <ul> {skillList.map( item => (
                        <li key={item.name}>                           
                            <img src={item.pic} alt={item.name}></img>
                            <p>{item.name}</p>
                        </li>
                    ))}
    
                    </ul>) : (
                        <ul>
                            {skillList.map(item =>(
                                <li key={item}>{item}</li>
                            ))}    
                        </ul>
                    )
                }
               
            </div>
        </div>
    )
}

export default Detail2;