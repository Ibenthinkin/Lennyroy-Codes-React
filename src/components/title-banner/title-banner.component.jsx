import React from 'react'
import './title-banner.styles.scss'
import logo from '../../assets/img/LR-white.png'
import CustomButton from '../custom-button/custom-button.component'

const TitleBanner = () =>(
    <div className='title-banner'>
        <div className='content'>
            <div className='project-title'>
                <h1>The Basics</h1>
                <h4>Intro To Web Development</h4>
            </div>
            <div className='button-container'>
                <CustomButton text='The Basics'/>
                <CustomButton text='Course Catalogue' />
            </div>
        </div>
        <img src={logo} alt='the logo for lennyroy codes'/>
    </div>
)

export default TitleBanner