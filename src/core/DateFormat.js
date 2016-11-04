/**
 * Created by weny on 2016/6/14.
 */
import moment from 'moment'; // 处理时间的第三方工具库
moment.locale('zh-cn');
const DateFormat ={
    /**
     * format  实现如下：
     * 时间当天用hh:mm的时分格式，昨天用“昨天”，昨天到本周周内就用周几，一周之前用
     * mm/dd本年内，月日的格式，本年外用yy/mm/dd，日月年的格式；
     * @params [Number] time 毫秒
     * @return [String]
     */
    format(time){
        let momentTime = moment(time);
        let diff = moment().endOf('day').diff(time, 'days');
        let diffYear = moment().endOf('year').diff(time, 'years');

        let formatTimeStr = '';

        if (diff === 0) {
            formatTimeStr = momentTime.format("HH:mm");
        } else if (diff === 1) {
            formatTimeStr = '昨天';
        } else if (diff <= 6) {
            formatTimeStr = momentTime.format('dddd');
        } else {
            if(diffYear > 0){//本年外
                formatTimeStr = momentTime.format("YYYY/M/D");
            }else{
                formatTimeStr = momentTime.format("M/D");
            }
        }
        return formatTimeStr;
    }
};
export default DateFormat;

