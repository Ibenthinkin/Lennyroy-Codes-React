import React from 'react'
import './course-overview-banner.styles.scss'
import noteList from '../../assets/img/undraw_note_list.svg'

const CourseOverviewBanner = () => (
    <div className='course-overview-banner'>
        <div className='content'>
            <div className='text-container'>
                <span className='title'>
                   Course Overview
                </span>
                <div className='paragraph'>
                    <p>
                        Over 10 hours of course content spanning
                         from early HTML to responsive design.
                    </p>
                </div>
            </div>
            <div className='image-container'>
                <img src={noteList}/>
            </div>
        </div>
    </div>
)

export default CourseOverviewBanner