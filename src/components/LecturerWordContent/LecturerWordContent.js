import React from 'react';
import './LecturerWordContent.less';

import ajax from '../../api/ApiService';
import LecturerProfile from '../LecturerProfile';

const LecturerWordContent = React.createClass({
    /**

     * 
     * @returns
     */
    render () {
        return (
            <div id="content" className="l-wordcontent content">
                <LecturerProfile />
                <div className="panel panel-success" data-sortable-id="ui-widget-12">
                    <div className="panel-heading">
                        <h4 className="panel-title">文字直播</h4>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <div className="col-md-12">
                                <textarea className="form-control" placeholder="请输入想要发表的新观点" rows="5"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12 m-t-10 text-right">
                                <button type="submit" className="btn btn-sm btn-success">发送新观点</button>
                            </div>
                        </div>
                    </div>

                    <table className="table table-invoice">
                        <tbody>
                            <tr>
                                <td>08:43</td>
                                <td>中国股市将出现大规模的集体抛售现象，具体原因未知，小道消息，仅供参考。</td>
                            </tr>
                            <tr>
                                <td>08:43</td>
                                <td>中国股市将出现大规模的集体抛售现象，具体原因未知，小道消息，仅供参考。</td>
                            </tr>
                            <tr>
                                <td>08:43</td>
                                <td>中国股市将出现大规模的集体抛售现象，具体原因未知，小道消息，仅供参考。</td>
                            </tr>
                            <tr>
                                <td>08:43</td>
                                <td>中国股市将出现大规模的集体抛售现象，具体原因未知，小道消息，仅供参考。</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    },

    componentDidMount () {
        ajax.teacherFollower({
            params: {}
        }, (responseData) => {
            console.log(responseData);
        });
    }
});

export default LecturerWordContent;