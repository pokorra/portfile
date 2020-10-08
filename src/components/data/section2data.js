import bootstrap from './bootstrap.png';
import firebase from './firebase.png';
import git from './git.png';
import gulp from './gulp.png';
import html from './html.png';
import javascript from './javascript.png';
import npm from './npm.png';
import react from './react.png';
import sass from './sass.png';
import css from './css.png';

const Bootstrap = bootstrap;
const Firebase = firebase;
const Git = git;
const Gulp = gulp;
const HTML5 = html;
const JavaScript = javascript;
const NPM = npm;
const ReactJS = react;
const Sass = sass;
const CSS = css;

const skills = [
    {
        title: "Technologies I am familiar with:",
        list: [
            {name: "React JS",
            pic: ReactJS},
            {name: "JavaScript ES6",
            pic: JavaScript}, 
            {name: "Sass",
            pic: Sass},
            {name: "CSS",
            pic: CSS},
            {name: "HTML5",
            pic: HTML5},
            {name: "Gulp",
            pic: Gulp},
            {name: "Git",
            pic: Git},
            {name: "NPM",
            pic: NPM},
            {name: "Realtime Firebase",
            pic: Firebase},
            {name: "Bootstrap",
            pic: Bootstrap}
        ],
        class: "technologies"
    },
    {
        title: "My work-useful soft skills:",
        list: [ {
            name: "Good learning skills",
            desc: "I like to learn new things and, luckily, I am bright enough to do it. I believe willingness to develop yourself is the thing that keeps you in intellectual shape."
            },
            {
            name: "Being a teamworker",
            desc: "I value working in a team when everyone has their own tasks, but we have one common goal. This is why I really value agile methodologies - I participated in Scrum once and I could see how efficient it was. In this kind of situation you can learn and teach at the same time and everyone brings something."
            },
            { 
            name: "Highly developed communication skills",
            desc: "I am good with both expressing myself and listening, you can say I am doing well with nonverbal communication as well."
            },
            {
            name: "Emotional intelligence",
            desc: "Having an ability to understand others is very useful in every workplace, and I do have it. I am an empathetic person, I believe that mental comfort is the thing you can not overestimate, so we should just look out for each other."
            },
            {
            name: "Critical thinking",
            desc: "I have an analytical mind, so I have always been pretty good in problem solving. Since I would rather to be in control of my responsibilities, I always do a research and try to prepare as good as possible to solve an issue without causing problems."
            }
            ],
        class: "softSkills"

    }
]

export default skills;