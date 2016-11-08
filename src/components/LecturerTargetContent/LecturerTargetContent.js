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
        let file = this.refs.input.files[0];

        if (!file) {
            return;
        }

        ajax.postTarget({name: 'file', value: file, filename: file.name}, {name: 'desc', value: this.refs.desc.value}, {
            params: {
            }
        }, (responseData) => {
            _self.getTargetList();
        });
    },

    renderTargetList () {
        let targetListEle = this.state.targetList && this.state.targetList.map((item, index) => {
            return (
                <div className="alert alert-success" key={'l-targetcontent-' + index}>
                    <div className="invoice-company text-inverse">
                        <span className="pull-right hidden-print">
                            <a href="javascript:;" onClick={this.deleteTarget} className="btn btn-primary btn-sm btn-primary p-l-20 p-r-20" data-tid={item.id} > 删除 </a>
                        </span>
                        <div>{item.desc} <a href={item.file_url} target="_blank" className="pull-right l-targetcontent-file" >{item.filename}</a></div>
                    </div>
                </div>
            );
        });

        return targetListEle && targetListEle.reverse();
    },


    /**
     * 删除 指标文件
     * 
     * @returns
     */
    deleteTarget (event) {
        const _self = this;
        let targetId = event.target.getAttribute('data-tid');

        if (!targetId) {
            return false;
        }

        ajax.deleteTarget(targetId, {
            params: {

            }
        }, (responseData) => {
            _self.getTargetList();
        });
    },

    /**

     * 
     * @returns
     */
    render () {
        let targetListEle = this.renderTargetList();

        return (
            <div id="content" className="l-targetcontent content">
                <div className="panel panel-success" data-sortable-id="ui-widget-12">
                    <div className="panel-heading">
                        <h4 className="panel-title">上传指标</h4>
                    </div>
                    <div className="panel-body">
                        <form className="form-horizontal" encType="multipart/form-data">
                            <div className="form-group">
                                <label className="col-md-3 control-label">指标描述：</label>
                                <div className="col-md-9">
                                    <textarea className="form-control" placeholder="请输入指标描述" rows="5" ref="desc"></textarea>
                                </div>
                            </div>
                           

                            <div className="form-group">
                                <label className="col-md-3 control-label">指标文件：</label>
                                <div className="col-md-9">
                                    <div className="row fileupload-buttonbar">
                                        <div className="col-md-7">
                                            <span className="btn btn-success fileinput-button">
                                                <i className="fa fa-plus"></i>
                                                <span>&nbsp;上传</span>
                                                <input type="file" name="file" ref="input" />
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
                            <div className="form-group">
                            <label className="col-md-3 control-label">&nbsp;</label>
                                <div className="col-md-9">
                                    <div onClick={this.postTarget} className="btn btn-sm btn-success p-l-20 p-r-20">提&nbsp;交</div>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                </div>
                <div className="panel panel-success" data-sortable-id="ui-widget-12">
                    <div className="panel-heading">
                        <h4 className="panel-title">指标文件</h4>
                    </div>
                    <div>&nbsp;</div>
                    {targetListEle}
                </div>
            </div>
        );
    },

    componentDidMount () {
        this.getTargetList();
    }
});

export default LecturerTargetContent;