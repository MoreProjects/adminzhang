import React from 'react';
import './LecturerTargetContent.less';

import ajax from '../../api/ApiService';

const LecturerTargetContent = React.createClass({
     getInitialState() {
        return {
            targetList: []
        };
     },

     /**
      * 获取指标列表
      */
    getTargetList () {
        const _self = this;

        ajax.targetList({
            params: {
                page: 1,
                page_size: 20
            }
        }, (responseData) => {
            _self.setState({
                targetList: responseData.list
            });
        });
    },

    /**
     * 上传指标
     * 
     * @returns
     */
    postTarget () {
        const _self = this;
console.log(this.refs.fileinfo.file.value);
console.log({key: 'file', value: this.refs.input.value});


        ajax.postTarget({key: 'file', value: this.refs.input.value}, {
            params: {
                page: 1,
                page_size: 20
            }
        }, (responseData) => {
            _self.setState({
                targetList: responseData.list
            });
        });
    },

    renderTextLiveList () {
        let targetListEle = this.state.targetList && this.state.targetList.map((item, index) => {
            return (
                <div className="alert alert-success">
                    <div className="invoice-company text-inverse">
                        <span className="pull-right hidden-print">
                            <a href="javascript:;" className="btn btn-grey btn-sm m-r-10 p-l-20 p-r-20"> 停止 </a>
                            <a href="javascript:;" onclick="window.print()" className="btn btn-primary btn-sm btn-primary p-l-20 p-r-20"> 开始 </a>
                        </span>
                        URL：        www.youku.com/huy8hf73hhf98
                    </div>
                </div>
            );
        });

        return targetListEle.reverse();
    },

    /**

     * 
     * @returns
     */
    render () {
        let targetListEle = this.renderTextLiveList();

        return (
            <div id="content" className="l-targetcontent content">
                <div className="panel panel-success" data-sortable-id="ui-widget-12">
                    <div className="panel-heading">
                        <h4 className="panel-title">上传直播</h4>
                    </div>
                    <div className="panel-body">
                        <form className="form-horizontal" enctype="multipart/form-data"  ref="fileinfo">
                            <div className="form-group">
                                <label className="col-md-3 control-label">Textarea</label>
                                <div className="col-md-9">
                                    <textarea className="form-control" placeholder="Textarea" rows="5"></textarea>
                                </div>
                            </div>
                           

                            <div className="form-group">
                                <label className="col-md-3 control-label">Inline Radio Button</label>
                                <div className="col-md-9">
                                    <div className="row fileupload-buttonbar">
                                        <div className="col-md-7">
                                            <span className="btn btn-success fileinput-button">
                                                <i className="fa fa-plus"></i>
                                                <span>上传指标文件</span>
                                                <input type="file" name="file" multiple ref="input" />
                                            </span>

                                            <span className="fileupload-process"></span>
                                        </div>
                        
                                        <div className="col-md-5 fileupload-progress fade">
                                        
                                            <div className="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                                                <div className="progress-bar progress-bar-success"></div>
                                            </div>
                                    
                                            <div className="progress-extended">&nbsp;</div>
                                        </div>
                                    </div>
                                    <table role="presentation" className="table table-striped"><tbody className="files"></tbody></table>
                                </div>
                            </div>
                        </form>
                        <div className="form-group">
                            <label className="col-md-3 control-label">Submit</label>
                            <div className="col-md-9">
                                <button onClick={this.postTarget} >Submit Button</button>
                            </div>
                        </div>
                    </div>

                    <div className="panel panel-success" data-sortable-id="ui-widget-12">
                        <div className="panel-heading">
                            <h4 className="panel-title">播放文件</h4>
                        </div>
                        <div>&nbsp;</div>
                    </div>
                </div>
            </div>
        );
    },

    componentDidMount () {
        this.getTargetList();
    }
});

export default LecturerTargetContent;