import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import PPDHome from './PeaksAndPixelsDesign/PPDHome';
import MEMCraftsHome from './MEMCrafts/MEMCraftsHome';
import Admin from './Admin/Admin';

import TitleSection from './Home/Header/TitleSection';
import Footer from './Home/Footer/Footer';
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
        <TitleSection />
            <Switch>
             <Route exact path="/" component={Home} />
             <Route path="/About/About" component={About} />
             <Route path="/Contact/Contact" component={Contact} />
             <Route path="/PeaksAndPixelsDesign/PPDHome" component={PPDHome} />
             <Route path="/MEMCrafts/MEMCraftsHome" component={MEMCraftsHome} />
             <Route path="/Admin/Admin" component={Admin} />
           </Switch>
          <Footer />
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;