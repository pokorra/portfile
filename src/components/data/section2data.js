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
        title: "Technologies that I am familiar with:",
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
        list: ["funny", "nice", "communicating well"],
        class: "softSkills"

    }
]

export default skills;