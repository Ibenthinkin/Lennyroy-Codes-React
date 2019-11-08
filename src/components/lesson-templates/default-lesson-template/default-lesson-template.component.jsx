import React from 'react';
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom'

import CustomButton from '../../custom-button/custom-button.component';

import { LESSON_DATA } from '../../../assets/lesson-data/lesson-data'
import './default-lesson-template.styles.scss';

const DefaultLessonTemplate = (props) => {

        console.log(props)
        return(
            <div>
                SOemtings
            </div>
        )


        // const [{ first: 
        //         subtitle, 
        //         bannerImageUrl, 
        //         moduleTitle,
        //         slidesUrl,
        //         slidesDownloadURL,
        //         codepenDescription,
        //         codepenUrl,
        //         youtubeUrl,
        //         videoDescription,
        //         lessonTitle, 

        // }]  = props

        // console.log(this.state.lesson[1].lessons[0].lessonTitle)
        // return (
        //     <div className='lesson'>
        //         <div className='slides section'>
        //             <div className='lesson-title'>{lessonTitle}</div>
        //             <div className='sub-title'>{subtitle}</div>
        //             <div className='banner-image-container'>
        //                 <img src={bannerImageUrl} alt='a picture from the slideshow'/>
        //             </div>
        //             <div className='button-container'>
        //                 <a href={slidesUrl}>
        //                 <CustomButton text={'Open Slides'}></CustomButton>
        //                 </a>
        //                 <a href={slidesDownloadURL}>
        //                 <CustomButton text={'Download Slideshow PDF'}></CustomButton> 
        //                 </a>
        //             </div>
        //         <div/>   

        //         <hr></hr>

        //             <div className='lesson-text section'>
        //                 <h1>{`${moduleTitle}: ${lessonTitle}`}</h1>
        //             </div>
                    
        //         <hr></hr>
                
        //         <div className='codepen section'>
        //             <h2>Codepen Lesson</h2>
        //             <div className='codepen description'>
        //                 {codepenDescription}
        //             </div>
        //             <div className='codepen-container'>
        //                 <Iframe url={codepenUrl}
        //                     width="450px"
        //                     height="450px"
        //                     id="myId"
        //                     className="myClassname"
        //                     display="initial"
        //                     position="relative" />
        //             </div>
        //                 <div className='button-container'>
        //                     <a href={codepenUrl}>
        //                     <CustomButton text='Open Codepen'/>
        //                     </a>
        //                 </div>
        //             </div>
                
        //         </div>

        //         <hr></hr>

        //         <div className='video-section'>
        //             <h2>Video Walkthrough</h2>
        //             <div className='video description'>
        //                 {videoDescription}
        //             </div>
        //         </div>
        //         <div className='video-container'>
        //             <Iframe url={youtubeUrl}
        //                 width="450px"
        //                 height="450px"
        //                 id="myId"
        //                 className="myClassname"
        //                 display="initial"
        //                 position="relative" />
        //         </div>
        //         <div className='button-container'>
        //             <a href={youtubeUrl}>
        //                 <CustomButton text='View Youtube Video' />
        //             </a>
        //         </div>

        //         <div className='nav-button-container'>
        //             <a href={'/'}>
        //                 <CustomButton text=' &#larr; Previous Lesson' />
        //             </a>
        //             <a href={'/'}>
        //                 <CustomButton text= ' &#rarr; Previous Lesson' />
        //             </a>
        //         </div>
        //     </div>

            
        // )
    

}

export default DefaultLessonTemplate;



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
//                         youtubeUrl: 'https://www.youtube.com/embed/9jwfMeNF68k',
//                         helpfulLinks: {}
//                     }
//                 ]
// }



{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/9jwfMeNF68k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}