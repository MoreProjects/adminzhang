import React from 'react';
import './LecturerArticlesContent.less';

import ajax from '../../api/ApiService';
import LecturerProfile from '../LecturerProfile';

import moment from 'moment';
import {Editor, EditorState} from 'draft-js';

const LecturerArticlesContent = React.createClass({
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

    change () {},

    /**

     * 
     * @returns
     */
    render () {
        let textLiveListEle = this.renderTextLiveList();

        return (
            <div id="content" className="l-articlescontent content">
                <div className="col-md-12">
                    <div className="panel panel-success" data-sortable-id="form-wysiwyg-2">
                        <div className="panel-heading">
                            <h4 className="panel-title">WYSIHTML5</h4>
                        </div>
                        <div className="panel-body panel-form">
                            <Editor editorState={EditorState.createEmpty()} onChange={this.onChange} />;
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    componentDidMount () {
        this.getTextLiveList();
    }
});

export default LecturerArticlesContent;