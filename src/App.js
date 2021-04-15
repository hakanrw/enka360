import React from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Crew from './components/Crew';
import Footer from './components/Footer';
import About from './components/About';
import Sponsor from './components/Sponsor';
import Stream from './components/Stream';

function App() {
  let routes = [
    ["/", "Anasayfa"],
    ["/streams", "Yayınlar"],
    ["/about", "Hakkımızda"],
    ["/sponsor", "Sponsorluk"],
    ["/crew", "Ekip"]
  ];
  let ScrollTop = withRouter(ScrollToTop);

  return (
    <div className="App">
      <Router onUpdate={() => window.scrollTo(0, 0)}>
        <ScrollTop>
          <Navbar routes={routes} />
          <div style={{width: "85%", minHeight: "40vh"}} className="mx-auto mt-5">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/crew" component={Crew}/>
              <Route exact path="/sponsor" component={Sponsor}/>
              <Route exact path="/streams" component={Stream}/>
            </Switch>
          </div>
          <Footer routes={routes} />
        </ScrollTop>
      </Router>
    </div>
  );
}

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default App;
