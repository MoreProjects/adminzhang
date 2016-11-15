import React from 'react';
import './LecturerHighlightContent.less';

import ajax from '../../api/ApiService';

const LecturerHighlightContent = React.createClass({
    getInitialState() {
        return {
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
            if (responseData && responseData.list) {
                _self.setState({
                    videoHighlightList: responseData.list
                });
            }
        });
    },

    /**
     * 渲染列表 集锦
     * 
     * @param {any} list
     * @returns
     */
    renderList (list) {
        let listEle = list && list.map((item, index) => {
            return (
                <form className="form-horizontal" encType="multipart/form-data" ref="courseform" key={'l-highlightcontent-' + index}>
                    <div className="form-group upload-image profile-left">
                        <img className="profile-image" src={item.cover_img} />
                    </div>

                    <div className="form-group common-info common-info-title">
                        <label className="col-md-1 control-label">集锦标题：</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" placeholder={item.name} />
                        </div>
                    </div>   

                    <div className="form-group common-info common-info-desc">
                        <label className="col-md-1 control-label">集锦描述：</label>
                        <div className="col-md-9">
                            <textarea className="form-control" placeholder={item.description} rows="5" ></textarea>
                        </div>
                    </div>                   

                    <div className="form-group common-info">
                        <label className="col-md-1 control-label">集锦地址URL:</label>
                        <div className="col-md-9">
                            <input type="text" className="form-control" placeholder="请输入集锦地址" ref="courseurl" name="url" />
                        </div>
                    </div>

                    <div className="form-group dispath-course common-info">
                        <label className="col-md-1 control-label">&nbsp;</label>
                        <div className="col-md-9 text-right">
                            <div data-tid={item.id} className="btn btn-sm btn-success p-l-20 p-r-20">修改</div>
                        </div>
                    </div>
                </form>
            );
        });

        if (!listEle || listEle.length === 0) {
            listEle = [];
            listEle.push(
                <p>暂时没有集锦</p>
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
            <div id="content" className="l-highlightcontent content">              
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