import http from './HttpClient';
import util from '../core/Util';
import { apiBaseUrl, isMobileClient } from './ApiConfig';

const urlMap = {
    'teacherCourses': apiBaseUrl + '/teacher/courses',
    'liveInfo': apiBaseUrl + '/live/info',
    'courses': apiBaseUrl + '/courses',
    'teacherFollower': apiBaseUrl + '/teacher/followers',
    'userInfo': apiBaseUrl + '/user/info',
    'textLiveList': apiBaseUrl + '/text-lives/{textRoomId}/texts',
    'postText': apiBaseUrl + '/live/text-room/{id}/texts',

    'targetList': apiBaseUrl + '/teacher/targets',
    'postTarget': apiBaseUrl + '/teacher/targets',
    'deleteTarget': apiBaseUrl + '/teacher/targets/{targetId}',

    'messageList': apiBaseUrl + '/user/notices'
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
    },

    /**
     * [userInfo 获取用户个人信息]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    userInfo(requestConfig, callback) {
        const url = urlMap.userInfo;

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [textLiveList 获取文字直播列表]
     * @param  {[string]}   textRoomId  [文字直播ID]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    textLiveList(textRoomId, requestConfig, callback) {
        const url = urlMap.textLiveList.replace('{textRoomId}', textRoomId);

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [postText 发送文字直播]
     * @param  {[string]}   textRoomId  [文字直播ID]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    postText(textRoomId, requestConfig, callback) {
        const url = urlMap.postText.replace('{id}', textRoomId);

        return http.post(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [targetList 指标列表]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    targetList(requestConfig, callback) {
        const url = urlMap.targetList;

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [postTarget 上传指标]
     * @param  {[object]}   file  [上传附件信息]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    postTarget(file, requestConfig, callback) {
        const url = urlMap.postTarget;

        return http.postWithFile(file, url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [deleteTarget 删除指标]
     * @param  {[string]}   targetId  [指标ID]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    deleteTarget(targetId, requestConfig, callback) {
        const url = urlMap.deleteTarget.replace('{targetId}', targetId);

        return http.delete(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [messageList 获取消息列表]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    messageList(requestConfig, callback) {
        const url = urlMap.messageList;

        return http.get(url, requestConfig.params).then(response => {
            return callback(response);
        });
    }
};

export default ApiService;