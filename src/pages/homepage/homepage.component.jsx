import React from 'react';

import './homepage.styles.scss';

import TitleBanner from '../../components/title-banner/title-banner.component'
import CourseDescription from '../../components/course-description/course-description.component'

const HomePage = () => (
  <div className='homepage'>
    <TitleBanner/>
    <CourseDescription />
  </div>
);

export default HomePage;
