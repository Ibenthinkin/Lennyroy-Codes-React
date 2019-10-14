import React from 'react'
import { Link } from 'react-router-dom'

import { LESSONS_LIST as list } from '../../assets/lessons/lesson-data.js'


import './side-bar.styles.scss'

const SideBar = (props) => (
    <div className='side-bar'>
        {
            list.map(
                (item, index) => {
                    return (
                        <div className='module' key={index}>
                            <h2>{item.module}</h2>
                            <ul>
                                {
                                    item.lessons.map(
                                        (lesson, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link to={`lessons/${lesson}`}>{lesson}</Link> 
                                                </li>
                                            )
                                        }
                                    )
                                }
                            </ul>
                        </div>

                    )
                }
            )
        }
    </div>
)

export default SideBar;