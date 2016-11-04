import http from './HttpClient';
import util from '../core/Util';
import { apiBaseUrl, isMobileClient } from './ApiConfig';

const urlMap = {
    'liveInfo': apiBaseUrl + '/live/info'
};

const ApiService = {
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
    }
};

export default ApiService;