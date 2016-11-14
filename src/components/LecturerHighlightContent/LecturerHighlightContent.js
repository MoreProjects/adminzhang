import React from 'react';
import './LecturerHighlightContent.less';

import ajax from '../../api/ApiService';

const LecturerHighlightContent = React.createClass({
    getInitialState() {
        return {
            recordingsList: [],
            coursesList: [],
            videoHighlightList: []
        };
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
            if (responseData) {
                _self.setState({
                    videoHighlightList: responseData.list
                });
            }
        });
    },

    /**
     * 删除历史集锦
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
     * 渲染列表 包括 视频集锦 公开课 历史集锦
     * 
     * @param {any} list
     * @returns
     */
    renderList (list) {
        let listEle = list && list.map((item, index) => {
            return (
                <form className="form-horizontal" encType="multipart/form-data" ref="courseform" key={'l-vodeocontent-' + index}>
                    <div className="form-group upload-image profile-left">
                        <img className="profile-image" src={item.cover_img} />
                        <div className="m-b-10"> </div>
                    </div>

                    <div className="form-group common-info common-info-title">
                        <label className="col-md-1 control-label">集锦标题：</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" placeholder={item.name} rows="5" ref="coursetitle" />
                        </div>
                    </div>   

                    <div className="form-group common-info common-info-desc">
                        <label className="col-md-1 control-label">集锦描述：</label>
                        <div className="col-md-9">
                            <textarea className="form-control" placeholder={item.description} rows="5" ref="coursedesc"></textarea>
                        </div>
                    </div>                   

                    <div className="form-group common-info">
                        <label className="col-md-1 control-label">集锦地址URL:</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" placeholder="请输入集锦地址" rows="5" ref="courseurl" name="url" />
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
        let videoHighlightListEle = this.renderList(this.state.videoHighlightList);

        return (
            <div id="content" className="l-videocontent content">              
                <div className="panel panel-success" data-sortable-id="ui-widget-12">
                    <div className="panel-heading">
                        <h4 className="panel-title">发布集锦</h4>
                    </div>
                    <div>&nbsp;</div>
                    <div className="panel-body">
                        {videoHighlightListEle}

                        <div className="form-group">
                            <label className="col-md-5 control-label">&nbsp;</label>
                            <div className="col-md-7">
                                <div onClick={this.addNewCourseURL} className="btn btn-sm btn-success p-l-20 p-r-20">
                                    <i className="fa fa-plus"></i>
                                    &nbsp;增加一个集锦
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    componentDidMount () {
        this.getVideoHighlightList();
    }
});

export default LecturerHighlightContent;