import React from 'react';

import './homepage.styles.scss';
import '../../assets/var.scss'
import '../../assets/global.scss'

import TitleBanner from '../../components/title-banner/title-banner.component'
import CourseDescription from '../../components/course-description/course-description.component'
import VideosBanner from '../../components/videos-banner/videos-banner.component';
import ChallengesBanner from '../../components/challenges-banner/challenges-banner.component';
import CourseOverviewBanner from '../../components/course-overview-banner/course-overview-banner.component';
import Footer from '../../components/footer/footer.component';


const HomePage = props => {
  console.log(props)
  return(
    <div className='homepage'>
      <TitleBanner/>
      <CourseDescription />
      <VideosBanner/>
      <ChallengesBanner/>
      <CourseOverviewBanner/>
      <Footer/>
    </div>
  )
};

export default HomePage;
