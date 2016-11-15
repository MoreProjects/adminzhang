import React from 'react';
import './LecturerClassroomContent.less';

import LecturerProfile from '../LecturerProfile';

import ajax from '../../api/ApiService';
import moment from 'moment';

const LecturerClassroomContent = React.createClass({
    getInitialState() {
        return {
            liveStatisticList: []
        };
     },

    getLiveStatistic () {
        const _self = this;

        ajax.liveStatistic({
            params: {
                page: 1,
                page_size: 10
            }
        }, (responseData) => {
            if (responseData && responseData.list) {
                _self.setState({
                    liveStatisticList: responseData.list
                });
            }
        });
    },

    /**
     * 渲染表格列表
     * 
     * @returns
     */
    renderLiveStatistic () {
        let liveStatisticList = this.state.liveStatisticList && this.state.liveStatisticList.map((item, index) => {
            let startTime = moment(item.enter_time).format('YYYY-MM-DD HH:mm');

            let d = moment.duration(item.last_seconds, 'second');
            let formatStr = '';

            if (d.hours() > 0) {
                formatStr += d.hours() + '天';
            }

            if (d.minutes() > 0) {
                formatStr += d.minutes() + '分';
            }

            if (d.seconds() > 0) {
                formatStr += d.seconds() + '秒';
            }

            return (
                <tr key={'l-classroomcontent-' + index}>
                    <td>{item.nickname}</td>
                    <td>{startTime}</td>
                    <td>{formatStr}</td>
                    <td>{item.identified ? '是' : '否'}</td>
                </tr>
            );
        });

        if (!liveStatisticList || liveStatisticList.length === 0) {
            liveStatisticList = [];
            liveStatisticList.push(
                <tr>
                    <td colspan="4">暂时没有直播间统计信息</td>
                </tr>
            );
        }

        if (liveStatisticList.liveStatisticList > 1) {
            liveStatisticList = liveStatisticList.reverse();
        }

        return liveStatisticList;
    },

    /**
     * 
     * @returns
     */
    render () {
        let liveStatisticList = this.renderLiveStatistic();

        return (
            //<!-- begin #content -->
            <div id="content" className="content l-classroomcontent">
                <LecturerProfile />
                <div className="panel panel-success" data-sortable-id="ui-widget-12">
                    <div className="panel-body">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>用户昵称</th><th>进入房间时间</th><th>停留时长</th><th>是否实名注册</th>
                                </tr>
                            </thead>
                            <tbody>
                                {liveStatisticList}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
		    //<!-- end #content -->
        );
    },

    componentDidMount () {
        this.getLiveStatistic();
    }
});

export default LecturerClassroomContent;