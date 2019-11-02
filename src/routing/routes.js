// import React from 'react';
import HomePage from '../pages/homepage/homepage.component'
import Slides from '../pages/slides/slides.component'
import Videos from '../pages/videos/videos.component'
import Challenges from '../pages/blog/blog.component'
import Lesson from '../components/lessons/lesson.component'
import FourOhFour from '../components/four-oh-four/four-oh-four.component'
import Blog from '../pages/blog/blog.component'


import DefaultLessonTemplate from '../components/lesson-templates/default-lesson-template/default-lesson-template.component';
import IntroTemplate from '../components/lesson-templates/intro-template/intro-template.component';


// const fetchXYZApiRoutes = () => {
//     console.log("somethings")
// }
export const Routes = [
    {
        path: "/",
        component: HomePage
    },
    {
        path: "/slides",
        component: Slides
    }, 
    {
        path: "/videos",
        component: Videos
    }, 
    {
        path: "/challenges",
        component: Challenges
    },
    {
        path: "/blog",
        component: Blog
    },
    {
        path: "/lesson",
        component: Lesson
    },
    {
        path: "/:WhereTheHeckIsThat",
        component: FourOhFour,
    }
];
