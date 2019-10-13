import React from 'react'
import { Link } from 'react-router-dom'

import './title-banner.styles.scss'
import logo from '../../assets/img/LR-white.png'
import CustomButton from '../custom-button/custom-button.component'

const TitleBanner = ({ match }) =>(
    <div className='title-banner'>
        <div className="title-wrapper">
            <div className='content'>
                <div className='project-title'>
                    <h1>The Basics</h1>
                    <h4>Intro To Web Development</h4>
                </div>
                <div className='button-container'>
                    <Link to='lessons/courseintroduction'> 
                    <CustomButton text='Start Now!'/>
                    </Link>
                    <CustomButton text='Course Catalogue' />
                </div>
            </div>
            <div className="image-wrapper">
                <img src={logo} alt='the logo for lennyroy codes'/>
            </div>
        </div>
    </div>
)

export default TitleBanner