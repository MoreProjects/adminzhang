import React from 'react';
import './LecturerCourseContent.less';

import ajax from '../../api/ApiService';
import LecturerProfile from '../LecturerProfile';

import moment from 'moment';

const LecturerCourseContent = React.createClass({
     getInitialState() {
        return {
            textLiveList: []
        };
     },

     /**
      * 获取文字直播列表
      */
    getTextLiveList () {
        const _self = this;

        ajax.textLiveList('ctr34475696', {
            params: {}
        }, (responseData) => {
            _self.setState({
                textLiveList: responseData.list
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

                    <table className="table table-invoice">
                        <tbody>
                            {textLiveListEle}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    },

    componentDidMount () {
        this.getTextLiveList();
    }
});

export default LecturerCourseContent;