import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import DefaultLessonTemplate from './components/lesson-templates/default-lesson-template/default-lesson-template.component';
import Slides from './pages/slides/slides.component'
import Videos from './pages/videos/videos.component'
import Challenges from './pages/blog/blog.component'
import Lessons from './components/lessons/lessons.component'
import FourOhFour from './components/four-oh-four/four-oh-four.component'
import Blog from './pages/blog/blog.component'

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
          <Route exact path='/lessons' component={Lessons} />
          <Route path="/lessons/:lessonId" component={DefaultLessonTemplate} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
  )
}
 

export default App;




// <Switch>
//   {
//     Routes.map(
//       (route, index) => <MakeRouteWithSubRoutes key={index} {...route} />
//     )
//   }
// </Switch>