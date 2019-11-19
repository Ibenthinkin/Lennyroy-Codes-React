import React from 'react';
import { LESSON_DATA } from '../../assets/lesson-data/lesson-data'
import './lessons.styles.scss';
import '../../assets/var.scss'
import '../../assets/global.scss'

import { Route, Switch, Link, useParams, useRouteMatch } from 'react-router-dom'
 
import SideBar from '../side-bar/side-bar.component.jsx'

import DefaultLessonTemplate from '../lesson-templates/default-lesson-template/default-lesson-template.component'
import Lesson from '../lesson/lesson.component'
import Footer from '../../components/footer/footer.component';


const Lessons = () => {

    let { path, url } = useRouteMatch();

    const lessons = LESSON_DATA
    // let { lessonId } = useParams()
        // console.log(lessonId)
        return (
                <div className='lessons'>
                    <div className='side-bar'>
                        <SideBar />
                    </div> 
                    <div className='lesson'>
                        <Switch>
                            <Route exact path={path}
                            />
                            <Route path={`${path}/:lessonId`}>
                                <Lesson />
                            </Route>
                        </Switch>
                    </div>
                    
                </div>
        )
    

}

export default Lessons

//     < Route path = '/lessons/:lessonId'
// render = {(props) => <Lessons {...props} />}
// /> 