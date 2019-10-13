import React from 'react';
import HomePage from '../pages/homepage/homepage.component'


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
        path: "/lessons",
        component: DefaultLessonTemplate,
        routes: [
            {
                path: "/lessons/:lessonId",
                component: Lesson,
                routes: fetchXYZApiRoutes,
            },
        ]
    },
    {
        path: "/:WhereTheHeckIsThat",
        component: fourOhFour,
    }
];