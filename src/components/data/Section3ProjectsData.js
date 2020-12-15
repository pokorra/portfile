// import React from 'react';
import quiz from './quiz.png';
import bestShop from './bestShop.png';
import startHelping from './startHelping.png';
import tasks from './tasks.png';
import zombie from './zombie.png';
import mazurscy from './mazurscy.png';

const quizPhoto = quiz;
const bestShopPhoto = bestShop;
const startHelpingPhoto = startHelping;
const tasksPhoto = tasks;
const zombiePhoto = zombie;
const mazurscyPhoto = mazurscy;


const projects = [
    // {
    //     name: "Book Promo Quiz",
    //     desc: "Simple quiz made for a publishing house, my first job;) If you pass the quiz, and it isn't difficult since you need less than 1/3 points, you can read first chapter of the 4th part of Mazurscy w Podróży series.",
    //     tech: ["React", "SCSS"],
    //     code: "https://github.com/pokorra/mazurscy",
    //     view: "https://pokorra.github.io/mazurscy/#/",
    //     photo: mazurscyPhoto
    // },
    {
        name: "Question Game ReactJS",
        desc: "My very first unaided React project. This is where I learned a lot about passing props down, also I learned how to use react hooks etc., but the most important for me was learning how to design a simple application.",
        tech: ["React", "SCSS"],
        code: "https://github.com/pokorra/quiz-game",
        view: "https://pokorra.github.io/quiz-game/",
        photo: quizPhoto
    },
    {
        name: "Start Helping",
        desc: "This is a simply landing page made in React with some addictional node packages. Also, to be able to deploy this site online, I have uploaded a base of institutions to the Json-server online at my-json-server.typicode.com.",
        tech: ["React", "SCSS"],
        code: "https://github.com/pokorra/start-helping",
        view: "https://pokorra.github.io/start-helping/",
        photo: startHelpingPhoto
    },
    {
        name: "Tasks to do",
        desc: "So this is a variation about to-do list. I made it with pure JS, but to make it nicer ane less about responsibilities, I have decided to set an animated background, but it was easier for me to do it using SCSS instead of regular CSS. Task runner which I used was Gulp. Right after adding to your list another responsibility you can just watch at those little bubbles;)",
        tech: ["JavaScript", "SCSS", "Gulp", "HTML"],
        code: "https://github.com/pokorra/tasks-to-do",
        view: "https://pokorra.github.io/tasks-to-do/",
        photo: tasksPhoto
    },
    {
        name: "Best Shop",
        desc: "At the beginning there were only pure HTML and CSS, but after that I have decided to make it mobile responsive, so I changed CSS over to SCSS and added one simple thing in JS",
        tech: ["SCSS", "Gulp", "RWD", "HTML"],
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