import React from 'react';
import RollButton from './RollButton';
import aboutPP from './data/section1data';


const Detail1 = ({isVisible, setVisible, btn, setBtn, detailContent}) => {
   
    const roll =() => {
        setVisible(false);
        setBtn(false);
    }
   const i = detailContent;
   const data = aboutPP[i];

    return (
        <div className={`detail ${isVisible ? 'unroll' : ''}`}>
            <RollButton btn={btn} roll={roll}/>
            <div className='detail1'> 
                {data.name === 'about' ? (
                    <div className='about-pp'> 
                        <div className='photo-me'>
                            <div className='photo-op'> </div> 
                        </div>
                        <div className='desc-me'>
                            <p>{data.content} </p>
                            <p>{data.about} </p>
                            </div>
                    </div>                  
                ) : (
                    <div className='works'>
                        <h3 className='works-intro'>{data.content} </h3>
                        <ul className='works-list'>
                            {data.list.map(item=> (
                                <li className='works-item'>
                                    <div className='works-item-data'>
                                        <p className='w-i-name'>{item.place}</p>
                                        <p className='w-i-date'>{item.date}</p>
                                    </div>
                                    <p className='w-i-desc'>{item.desc}</p>
                                 </li>
                            ))}
                        </ul>
                        <div className='works-git'>
                             <a href={data.gitadd} target="_blank" rel="noopener noreferrer"> <div className='git-pic'></div></a>
                            <p> {data.git}</p>
                         </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Detail1;