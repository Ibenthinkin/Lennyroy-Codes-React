import React from 'react';

import './homepage.styles.scss';

import TitleBanner from '../../components/title-banner/title-banner.component'
import CourseDescription from '../../components/course-description/course-description.component'
import VideosBanner from '../../components/videos-banner/videos-banner.component';
import ChallengesBanner from '../../components/challenges-banner/challenges-banner.component';
import CourseOverviewBanner from '../../components/course-overview-banner/course-overview-banner.component';


const HomePage = () => (
  <div className='homepage'>
    <TitleBanner/>
    <CourseDescription />
    <VideosBanner/>
    <ChallengesBanner/>
    <CourseOverviewBanner/>
  </div>
);

export default HomePage;
