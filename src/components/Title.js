import React, {useState} from 'react';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';

const Title = () => {
    const [score, setScore] = useState(0);

    setInterval(()=>{
        
    })


    return (
        <div className='hello'>
            <div className='bubble'></div>
            <div className='title-hello'>
            <Typist>
                <h2>Hello, world</h2>
            </Typist>
                <h3>score: {score}</h3>
            </div>
            <TypistLoop interval={3000}>
            {/* <Typist.Delay ms={1300}/> */}
            <h1>{[
                'my name is Patrycja',
                'I am junior front-end developer',
                'enjoy my portfolio page'
            ].map(phrase => <Typist key={phrase} startDelay={1000}> {phrase} </Typist>)}
                </h1>
                </TypistLoop>
            {/* <Typist.Backspace>pieski</Typist.Backspace> */}
            <div>
                <h3>
                    <Typist avgTypingDelay={50} >
                        <span>my name is Patrycja,</span>
                        <Typist.Backspace count={20} delay={1000} />
                        <span>I am junior front-end developer</span>

                    </Typist>
                    {/* pixelated doggos to click on them */}

                </h3>
            </div>
        
        </div>
        
    )
}

export default Title;