import React from 'react';
import { LESSON_DATA } from '../../assets/lessons/lesson-data'
import './lessons.styles.scss';

import { Route, Switch, Link, useParams } from 'react-router-dom'
 
import SideBar from '../side-bar/side-bar.component.jsx'

import DefaultLessonTemplate from '../lesson-templates/default-lesson-template/default-lesson-template.component'
import Lesson from '../lesson/lesson.component'

const Lessons = ({match}) => {

    const lessons = LESSON_DATA
    let { lessonId } = useParams()
        console.log(lessonId)
        return (
            <div className='lessons'>
                <div><SideBar /></div> 
                <Switch>
                    <Route path='/:lessonId'
                        component={Lesson}
                    />
                </Switch>

            </div>
        )
    

}

export default Lessons

//     < Route path = '/lessons/:lessonId'
// render = {(props) => <Lessons {...props} />}
// /> 