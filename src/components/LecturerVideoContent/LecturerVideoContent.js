import React from 'react';
import './LecturerVideoContent.less';

import ajax from '../../api/ApiService';
import LecturerProfile from '../LecturerProfile';

const LecturerVideoContent = React.createClass({
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
                        <h4 className="panel-title">播放文件</h4>
                    </div>
                    <div>&nbsp;</div>
                    <div className="alert alert-success">
                        <div className="invoice-company text-inverse">
                            <span className="pull-right hidden-print">
                                <a href="javascript:;" className="btn btn-grey btn-sm m-r-10 p-l-20 p-r-20"> 停止 </a>
                                <a href="javascript:;" onclick="window.print()" className="btn btn-primary btn-sm btn-primary p-l-20 p-r-20"> 开始 </a>
                            </span>
                            URL：        www.youku.com/huy8hf73hhf98
                        </div>
                    </div>
                    <div className="alert alert-success">
                        <div className="invoice-company text-inverse">
                            <span className="pull-right hidden-print">
                                <a href="javascript:;" className="btn btn-grey btn-sm m-r-10 p-l-20 p-r-20"> 停止 </a>
                                <a href="javascript:;" onclick="window.print()" className="btn btn-primary btn-sm btn-primary p-l-20 p-r-20"> 开始 </a>
                            </span>
                            URL：        www.youku.com/huy8hf73hhf98
                        </div>
                    </div>
                    <div className="alert alert-success">
                        <div className="invoice-company text-inverse">
                            <span className="pull-right hidden-print">
                                <a href="javascript:;" className="btn btn-grey btn-sm m-r-10 p-l-20 p-r-20"> 停止 </a>
                                <a href="javascript:;" onclick="window.print()" className="btn btn-primary btn-sm btn-primary p-l-20 p-r-20"> 开始 </a>
                            </span>
                            URL：        www.youku.com/huy8hf73hhf98
                        </div>
                    </div>
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

export default LecturerVideoContent;