import Util from '../core/Util';

const DoLog = {
    // 项目工程 ID, 项目名称即可
    projectId: 'salary',

    /**
     * [ 手机设备信息 ]
     *  platform -> 平台类型，enum{'android', 'ios', 'pc'}
     *  version  -> 平台版本信息
     */
    device: '',

    // 开放平台下发的 应用ID
    appid: '',

    // 应用的发布版本
    appversion: /FSBrowser\/([\d|\.]*)$/gi.test(navigator.userAgent) ? RegExp.$1 : 'unknown',

    // 终端平台 'pc' || 'android' || 'ios'
    _fplatform: '',

    // 终端系统版本号
    _fversion: '',

    // host 日志上报域
    host: /\w+\.(\w+)\.\w+/g.test(location.host) ? RegExp.$1 : 'fxiaoke',

    openUserId: '',


    /**
     * [log 封装jsapi埋点统计，和本地写的currentLog ]
     * @param  {[type]} key  [统计类型]
     * @param  {[type]} data [统计参数]
     * @return {[Object]}    [...]
     */
    log: function(key, data){
        let _self = this;
    
        if(typeof FSOpen !== 'undefined' && FSOpen){
            if(window.salaryGlobalData.fsOpenReady){
                _self.jsapiLog(key, data);
            }else{
                window.salaryGlobalData.fsOpenCallback['jsapi'] = function(){
                    _self.jsapiLog(key, data);
                }
            }
        }else{
            window.salaryGlobalData && window.salaryGlobalData.bindCallback && window.salaryGlobalData.bindCallback(window.salaryGlobalData.getIdReady, function(){
                _self.currentLog(key, data);
            });
        }
    },
    
    /**
     * jsapi 埋点统计
     * @param  {[type]} key  [统计类型]
     * @param  {[type]} data [统计参数]
     */
    jsapiLog: function(key, data){
        let detailData = data || {};
        let tempData = {};
        for(let sKey in data){
            if(sKey === "orderId"){
                tempData["M2"] = detailData[sKey];
            }else if(sKey === "status"){
                tempData["M3"] = detailData[sKey];
            }else{
                tempData[sKey] = detailData[sKey];
            }

        }
        this.device = this.device || Util.getDeviceInfo();

        if (!this.appid) {
            this.appid = (window.salaryGlobalData && window.salaryGlobalData.appId) || '';
        }

        if (!this.openUserId) {
            this.openUserId = (window.salaryGlobalData && window.salaryGlobalData.openUserId) || '';
        }

        detailData = Util.extend({
            projectId: this.projectId,
            appid: this.appid,
            M1: key,
            ouserid: this.openUserId
        }, tempData);

        FSOpen.util.traceEvent({
            detail: detailData
        });
    },

    /**
     * [log 真正做打点统计的API; DoLog.currentLog('OrderDetailShow', {orderId: 'FS_123', status: 'Solved'}) ]
     * @param  {[type]} key  [统计类型]
     * @param  {[type]} data [统计参数]
     * @return {[Object]}    [...]
     */
    currentLog: function(key, data){
        let detailData = data || {};

        this.device = this.device || Util.getDeviceInfo();

        if (!this.appid) {
            this.appid = (window.salaryGlobalData && window.salaryGlobalData.appId) || '';
        }

        if (!this.openUserId) {
            this.openUserId = (window.salaryGlobalData && window.salaryGlobalData.openUserId) || '';
        }

        detailData = Util.extend({
            projectId: this.projectId,
            appid: this.appid,
            appversion: this.appversion,
            _fplatform: this.device.platform,
            _fversion: this.device.version,

            actionid: key,
            ouserid: this.openUserId,
            _t: + new Date()
        }, detailData);

        let img = new Image();
        img.src = '//sp.' + this.host + '.com/m.gif?' + Util.toKeyValue(detailData);
        img = null;
    }
};

export default DoLog;