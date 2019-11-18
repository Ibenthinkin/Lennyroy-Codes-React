import React from 'react'
import './challenges-banner.styles.scss'
import '../../assets/var.scss'
import '../../assets/global.scss'

const ChallengesBanner = () => (
    <div className='challenges-banner'>
        <div className='content'>
            <div className='image-container'>
                <img src="https://raw.githubusercontent.com/lennyroyroy/basics-image/master/Basics%20Gifs/2-main.gif"
                    alt="Screen shot of a challenge for this course. There is code in the image as a well as a view of the Glitch interface"
                />
            </div>

            <div className='text-container'>
                <span className='title'>
                    Over 50 in-lesson challenges to test your new skills!
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
        </div>
    </div>
)

export default ChallengesBanner