import React from 'react';
import './LecturerWordContent.less';

import ajax from '../../api/ApiService';
import LecturerProfile from '../LecturerProfile';

import moment from 'moment';

const LecturerWordContent = React.createClass({
     getInitialState() {
        return {
            textLiveList: []
        };
     },

     wordRoomId: '',

     /**
      * 获取文字直播列表
      */
    getTextLiveList () {
        const _self = this;

        ajax.textLiveList(this.wordRoomId, {
            params: {}
        }, (responseData) => {
            if (responseData && responseData.list) {
                _self.setState({
                    textLiveList: responseData.list
                });
            }
        });
    },

     /**
      * 发送新观点/新文字
      */
    sendNewWord () {
        const _self = this;
        let word = this.refs.wordContentNewWord.value || '';

        if (!word) {
            return;
        }

        ajax.postText(this.wordRoomId, {
            params: {
                content: word
            }
        }, (responseData) => {
            if (responseData) {
                _self.refs.wordContentNewWord.value = '';
                _self.getTextLiveList();
            }
        });
    },

    /**
     * 渲染 文字直播列表
     * 
     * @returns
     */
    renderTextLiveList () {
        let textLiveListEle = this.state.textLiveList && this.state.textLiveList.map((item, index) => {
            let ctime = moment(item.create_time).format('YYYY-MM-DD HH:mm');
            return (
                <div className="alert alert-success" key={'l-wordcontent-' + index}>
                    <div className="invoice-company text-inverse">
                        <span className="pull-right hidden-print"></span>
                        <div className="text-center">{ctime} <a href="javascript:;" target="_blank" className="pull-right l-wordcontent-file text-left" >{item.content}</a></div>
                    </div>
                </div>
            );
        });

        if (!textLiveListEle || textLiveListEle.length === 0) {
            textLiveListEle = [];
            textLiveListEle.push(
                <p>暂时没有文字直播</p>
            );
        }

        if (textLiveListEle.length > 1) {
            textLiveListEle = textLiveListEle.reverse();
        }

        return textLiveListEle;
    },

    /**
     * 
     * @returns
     */
    render () {
        let textLiveListEle = this.renderTextLiveList();

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
                                <textarea className="form-control" placeholder="请输入想要发表的新观点" rows="5" ref="wordContentNewWord"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-12 m-t-10 text-right">
                                <button type="submit" className="btn btn-sm btn-success" onClick={this.sendNewWord} >发送新观点</button>
                            </div>
                        </div>
                    </div>

                    <div className="panel panel-success" data-sortable-id="ui-widget-12">
                        <div>&nbsp;</div>
                        {textLiveListEle}
                    </div>
                </div>
            </div>
        );
    },

    componentDidMount () {
        const _self = this;

        window.registerToGetUserInfo('l_wordcontent', function () {
            if (window.globalUserInfo && window.globalUserInfo.wordRoomId) {
                _self.wordRoomId = window.globalUserInfo.wordRoomId;            
                _self.getTextLiveList();
            }
        });
    }
});

export default LecturerWordContent;