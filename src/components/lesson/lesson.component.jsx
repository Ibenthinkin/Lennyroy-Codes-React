import React from 'react'
import { useParams } from 'react-router-dom'

import './lesson.styles.scss'

const Lesson = () => {
    let { lessonId } = useParams();

    // console.log(props)
    return (
        <div className='lesson'>
            STILL LESSON COMPONENT {lessonId}
        </div>
    )

    }

export default Lesson