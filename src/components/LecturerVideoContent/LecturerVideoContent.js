import React from 'react';
import './LecturerVideoContent.less';

import ajax from '../../api/ApiService';
import LecturerProfile from '../LecturerProfile';

const LecturerVideoContent = React.createClass({
    getInitialState() {
        return {
            recordingsList: [],
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
            if (responseData && responseData.list) {
                _self.setState({
                    recordingsList: responseData.list
                });
            }
        });
    },

    /**
     * 删除历史录播
     */
    deleteRecording (event) {
        const _self = this;
        let recordingId = event.target.getAttribute('data-tid') || '';

        if (!recordingId) {
            return false;
        }

        ajax.deleteRecording(recordingId, {
            params: {
            }
        }, (responseData) => {
            if (responseData) {
                _self.getRecordingsList();
            }
        });
    },

    /**
     * 渲染列表 历史录播
     * 
     * @param {any} list
     * @returns
     */
    renderList (list) {
        let listEle = list && list.map((item, index) => {
            return (
                <form className="form-horizontal" encType="multipart/form-data" key={'l-videocontent-' + index}>
                    <div className="form-group upload-image profile-left">
                        <img className="profile-image" src={item.cover_img} />
                    </div>

                    <div className="form-group common-info common-info-title">
                        <label className="col-md-1 control-label">录播标题：</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" placeholder={item.name} />
                        </div>
                    </div>   

                    <div className="form-group common-info common-info-desc">
                        <label className="col-md-1 control-label">录播描述：</label>
                        <div className="col-md-9">
                            <textarea className="form-control" placeholder={item.description} rows="5" ></textarea>
                        </div>
                    </div>                   

                    <div className="form-group common-info">
                        <label className="col-md-1 control-label">录播地址URL:</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" placeholder="请输入录播地址" />
                        </div>
                    </div>

                    <div className="form-group dispath-course common-info">
                        <label className="col-md-1 control-label">&nbsp;</label>
                        <div className="col-md-9 text-right">
                            <div onClick={this.deleteRecording} data-tid={item.id} className="btn btn-sm btn-success p-l-20 p-r-20">删除</div>
                        </div>
                    </div>
                </form>
            );
        });

        if (!listEle || listEle.length === 0) {
            listEle = [];
            listEle.push(
                <p>暂时没有视频</p>
            );
        }

        if (listEle.length > 1) {
            listEle = listEle.reverse();
        }

        return listEle;
    },

    /**
     * 
     * @returns
     */
    render () {
        let recordingsListEle = this.renderList(this.state.recordingsList);

        return (
            <div id="content" className="l-videocontent content">
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
            </div>
        );
    },

    componentDidMount () {
        this.getRecordingsList();
    }
});

export default LecturerVideoContent;