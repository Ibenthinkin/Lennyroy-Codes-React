import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import { LESSONS_LIST as list } from '../../assets/lesson-data/lesson-data.js'


import './side-bar.styles.scss'

const SideBar = ({props}) => {
    let { path, url } = useRouteMatch();

    return (
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
                                                        <Link to={`${url}/${lesson.toLowerCase().replace(/\s+/g, '')}`}>{lesson}</Link>
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

}

export default SideBar;

// onClick = {() => history.push(`${match.url}${linkUrl}`)}