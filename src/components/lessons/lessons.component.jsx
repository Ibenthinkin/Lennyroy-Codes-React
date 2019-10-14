import React from 'react';
import { LESSON_DATA } from '../../assets/lessons/lesson-data'
import './lessons.styles.scss';
// import MakeRouteWithSubRoutes from '../../routing/makeRouteWithSubRoutes'
// import { Routes } from '../../routing/routes'
import SideBar from '../side-bar/side-bar.component.jsx'


const Lessons = props => {

    const lessons = LESSON_DATA

        console.log(props, lessons)
        return (
            <div className='lessons'>
                <h1>LESSONS</h1>
                <SideBar />

            </div>
        )
    

}

export default Lessons
