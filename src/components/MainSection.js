import React from 'react';
import Title from './Title';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';

const MainSection = () => {


    return (
        <div className='mainsection'>
            <Title title='1) few things about me'/>
            <Content1/>
            <Title title="2) my skills and abilities"/>
            <Content2/>
            <Title title="3) projects i made"/>
            <Content3/>
        </div>
    );
}

export default MainSection;