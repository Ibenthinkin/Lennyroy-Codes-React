import React from 'react'
import './videos-banner.styles.scss'
import '../../assets/var.scss'
import '../../assets/global.scss'

const VideosBanner = () => (
    <div className='videos-banner'>
        <div className='content'>
            <div className='text-container'>
                <span className='title'>
                    Each lesson has a video tutorial to help 
                    you through your coding journey.
                </span>
                <div className='paragraph'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit. Duis mattis faucibus 
                        aliquam. Vivamus vel convallis velit, 
                        sit amet malesuada sem. Nam posuere mattis 
                        sodales. Duis mattis rutrum est, at ultrices 
                        nunc semper et. Nullam et diam placerat nulla 
                        ultrices tempor. Sed interdum elit nec dictum rutrum. 
                        Mauris quis turpis bibendum, volutpat leo ac, 
                        congue tortor. Sed vehicula interdum molestie.
                        Nunc dapibus urna pellentesque diam varius tempus.
                    </p>
                </div>
            </div>
            <div className='image-container'>
                <img src="https://raw.githubusercontent.com/lennyroyroy/basics-image/master/Basics%20Gifs/1-1-first-steps-in-html-update.2019-09-13%2007_23_46.gif"/>
            </div>
        </div>
    </div>
)

export default VideosBanner