import React from 'react'

import NavigationBar from './components/BarraNavegacao/NavigationBar.js'
import HomePage from './components/HomePage/HomePage.js'

export default class App extends React.Component {

  render() {
    return <div>
      <NavigationBar />
      <HomePage />

      </div>

  }
}