import React, {useState} from 'react';
import Title from './Title';
import Content1 from './Content1';
import Detail1 from './Detail1';

const Section1 = () => {
    const [isVisible, setVisible] = useState(false);
    const [btn, setBtn] = useState(false);
    const [text, setText] = useState('')
    // const toggleVisibility =() => {
    //     isVisible ? setVisible(false) : setVisible(true);
    // }

    return (
        <div className='section'>
            <Title title='1) few things about me'/>
            <Content1 
                isVisible={isVisible} setVisible={setVisible}
                btn={btn} setBtn={setBtn} />
            <Detail1 isVisible={isVisible} setVisible={setVisible} btn={btn} setBtn={setBtn}/>
        </div>
    )
};

export default Section1;