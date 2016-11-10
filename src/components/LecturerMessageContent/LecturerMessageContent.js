import React from 'react';
import './LecturerMessageContent.less';

import ajax from '../../api/ApiService';

const LecturerMessageContent = React.createClass({
     getInitialState() {
        return {
            allUnreadMessageList: [],
            allReadMessageList: []
        };
     },

    /**
     * 获取未读消息列表
     */
    getUnreadMessageList () {
        const _self = this;

        ajax.messageList({
            params: {
                page: 1,
                page_size: 20,
                is_read: false
            }
        }, (responseData) => {
            if (responseData) {
                _self.setState({
                    allUnreadMessageList: responseData.list
                });
            }
        });
    },

    /**
     * 获取已读消息列表
     */
    getReadMessageList () {
        const _self = this;

        ajax.messageList({
            params: {
                page: 1,
                page_size: 20,
                is_read: true
            }
        }, (responseData) => {
            if (responseData) {
                 _self.setState({
                    allReadMessageList: responseData.list
                });
            }
        });
    },

    /**
     * 收起 消息正文内容
     */
    togglerHide (event) {

    },

    /**
     * 展开 消息正文内容
     */
    togglerShow (event) {
        
    },

    /**
     * 显示 未读 tab
     */
    showUnread () {
        this.refs.read.classList.remove('active');
        this.refs.read_content.classList.remove('active');

        this.refs.unread.classList.add('active');
        this.refs.unread_content.classList.add('active');
    },

    /**
     * 显示 已读 tab
     */
    showRead () {
        this.refs.read.classList.add('active');
        this.refs.read_content.classList.add('active');

        this.refs.unread.classList.remove('active');
        this.refs.unread_content.classList.remove('active');
    },

    /**
     * 统一渲染消息列表
     * 
     * @param {any} messagelist
     * @returns
     */
    renderMessageList (messagelist) {
        let messageListEle = messagelist && messagelist.map((item, index) => {
            return (
                <div className="media media-sm note note-success" key={'l-messagecontent-' + index} >
                    <h3 className="m-t-10"><i className="fa fa-cog"></i> {item.title}</h3>
                    <p className="l-messagecontent-desc">
                        {item.title}
                    </p>
                    <p className="text-right m-b-0">
                        <a href="javascript:;" className="btn btn-white m-r-5" onClick={this.togglerShow} >展开</a>
                        <a href="javascript:;" className="btn btn-primary" onClick={this.togglerHide} >收起</a>
                    </p>
                </div>
            );
        });

        if (!messageListEle || messageListEle.length === 0) {
            messageListEle = [].push(
                <p>暂时没有消息</p>
            );
        }

        if (messageListEle.length > 1) {
            messageListEle = messageListEle.reverse();
        }

        return messageListEle;
    },

    /**
     * 
     * @returns
     */
    render () {
        let unreadMessageListEle = this.renderMessageList(this.state.allUnreadMessageList);
        let readMessageListEle = this.renderMessageList(this.state.allReadMessageList);

        return (
            <div id="content" className="l-messagecontent content">
                <div className="panel">
                        <ul className="nav nav-tabs">
                            <li className="active" onClick={this.showUnread} ref="unread" ><a href="javascript:;" data-toggle="tab">未读</a></li>
                            <li className="" onClick={this.showRead} ref="read" ><a href="javascript:;" data-toggle="tab">已读</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active in" ref="unread_content" >
                                {unreadMessageListEle}
                            </div>
                            <div className="tab-pane" ref="read_content">
                                {readMessageListEle}
                            </div>
                        </div>
					</div>
            </div>
        );
    },

    componentDidMount () {
        this.getUnreadMessageList();
        this.getReadMessageList();
    }
});

export default LecturerMessageContent;