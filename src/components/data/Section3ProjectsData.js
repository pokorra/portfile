// import React from 'react';
import quiz from './quiz.png';
import bestShop from './bestShop.png';
import startHelping from './startHelping.png';
import tasks from './tasks.png';
import zombie from './zombie.png';

const quizPhoto = quiz;
const bestShopPhoto = bestShop;
const startHelpingPhoto = startHelping;
const tasksPhoto = tasks;
const zombiePhoto = zombie;


const projects = [
    {
        name: "React Quiz Game",
        desc: "My very first unaided react project. This is where I learned about passing props down, also I learned about using react hooks etc.",
        tech: ["React", "Sass"],
        code: "https://github.com/pokorra/quiz-game",
        view: "https://pokorra.github.io/quiz-game/",
        photo: quizPhoto
    },
    {
        name: "Start Helping",
        desc: "Here I made a connection with react router api. Also, ",
        tech: ["React with addictional libraries", "Sass"],
        code: "https://github.com/pokorra/start-helping",
        view: "https://pokorra.github.io/start-helping/",
        photo: startHelpingPhoto
    },
    {
        name: "Tasks to do",
        desc: "So this is a variation about to-do list. I made it with pure JS, but to make it nicer ane less about responsibilities, I have decided to set an animated background, but it was easier for me to do it using SASS instead of regular CSS. Task runner which I used to convert SASS to SCSS was Gulp. Right after adding to your list another responsibility you can just watch at those little bubbles;)",
        tech: ["JavaScript", "Sass", "Gulp", "HTML"],
        code: "https://github.com/pokorra/tasks-to-do",
        view: "https://pokorra.github.io/tasks-to-do/",
        photo: tasksPhoto
    },
    {
        name: "Best Shop",
        desc: "At the beginning there were only pure HTML and CSS, but after that I have decided to make it mobile responsive, so I changed CSS over to Sass and added one simple thing in JS",
        tech: ["Sass", "Gulp", "RWD", "HTML"],
        code: "https://github.com/pokorra/best-shop",
        view: "https://pokorra.github.io/best-shop/",
        photo: bestShopPhoto
    },
    {
        name: "Zombie Game",
        desc: "Simple, vanilla-js game made with CSS sprites. One of my first encounters with animation in CSS - obviously, I loved it. So if you have a boring day at the office, just take a quick break and shoot five thousand zombies!",
        tech: ["JavaScript", "CSS with sprites", "HTML"],
        code: "https://github.com/pokorra/zombie-game",
        view: "https://pokorra.github.io/zombie-game/",
        photo: zombiePhoto
    }
    
]


export default projects;