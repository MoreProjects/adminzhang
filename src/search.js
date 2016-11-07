import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import FastClick from 'fastclick';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import LecturerApp from './components/LecturerApp';
import LecturerClassroomApp from './components/LecturerClassroomApp';
import LecturerFollowerApp from './components/LecturerFollowerApp';
import LecturerWordApp from './components/LecturerWordApp';
import LecturerVideoApp from './components/LecturerVideoApp';
import LecturerTargetApp from './components/LecturerTargetApp';
import LecturerMessageApp from './components/LecturerMessageApp';


function fetch() {
    
}

function bootstrap() {
    // Make taps on links and buttons work fast on mobiles
    if (FastClick.attach) {
        FastClick.attach(document.body);
    } else {
        FastClick(document.body);
    }

    render(
        (<Router history={hashHistory}>
            <Route path="/" onEnter={fetch}>
                <IndexRoute component={LecturerClassroomApp} />
                <Route path="/classroom" component={LecturerClassroomApp} />
                <Route path="/follower" component={LecturerFollowerApp} />
                <Route path="/word" component={LecturerWordApp} />
                <Route path="/video" component={LecturerVideoApp} />
                <Route path="/target" component={LecturerTargetApp} />
                <Route path="/message" component={LecturerMessageApp} />
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
