import React, {useState} from 'react';
import Title from './Title';
import Content3 from './Content3';
import Detail3 from './Detail3';

const Section3 = () => {
    const [isVisible, setVisible] = useState(false);
    const [btn, setBtn] = useState(false);
    const [detailContent, setDetailContent] = useState(0);
    // const [text, setText] = useState('');

    return (
        <div className='section'>
            <Title title="3) projects i made" id='title3'/>
            <Content3
                isVisible={isVisible} setVisible={setVisible}
                detailContent={detailContent} setDetailContent={setDetailContent}
              />
            <Detail3 isVisible={isVisible} setVisible={setVisible} btn={btn} setBtn={setBtn}  detailContent={detailContent}/>
        </div>
    )
};

export default Section3;