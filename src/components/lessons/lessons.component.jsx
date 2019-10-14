import React from 'react';
import { LESSON_DATA } from '../../assets/lessons/lesson-data'
import './lessons.styles.scss';

import { Route, Switch, Link } from 'react-router-dom'
 
import SideBar from '../side-bar/side-bar.component.jsx'


const Lessons = props => {

    const lessons = LESSON_DATA

        console.log(props, lessons)
        return (
            <div className='lessons'>
                <SideBar />

            </div>
        )
    

}

export default Lessons

//     < Route path = '/lessons/:lessonId'
// render = {(props) => <Lessons {...props} />}
// /> 