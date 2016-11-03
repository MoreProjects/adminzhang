import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import FastClick from 'fastclick';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/APP';
import Demo from './components/Demo';

window.React = React;

const redirectToChild = (location, replaceState) => {
  replaceState(null, '/about');
};

function bootstrap() {
    // Make taps on links and buttons work fast on mobiles
    if (FastClick.attach) {
        FastClick.attach(document.body);
    } else {
        FastClick(document.body);
    }

    render(
        (<Router>
            <Route path="/" component={App}>
                <IndexRoute component={Demo} onEnter={redirectToChild}/>
                <Route path="/about" component={Demo} />
            </Route>
          </Router>), document.getElementById('react_container')
        );
}

// Run the application when both DOM is ready and page content is loaded
if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
    bootstrap();
} else {
    document.addEventListener('DOMContentLoaded', bootstrap, false);
}
