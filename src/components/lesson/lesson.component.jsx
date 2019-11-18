import React from 'react'
import { useParams } from 'react-router-dom'

import './lesson.styles.scss'
import '../../assets/var.scss'
import '../../assets/global.scss'

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