import React from 'react';
import './LecturerFollowerContent.less';

import ajax from '../../api/ApiService';

console.log(ajax);

const LecturerFollowerContent = React.createClass({
    /**

     * 
     * @returns
     */
    render () {
        return (
            <div id="content" className="content">
                
                {/* begin panel */}
                <div className="panel panel-success" data-sortable-id="ui-widget-12">
                    <div className="panel-heading">
                        <h4 className="panel-title">拜师请求</h4>
                    </div>
                    <div className="panel-body">
                        <div className="alert alert-success invoice">
                            <div className="invoice-company text-inverse">
                                <span className="pull-right hidden-print">
                                    <a href="javascript:;" className="btn btn-white btn-sm m-r-10 p-l-20 p-r-20"> 拒绝 </a>
                                    <a href="javascript:;" onclick="window.print()" className="btn btn-primary btn-sm btn-primary p-l-20 p-r-20"> 同意 </a>
                                </span>
                                我的乔峰，请求拜你为师
                            </div>
                        </div>
                        <div className="alert alert-success invoice">
                            <div className="invoice-company text-inverse">
                                <span className="pull-right hidden-print">
                                    <a href="javascript:;" className="btn btn-white btn-sm m-r-10 p-l-20 p-r-20"> 拒绝 </a>
                                    <a href="javascript:;" onclick="window.print()" className="btn btn-primary btn-sm btn-primary p-l-20 p-r-20"> 同意 </a>
                                </span>
                                我的乔峰，请求拜你为师
                            </div>
                        </div>
                        <div className="alert alert-success invoice">
                            <div className="invoice-company text-inverse">
                                <span className="pull-right hidden-print">
                                    <a href="javascript:;" className="btn btn-white btn-sm m-r-10 p-l-20 p-r-20"> 拒绝 </a>
                                    <a href="javascript:;" onclick="window.print()" className="btn btn-primary btn-sm btn-primary p-l-20 p-r-20"> 同意 </a>
                                </span>
                                我的乔峰，请求拜你为师
                            </div>
                        </div>
                    </div>
                </div>
                {/* end panel */}

                {/* begin panel */}
                <div className="panel panel-success" data-sortable-id="ui-widget-12">
                    <div className="panel-heading">
                        <h4 className="panel-title">我的徒弟</h4>
                    </div>
                    <div className="panel-body">
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <td class="text-center">
                                        <div className="media media-sm note note-success">
                                            <a className="media-left" href="javascript:;">
                                                <img src="http://e.hiphotos.baidu.com/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=7f8a91998644ebf8797c6c6db890bc4f/32fa828ba61ea8d3e9f5dc9e960a304e241f5850.jpg" alt="" className="media-object rounded-corner" />
                                            </a>
                                            <div className="media-body">
                                                <h4 className="media-heading">&nbsp;</h4>
                                                <p>乔峰</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        <div className="media media-sm note note-success">
                                            <a className="media-left" href="javascript:;">
                                                <img src="http://e.hiphotos.baidu.com/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=7f8a91998644ebf8797c6c6db890bc4f/32fa828ba61ea8d3e9f5dc9e960a304e241f5850.jpg" alt="" className="media-object rounded-corner" />
                                            </a>
                                            <div className="media-body">
                                                <h4 className="media-heading">&nbsp;</h4>
                                                <p>乔峰</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        <div className="media media-sm note note-success">
                                            <a className="media-left" href="javascript:;">
                                                <img src="http://e.hiphotos.baidu.com/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=7f8a91998644ebf8797c6c6db890bc4f/32fa828ba61ea8d3e9f5dc9e960a304e241f5850.jpg" alt="" className="media-object rounded-corner" />
                                            </a>
                                            <div className="media-body">
                                                <h4 className="media-heading">&nbsp;</h4>
                                                <p>乔峰</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center">
                                        <div className="media media-sm note note-success">
                                            <a className="media-left" href="javascript:;">
                                                <img src="http://e.hiphotos.baidu.com/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=7f8a91998644ebf8797c6c6db890bc4f/32fa828ba61ea8d3e9f5dc9e960a304e241f5850.jpg" alt="" className="media-object rounded-corner" />
                                            </a>
                                            <div className="media-body">
                                                <h4 className="media-heading">&nbsp;</h4>
                                                <p>乔峰</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        <div className="media media-sm note note-success">
                                            <a className="media-left" href="javascript:;">
                                                <img src="http://e.hiphotos.baidu.com/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=7f8a91998644ebf8797c6c6db890bc4f/32fa828ba61ea8d3e9f5dc9e960a304e241f5850.jpg" alt="" className="media-object rounded-corner" />
                                            </a>
                                            <div className="media-body">
                                                <h4 className="media-heading">&nbsp;</h4>
                                                <p>乔峰</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-center">
                                        <div className="media media-sm note note-success">
                                            <a className="media-left" href="javascript:;">
                                                <img src="http://e.hiphotos.baidu.com/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=7f8a91998644ebf8797c6c6db890bc4f/32fa828ba61ea8d3e9f5dc9e960a304e241f5850.jpg" alt="" className="media-object rounded-corner" />
                                            </a>
                                            <div className="media-body">
                                                <h4 className="media-heading">&nbsp;</h4>
                                                <p>乔峰</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
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

export default LecturerFollowerContent;