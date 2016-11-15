import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import FastClick from 'fastclick';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import LecturerClassroomApp from './components/LecturerClassroomApp';
import LecturerFollowerApp from './components/LecturerFollowerApp';
import LecturerWordApp from './components/LecturerWordApp';
import LecturerVideoApp from './components/LecturerVideoApp';
import LecturerTargetApp from './components/LecturerTargetApp';
import LecturerMessageApp from './components/LecturerMessageApp';
import LecturerArticlesApp from './components/LecturerArticlesApp';
import LecturerCourseApp from './components/LecturerCourseApp';
import LecturerHighlightApp from './components/LecturerHighlightApp';
import ajax from './api/ApiService';

/**
 * 全局
 * 
 * 用户基本信息
 */
window.globalUserInfo = null;

window.onGetUserInfo = {};

window.registerToGetUserInfo = function(key, callback) {
    if (window.globalUserInfo) {
        callback && callback();
    } else {
        if (key) {
            window.onGetUserInfo[key] = callback;
        }
    }
};



function fetch() {
    ajax.liveInfo({
        params: {}
    }, (responseData) => {
        if (responseData) {
            window.globalUserInfo = {
                userName: responseData.owner_name,
                classroomID: responseData.id,
                classroomName: responseData.room_name,
                followerNum: responseData.following,
                userImage: responseData.portrait_url,
                wordRoomId: (responseData.text_room && responseData.text_room.id) || ''
            };

            for (let key in window.onGetUserInfo) {
                window.onGetUserInfo[key] && window.onGetUserInfo[key]();
            }
        }
    });
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
                <Route path="/articles" component={LecturerArticlesApp} />
                <Route path="/course" component={LecturerCourseApp} />
                <Route path="/highlight" component={LecturerHighlightApp} />
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
