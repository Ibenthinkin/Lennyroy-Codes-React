import React from 'react'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'


export default class App extends React.Component {

  render(){  
    return (
      <div>
        <Header/>
        <HomePage/>
      </div>
    )
  }

} 
 