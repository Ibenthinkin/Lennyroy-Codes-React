import React from 'react';
import HomePage from '../pages/homepage/homepage.component'
import Slides from '../pages/slides/slides.component'
import Videos from '../pages/videos/videos.component'
import Challenges from '../pages/blog/blog.component'
import Lesson from '../components/lesson/lesson.component'
import FourOhFour from '../components/four-oh-four/four-oh-four.component'
import Blog from '../pages/blog/blog.component'


import DefaultLessonTemplate from '../components/lesson-templates/default-lesson-template/default-lesson-template.component';

const fetchXYZApiRoutes = () => {
    console.log("somethings")
}

export const routes = [
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
        component: Lesson,
        routes: [
            {
                path: "/lesson/:lessonId",
                component: DefaultLessonTemplate,
                routes: fetchXYZApiRoutes,
            },
        ]
    },
    {
        path: "/:WhereTheHeckIsThat",
        component: FourOhFour,
    }
];