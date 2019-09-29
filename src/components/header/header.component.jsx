import React from 'react'
import lcWhiteFull from '../../assets/img/LC-white-full.png'

import './header.styles.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
            <div className='header'>
                <div className="header-wrapper">
                    <Link className='logo-container' to="/">
                        <img className='logo' src={lcWhiteFull} alt='logo'/>
                    </Link>
                    <div className='options'>
                        <Link className='option' to='/slides'>
                            Slides
                        </Link>
                        <Link className='option' to='/videos'>
                            Videos
                        </Link>
                        <Link className='option' to='/challenges'>
                            Challenges
                        </Link>
                        <Link className='option' to='/Blog'>
                            Blog
                        </Link>
                    </div>
                </div>
            </div>
    )
}


export default Header