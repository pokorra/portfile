import React from 'react';
import Title from './Title';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Detail1 from './Detail1';

const MainSection = () => {


    return (
        <div className='section'>
            <Title title='1) few things about me'/>
            <Content1/>
            <Detail1/>
            <Title title="2) my skills and abilities"/>
            <Content2/>
            <Title title="3) projects i made"/>
            <Content3/>
        </div>
    );
}

export default MainSection;