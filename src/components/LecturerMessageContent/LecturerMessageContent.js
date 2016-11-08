import React from 'react';
import './LecturerMessageContent.less';

import ajax from '../../api/ApiService';
import LecturerProfile from '../LecturerProfile';

import moment from 'moment';

const LecturerMessageContent = React.createClass({
     getInitialState() {
        return {
            allMessageList: []
        };
     },

     /**
      * 获取文字直播列表
      */
    getMessageList () {
        const _self = this;

        ajax.messageList({
            params: {
                page: 1,
                page_size: 20
            }
        }, (responseData) => {
            _self.setState({
                allMessageList: responseData.list
            });
        });
    },

     /**
      * 发送新观点/新文字
      */
    sendNewWord () {
        const _self = this;

        ajax.postText('ctr34475696', {
            params: {
                content: this.refs.wordContentNewWord.value
            }
        }, (responseData) => {
            _self.refs.wordContentNewWord.value = '';
            _self.getTextLiveList();
        });
    },

    renderTextLiveList () {
        let textLiveListEle = this.state.textLiveList.map((item, index) => {
            let ctime = moment(item.create_time).format('HH:mm');
            return (
                <tr>
                    <td>{ctime}</td>
                    <td>{item.content}</td>
                </tr>
            );
        });

        return textLiveListEle.reverse();
    },

    /**

     * 
     * @returns
     */
    render () {

        return (
            <div id="content" className="l-messagecontent content">
                <div className="panel">
                        <ul className="nav nav-tabs">
                            <li className="active"><a href="#default-tab-1" data-toggle="tab">未读</a></li>
                            <li className=""><a href="#default-tab-2" data-toggle="tab">已读</a></li>
                        </ul>
                        <div className="tab-content">

                            <div className="tab-pane fade active in" id="default-tab-1">
                                <div className="media media-sm note note-success">
                                    <h3 className="m-t-10"><i className="fa fa-cog"></i> 系统通知，快去充值！！！！！！！</h3>
                                    <p>
                                        您的账户余额不足，请及时充值，避免影响使用。
                                    </p>
                                    <p className="text-right m-b-0">
                                        <a href="javascript:;" className="btn btn-white m-r-5">展开</a>
                                        <a href="javascript:;" className="btn btn-primary">收起</a>
                                    </p>
                                </div>
                                <div className="media media-sm note note-success">
                                    <h3 className="m-t-10"><i className="fa fa-cog"></i> 系统通知，快去充值！！！！！！！</h3>
                                    <p>
                                        您的账户余额不足，请及时充值，避免影响使用。
                                    </p>
                                    <p className="text-right m-b-0">
                                        <a href="javascript:;" className="btn btn-white m-r-5">展开</a>
                                        <a href="javascript:;" className="btn btn-primary">收起</a>
                                    </p>
                                </div>
                                <div className="media media-sm note note-success">
                                    <h3 className="m-t-10"><i className="fa fa-cog"></i> 系统通知，快去充值！！！！！！！</h3>
                                    <p>
                                        您的账户余额不足，请及时充值，避免影响使用。
                                    </p>
                                    <p className="text-right m-b-0">
                                        <a href="javascript:;" className="btn btn-white m-r-5">展开</a>
                                        <a href="javascript:;" className="btn btn-primary">收起</a>
                                    </p>
                                </div>
                                <div className="media media-sm note note-success">
                                    <h3 className="m-t-10"><i className="fa fa-cog"></i> 系统通知，快去充值！！！！！！！</h3>
                                    <p>
                                        您的账户余额不足，请及时充值，避免影响使用。
                                    </p>
                                    <p className="text-right m-b-0">
                                        <a href="javascript:;" className="btn btn-white m-r-5">展开</a>
                                        <a href="javascript:;" className="btn btn-primary">收起</a>
                                    </p>
                                </div>
                                <div className="media media-sm note note-success">
                                    <h3 className="m-t-10"><i className="fa fa-cog"></i> 系统通知，快去充值！！！！！！！</h3>
                                    <p>
                                        您的账户余额不足，请及时充值，避免影响使用。
                                    </p>
                                    <p className="text-right m-b-0">
                                        <a href="javascript:;" className="btn btn-white m-r-5">展开</a>
                                        <a href="javascript:;" className="btn btn-primary">收起</a>
                                    </p>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="default-tab-2">
                                <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                                </blockquote>
                                <h4>Lorem ipsum dolor sit amet</h4>
                                <p>
                                    Nullam ac sapien justo. Nam augue mauris, malesuada non magna sed, feugiat blandit ligula. 
                                    In tristique tincidunt purus id iaculis. Pellentesque volutpat tortor a mauris convallis, 
                                    sit amet scelerisque lectus adipiscing.
                                </p>
                            </div>
                            <div className="tab-pane fade" id="default-tab-3">
                                <p>
                                    <span className="fa-stack fa-4x pull-left m-r-10">
                                        <i className="fa fa-square-o fa-stack-2x"></i>
                                        <i className="fa fa-twitter fa-stack-1x"></i>
                                    </span>
                                    Praesent tincidunt nulla ut elit vestibulum viverra. Sed placerat magna eget eros accumsan elementum. 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis lobortis neque. 
                                    Maecenas justo odio, bibendum fringilla quam nec, commodo rutrum quam. 
                                    Donec cursus erat in lacus congue sodales. Nunc bibendum id augue sit amet placerat. 
                                    Quisque et quam id felis tempus volutpat at at diam. Vivamus ac diam turpis.Sed at lacinia augue. 
                                    Nulla facilisi. Fusce at erat suscipit, dapibus elit quis, luctus nulla. 
                                    Quisque adipiscing dui nec orci fermentum blandit.
                                    Sed at lacinia augue. Nulla facilisi. Fusce at erat suscipit, dapibus elit quis, luctus nulla. 
                                    Quisque adipiscing dui nec orci fermentum blandit.
                                </p>
                            </div>
                        </div>
					</div>
            </div>
        );
    },

    componentDidMount () {
        this.getMessageList();
    }
});

export default LecturerMessageContent;