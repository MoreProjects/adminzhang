import http from './HttpClient';
import util from '../core/Util';
import { apiBaseUrl, isMobileClient } from './ApiConfig';

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
    }
};

export default ApiService;