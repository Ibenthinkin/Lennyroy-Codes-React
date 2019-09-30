import React from 'react';
import LESSON_DATA from '../../../assets/lessons/lesson-data'
import './default-lesson-template.styles.scss';
import { Link } from 'react-router-dom'
import CustomButton from '../../custom-button/custom-button.component';

export default class DefaultLessonTemplate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lesson: LESSON_DATA
        }
    }

    render() {
        
        const [{ first: 
                subtitle, 
                bannerImageUrl, 
                moduleTitle,
                slidesUrl,
                slidesDownloadURL,
                codePenDescription,
                codePenUrl,
                youtubeUrl,
                lessonTitle, 

        }]  = this.state.lesson[1].lessons

        console.log(this.state.lesson[1].lessons[0].lessonTitle)
        return (
            <div className='lesson'>
                <div className='lesson-title'>{lessonTitle}</div>
                <div className='sub-title'>{subtitle}</div>
                <div className='banner-image'>
                    <img src={bannerImageUrl} alt='a picture from the slideshow'/>
                </div>
                <div className='button-container'>
                    <a href={slidesUrl}>
                    <CustomButton text={'Open Slides'}></CustomButton>
                    </a>
                    <a href={slidesDownloadURL}>
                    <CustomButton text={'Download Slideshow PDF'}></CustomButton> 
                    </a>
                </div>
                <hr></hr>
                <div className='lesson-text-section'>
                    <h1>{`${moduleTitle}: ${lessonTitle}`}</h1>
                </div>
                <hr></hr>
                <div className='codepen'>
                    <h2>Codepen Lesson</h2>
                    <div className='codepen-description'>
                        {codePenDescription}
                    </div>
                    <div className='codepen-container'>
                        


                    </div>
                </div>


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