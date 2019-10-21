import React from 'react'
import { Switch, Route } from 'react-router-dom';

import './App.scss'

import HomePage from './pages/homepage/homepage.component'
import Slides from './pages/slides/slides.component'
import Videos from './pages/videos/videos.component'
import Challenges from './pages/blog/blog.component'
import Blog from './pages/blog/blog.component'
import CourseIntroduction from './pages/course-introduction/course-introduction.component.jsx'

import Header from './components/header/header.component'
import Lessons from './components/lessons/lessons.component'
import FourOhFour from './components/four-oh-four/four-oh-four.component'
import DefaultLessonTemplate from './components/lesson-templates/default-lesson-template/default-lesson-template.component';

// import MakeRouteWithSubRoutes from './routing/makeRouteWithSubRoutes'

// import { Routes } from './routing/routes'

const App = () => {
  return( 
      <div className='app-container'>
        <Header/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/slides' component={Slides} />
            <Route exact path='/videos' component={Videos} />
            <Route exact path='/challenges' component={Challenges} />
            <Route exact path='/blog' component={Blog} />
            <Route path='/lessons' component={Lessons} />
            <Route component={FourOhFour} />
          </Switch>
      </div>
  )
}
 

export default App;

{/* <Route exact path='/lessons/courseintroduction' component={CourseIntroduction} /> */}



// <Route path='/lessons/:lessonId'
//   render={(props) => <Lessons {...props} />}
// /> 


// <Switch>
//   {
//     Routes.map(
//       (route, index) => <MakeRouteWithSubRoutes key={index} {...route} />
//     )
//   }
// </Switch>