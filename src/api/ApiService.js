import http from './HttpClient';
import util from '../core/Util';
import { apiBaseUrl, apiSpecialUrl, apiSandboxUrl, isMobileClient } from './ApiConfig';

const urlMap = {
    'gzReceive': apiSpecialUrl + '/gzReceive',
    'gzErrorFeed': apiBaseUrl + '/gzErrorFeed',
    'gzDoConfirm': apiBaseUrl + '/gzDoConfirm',
    'gzHistory': apiBaseUrl + '/gzHistory',
    'gzTypeMonth': apiBaseUrl + '/gzTypeMonth',
    'gzDetail': apiBaseUrl + '/gzDetail',
    'gzGrayControl': apiSandboxUrl + '/grayControl',
    'gzConfirm': apiBaseUrl + '/gzConfirm'
};

const ApiService = {
    /**
     * [gzReceive 获取用户身份态]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    gzReceive(requestConfig, callback) {
        const url = urlMap.gzReceive;

        return http.post(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [gzErrorFeed 提交数据报错信息]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    gzErrorFeed(requestConfig, callback) {
        const url = urlMap.gzErrorFeed;

        return http.post(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [gzDoConfirm 确认工数据准确]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    gzDoConfirm(requestConfig, callback) {
        const url = urlMap.gzDoConfirm;

        return http.post(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [gzHistory 历史数据]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    gzHistory(requestConfig, callback) {
        const url = urlMap.gzHistory;

        return http.post(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [gzTypeMonth 获取表单类型和时间]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    gzTypeMonth(requestConfig, callback) {
        const url = urlMap.gzTypeMonth;

        return http.post(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },

    /**
     * [gzDetail 获取表单详情]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    gzDetail(requestConfig, callback) {
        const url = urlMap.gzDetail;

        return http.post(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },


    /**
     * [gzGrayControl 获取表单详情]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    gzGrayControl(requestConfig, callback) {
        const url = urlMap.gzGrayControl;

        return http.post(url, requestConfig.params).then(response => {
            return callback(response);
        });
    },


    /**
     * [gzConfirm 获取表单详情]
     * @param  {[object]}   requestConfig [请求参数]
     * @param  {Function} callback      [请求完成，回调函数]
     * @return {[...]}                 [回调函数返回值]
     */
    gzConfirm(requestConfig, callback) {
        const url = urlMap.gzConfirm;

        return http.post(url, requestConfig.params).then(response => {
            return callback(response);
        });
    }
};

export default ApiService;