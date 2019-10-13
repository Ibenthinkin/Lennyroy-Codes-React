import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import DefaultLessonTemplate from './components/lesson-templates/default-lesson-template/default-lesson-template.component';
import MakeRouteWithSubRoutes from './routing/makeRouteWithSubRoutes'

import { routes } from './routing/routes'

export default class App extends React.Component {

  render(){  
    return (
      <div className='app-container'>
        <Header />
        <Switch>
          {
            routes.map(
              (route, index) => <MakeRouteWithSubRoutes key={index} {...route} />
            )
          }
        </Switch>
      </div>
    )
  }

} 
 




// <Switch>
//   <Route exact path='/' component={HomePage} />
//   <Route exact path='/lesson' component={DefaultLessonTemplate} />
// </Switch>