import React from 'react';
import './LecturerVideoContent.less';

import ajax from '../../api/ApiService';
import LecturerProfile from '../LecturerProfile';

const LecturerVideoContent = React.createClass({
    getInitialState() {
        return {
            recordingsList: [],
            coursesList: [],
            videoHighlightList: []
        };
     },

    /**
     * 获取历史录播列表
     */
    getRecordingsList () {
        const _self = this;

        ajax.recordingsList({
            params: {
                page: 1,
                page_size: 5
            }
        }, (responseData) => {
            _self.setState({
                recordingsList: responseData.list
            });
        });
    },

    /**
     * 获取公开课列表
     */
    getCoursesList () {
        const _self = this;

        ajax.coursesList({
            params: {
                page: 1,
                page_size: 5
            }
        }, (responseData) => {
            _self.setState({
                coursesList: responseData.list
            });
        });
    },

    /**
     * 获取视频集锦列表
     */
    getVideoHighlightList () {
        const _self = this;

        ajax.videoHighlightList({
            params: {
                page: 1,
                page_size: 5
            }
        }, (responseData) => {
            _self.setState({
                videoHighlightList: responseData.list
            });
        });
    },

    /**
     * 渲染列表 包括 视频集锦 公开课 历史录播
     * 
     * @param {any} list
     * @returns
     */
    renderList (list) {
        let listEle = list && list.map((item, index) => {
            return (
                <div className="alert alert-success" key={'l-vodeocontent-' + index}>
                    <div className="invoice-company text-inverse">
                        <span className="pull-right hidden-print">
                            <a href="javascript:;" onClick={this.deleteTarget} className="btn btn-primary btn-sm btn-primary p-l-20 p-r-20" data-tid={item.id} > 删除 </a>
                        </span>
                        <div>{item.name} <a href="javascript:;" target="_blank" className="pull-right l-targetcontent-file" >{item.description}</a></div>
                    </div>
                </div>
            );
        });

        if (!listEle || listEle.length === 0) {
            listEle = (
                <p>暂时没有数据</p>
            );
        }

        return listEle;
    },

    /**

     * 
     * @returns
     */
    render () {
        let recordingsListEle = this.renderList(this.state.recordingsList);
        let coursesListEle = this.renderList(this.state.coursesList);
        let videoHighlightListEle = this.renderList(this.state.videoHighlightList);

        return (
            <div id="content" className="l-wordcontent content">
                <LecturerProfile />
                <div className="panel panel-success" data-sortable-id="ui-widget-12">
                    <div className="panel-heading">
                        <h4 className="panel-title">历史录播</h4>
                    </div>
                    <div>&nbsp;</div>
                    <div className="panel-body">
                        {recordingsListEle}
                    </div>
                </div>
                <div className="panel panel-success" data-sortable-id="ui-widget-12">
                    <div className="panel-heading">
                        <h4 className="panel-title">公开课</h4>
                    </div>
                    <div>&nbsp;</div>
                    <div className="panel-body">
                        {coursesListEle}
                    </div>
                </div>
                <div className="panel panel-success" data-sortable-id="ui-widget-12">
                    <div className="panel-heading">
                        <h4 className="panel-title">视频集锦</h4>
                    </div>
                    <div>&nbsp;</div>
                    <div className="panel-body">
                        {videoHighlightListEle}
                    </div>
                </div>
            </div>
        );
    },

    componentDidMount () {
        this.getRecordingsList();
        this.getCoursesList();
        this.getVideoHighlightList();
    }
});

export default LecturerVideoContent;