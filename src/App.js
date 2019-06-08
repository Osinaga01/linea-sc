import React, { Component } from 'react';

//import './App.css';

import TopNavigation from './Capas/Vista/sections/topNavigation';
import SideNavigation from './Capas/Vista/sections/sideNavigation';
import Footer from './Capas/Vista/sections/Footer';

import './index.css';
class App extends Component {
  
  render() {
    return (
        <div className="flexible-content">
          <TopNavigation />
          <SideNavigation />
          <main id="content" >
            
          </main>
          
        </div>
    );
  }
}

export default App;
