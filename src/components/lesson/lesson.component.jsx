import React from 'react';
import LESSON_DATA from '../../assets/lessons/lesson-data'
import './lesson.styles.scss';


export default class Lesson extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lessons: LESSON_DATA
        }
    }

    render() {
        const { lessons } = this.state
        console.log(this.props)
        return (
            <div className='lesson'>
                <h1>LESSON</h1>
            </div>
        )
    }

}



// {
//     id: 2,
//         moduleTitle: 'Intro To HTML',
//             routeName: 'introtohtml',
//                 lessons: [
//                     {
//                         id: 1,
//                         template: '0',
//                         title: 'First Steps in HTML',
//                         routeName: 'firststepsinhtml',
//                         subtitle: 'Learn the layout and features of this course. We will be diving into how HTML works conceptually and even seeing a few basics tags in action!',
//                         bannerImageUrl: 'https://raw.githubusercontent.com/lennyroyroy/basics-image/master/Basics%20Screenshots/Screen%20Shot%202019-09-02%20at%206.35.34%20PM.png',
//                         slidesUrl: 'https://slides.com/lennyroyroy/deck#/3',
//                         slidesDownloadURL: 'https://www.docdroid.net/QudGjTa/the-basics-intro-to-web-development-lesson-1-intro-to-html.pdf',
//                         codePenDescription: 'What did you have for breakfast today?',
//                         codePenUrl: 'https://codepen.io/lennyroycodes/pen/PvVzJz',
//                         videoDescription: 'Learn the layout and features of this course. We will be diving into how HTML works conceptually and even seeing a few basics tags in action!',
//                         youtubeUrl: 'https://youtu.be/9jwfMeNF68k',
//                         helpfulLinks: {}
//                     }
//                 ]
// }