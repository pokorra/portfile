import React from 'react';
import RollButton from './RollButton';
import skills from './data/section2data';
import { CarouselProvider, Slider, Slide, Dot, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

const Detail2 = (props) => {
    const roll =() => {
        props.setVisible(false);
        props.setBtn(false);
        }

    const i = props.detailContent;
    const skill = skills[i];
    const skillList = skill.list;

    return (
        <div className={`detail ${props.isVisible ? 'unroll' : ''}`}>
            <RollButton btn={props.btn} roll={roll}/>
            <div className={skill.class}> 
                <h3>{skill.title}</h3>
                {skill.class==='technologies' ? (
                     <ul className='tech-list'> {skillList.map( item => (
                        <li className='tech-item'key={item.name}> 
                           <img  src={item.pic} alt={item.name}></img>
                            <p>{item.name}</p>
                        </li>
                    ))}
    
                    </ul>) : (
                        <CarouselProvider
                        className='slider-prov'
                        naturalSlideWidth={150}
                        naturalSlideHeight={70}
                        totalSlides={5}
                        interval={5000}
                        isPlaying={true}
                        infinite={true}> 

                            <Slider>
                                <Slide index={0}>
                                    <h2>{skillList[0].name}</h2>
                                    <p className='dot-desc'>{skillList[0].desc}</p>
                                    
                                    </Slide>
                                <Slide index={1}>
                                    <h2>{skillList[1].name}</h2>
                                    <p className='dot-desc'>{skillList[1].desc}</p>
                                    
                                    </Slide>
                                <Slide index={2}>
                                    <h2>{skillList[2].name}</h2>
                                    <p className='dot-desc'>{skillList[2].desc}</p>
                                    
                                    </Slide>
                                <Slide index={3}>
                                    <h2>{skillList[3].name}</h2>
                                    <p className='dot-desc'>{skillList[3].desc}</p>
                                    
                                    </Slide>
                                <Slide index={4}>
                                    <h2>{skillList[4].name}</h2>
                                    <p className='dot-desc'>{skillList[4].desc}</p>
                                    
                                    </Slide>
                            </Slider>

                        <DotGroup className='doters'
                            disableActiveDots={false}>
                            <Dot slide={0} className='little-dot'> ☉ </Dot>
                            <Dot slide={1} className='little-dot'> ☉</Dot>
                            <Dot slide={2} className='little-dot'> ☉</Dot>
                            <Dot slide={3} className='little-dot'> ☉</Dot>
                            <Dot slide={4} className='little-dot'> ☉</Dot>
                        </DotGroup>
                        <div className='slider-buts'>
                                <ButtonBack className='btn-car'> <FontAwesomeIcon icon = {faChevronLeft}/> </ButtonBack>
                                <ButtonNext className='btn-car'> <FontAwesomeIcon icon = {faChevronRight}/></ButtonNext>
                        </div>
                        
                      
                        </CarouselProvider>
                       
                    )
                }
               
            </div>
        </div>
    )
}

export default Detail2;