import React from 'react'
import { LESSONS_LIST as list } from '../../assets/lessons/lesson-data.js'


import './course-introduction.styles.scss'

const CourseIntroduction = props => {
    console.log(props, list) 
    return ( 
        <div className='course-introduction'>
            <h2>THIS IS THE COURSE INTRODUCTION</h2>
            {
                list.map(
                    (item, index) => {
                        return (
                            <div className='module'key={index}>
                                <h2>{item.module}</h2>
                                <ul>
                                    {
                                        item.lessons.map(
                                            (lesson, index) => {
                                                return(
                                                    <li key={index}>
                                                        {lesson}
                                                    </li>
                                                )
                                            }
                                        )
                                    }
                                </ul>
                            </div>
                        
                        )}
                )
            }
        </div>
    );
    
};


export default CourseIntroduction