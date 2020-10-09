import React from 'react';
import RollButton from './RollButton';
import aboutPP from './data/section1data';

const Detail1 = (props) => {
   
    // const text = fewThings;
    const roll =() => {
        props.setVisible(false);
        props.setBtn(false);
    }
   const i = props.detailContent;
   console.log(i);
   const data = aboutPP[i];

    return (
        <div className={`detail ${props.isVisible ? 'unroll' : ''}`}>
            <RollButton btn={props.btn} roll={roll}/>
            <div className='detail1'> 
                {data.name === 'about' ? (
                    <div className='about-pp'> 
                        <div className='photo-me'>
                            <div className='photo-op'> </div> </div>
                        <div className='desc-me'>
                            <p>{data.content} </p>
                            <p>{data.about} </p>
                            </div>
                    </div>
                   
                ) : (
                    <div className='works'>

                    </div>
                )}
                {/* <div>{data.name}</div> */}
                {/* {text[props.detailContent-1]} */}
            </div>
        </div>
    )
}

export default Detail1;