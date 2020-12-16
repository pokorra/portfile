import React from 'react';
import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Footer from './Footer';

const LandingPage = () => {

    return (
        <> 
            <Header/>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            {/* bottom: pixelated doggos to click on them */}
            <Footer/>
        </>
    );
}

export default LandingPage;