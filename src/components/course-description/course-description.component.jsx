import React from 'react'
import { Link } from 'react-router-dom'

import usingLaptop from '../../assets/img/undraw_voice_interface.svg'
import resume from '../../assets/img/undraw_online_resume.svg'
import bookmarks from '../../assets/img/undraw_bookmarks.svg'


import './course-description.styles.scss'
import '../../assets/var.scss'

const CourseDescription = () =>(
    <div className='course-description'>
        <div className='card-container'>
            <div className="tablet-wrapper-wrapper">
            <div className="tablet-wrapper">
                    <div className='card'>
                        <div className='image-container'>
                            <img src={usingLaptop} 
                            alt='woman using a laptop'
                            />
                        </div>
                        <span className='card-title'>HTML Foundations</span>
                        <div className='card-blurb'>
                            <p>
                                Learn all about the 
                                <Link className='link' to="/"> building blocks </Link>
                                of web development! We will be diving deep in HTML Tags and structure 
                                in this lesson.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='image-container'>
                        <img src={resume} />
                        </div>
                        <span className='card-title'>Exploring CSS</span>
                        <div className='card-blurb'>
                            <p>
                                Learn all about how to add
                                styling to your HTML Documents. 
                                In this 
                                    <Link className='link' to="/"> series of lessons, </Link> 
                                we dive deep into CSS properties and values.
                            </p>
                        </div>
                    </div>
                </div>
            <div className="tablet-wrapper">
            <div className='card'>
                <img src={bookmarks} />
                <span className='card-title'>Responsive Design</span>
                <div className='card-blurb'>
                    <p>
                        Adjust your projects to be modern and responsive 
                        to different devices. 
                            <Link className='link' to="/"> In this lesson  </Link>
                        you will learn how to make sites for iphones and tablets.
                    </p>
                </div>
            </div>            
            <div className='card'>
                <img src={usingLaptop}/>
                <span className='card-title'>Learn the Basics!</span>
                <div className='card-blurb'>
                    <p>
                        Join me to learn the basics of web development! 
                        By the end of this 10+ hour course you will have 
                        a firm grasp on the modern web! 
                            <Link className='link' to="/">  Ready to begin?</Link>
                    </p>
                </div>
            </div>
            </div>
            </div>
        </div>
        <div className='description-text'>
        <span className='description-title'>Course Description</span>
        <div className='description-paragraph'>
                <p>
                    This 8-week course will take a close look at how HTML 
                    & CSS work together to build engaging websites. Each class 
                    will be taking a deep dive into web development basics. 
                    Exploring everything from centering images to using CSS 
                    gradients and organizing content with Flexbox. There will 
                    also be optional at-home resources to push your web development 
                    skills to the next level! If you have written a single line 
                    of HTML and have an email address, this course will be perfect for you.
                </p>
        </div>
        </div>

    </div>
)

export default CourseDescription


// const Features = () => (
//     <Block layout="fourColumn" id="learn-more-scroll">
//         {[
//             {
//                 content: 'Learn all about the <a onClick={this.handleClick} href="/the-basics/docs/HTML/1-getting-started.html" class="links">building blocks</a> of web development! We will be diving deep in HTML Tags and structure in this lesson.',
//                 image: `${baseUrl}img/undraw_voice_interface.svg`,
//                 imageAlign: 'top',
//                 title: 'HTML Foundations',
//             },
//             {
//                 content: 'Learn all about how to add styling to your HTML Documents. In this <a onClick={this.handleClick} href="/the-basics/docs/HTML/1-getting-started.html" class="links">series of lessons</a>, we dive deep into CSS properties and values.',
//                 image: `${baseUrl}img/undraw_online_resume.svg`,
//                 imageAlign: 'top',
//                 title: 'Exploring CSS',
//             },
//             {
//                 content: 'Adjust your projects to be modern and responsive to different devices. <a onClick={this.handleClick} href="/the-basics/docs/HTML/1-getting-started.html" class="links">In this lesson</a> you will learn how to make sites for iphones and tablets.',
//                 image: `${baseUrl}img/undraw_bookmarks.svg`,
//                 imageAlign: 'top',
//                 title: 'Responsive Design',
//             },
//             {
//                 content: 'Join me to learn the basics of web development! By the end of this 10+ hour course you will have a firm grasp on the modern web! <a onClick={this.handleClick} href="/the-basics/docs/Introduction/Introduction" class="links">Ready to begin?</a>',
//                 image: `${baseUrl}img/undraw_voice_interface.svg`,
//                 imageAlign: 'top',
//                 title: 'Learn the Basics!',
//             },
//         ]}
//     </Block>
// );