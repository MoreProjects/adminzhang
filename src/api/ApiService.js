import http from './HttpClient';
import util from '../core/Util';
import { apiBaseUrl, isMobileClient } from './ApiConfig';

const urlMap = {
    'teacherCourses': apiBaseUrl + '/teacher/courses',
    'liveInfo': apiBaseUrl + '/live/info',
    'courses': apiBaseUrl + '/courses',
    'teacherFollower': apiBaseUrl + '/teacher/followers'
};

const ApiService = {
    /**
     * [liveInfo 获取直播间信息]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    teacherCourses(requestConfig, callback) {
        const url = urlMap.liveInfo;

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [liveInfo 获取直播间信息]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    liveInfo(requestConfig, callback) {
        const url = urlMap.liveInfo;

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [courses 获取首页视频]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    courses(requestConfig, callback) {
        const url = urlMap.courses;

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [teacherFollower 获取讲师拜徒列表]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    teacherFollower(requestConfig, callback) {
        const url = urlMap.teacherFollower;

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    }
};

export default ApiService;