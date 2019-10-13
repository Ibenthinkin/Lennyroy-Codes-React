import React from 'react';
import LESSON_DATA from '../../assets/lessons/lesson-data'
import './lessons.styles.scss';
// import MakeRouteWithSubRoutes from '../../routing/makeRouteWithSubRoutes'
// import { Routes } from '../../routing/routes'

const Lessons = props => {

    const lessons = LESSON_DATA

        console.log(props)
        return (
            <div className='lesson'>
                <h1>LESSON</h1>
            </div>
        )
    

}

export default Lessons
