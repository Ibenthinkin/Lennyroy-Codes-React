import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import DefaultLessonTemplate from './components/lesson-templates/default-lesson-template/default-lesson-template.component';


export default class App extends React.Component {

  render(){  
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/lesson' component={DefaultLessonTemplate} />

        </Switch>
      </div>
    )
  }

} 
 