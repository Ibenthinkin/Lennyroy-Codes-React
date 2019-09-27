import React from 'react'

import CustomButton from '../custom-button/custom-button.component'

const TitleBanner = () =>(
    <div className='title-banner'>
        <div className='project-title'>
            <h2>The Basics</h2>
            <h4>Intro To Web Development</h4>
        </div>
        <div className='button-container'>
            <CustomButton text='The Basics'/>
            <CustomButton text='Course Catalogue' />
        </div>
    </div>
)

export default TitleBanner