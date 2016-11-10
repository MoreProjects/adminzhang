import React from 'react';
import './LecturerTargetContent.less';

import ajax from '../../api/ApiService';

const LecturerTargetContent = React.createClass({
     getInitialState() {
        return {
            targetList: [],
            filename: ''
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
     * 上传文件事件
     * 
     * @returns
     */
    changeUploadFile (event) {
         // 支持 FileReader 的浏览器版本
         let file = this.refs.input.files[0];
         console.log(file);
         this.setState({
             filename: (file && file.name) || ''
         });
         /*
                if (window.FileReader) {
                    var f = this.files[0];
                    // size 单位是 字节（b）
                    if (!f ||
                        f.size > 5 * 1024 * 1024 ||
                        !(f.type == 'image/jpeg' || f.type == 'image/png')
                        )
                    {
                        $('.logo-t', _t.$el).addClass('error-tips');
                        //$('.logo-i', _t.$el).css('backgroundImage', 'url(' + defaultImgSrc + ')');
                        //_t.hasFile = false;
                        // 发现文件错误后，停止回显
                        return;
                    } else {
                        $('.logo-t', _t.$el).removeClass('error-tips');
                    }

                    var reader = new FileReader();
                    reader.onload = function() {
                        $('.logo-i', _t.$el).css('backgroundImage', 'url(' + this.result + ')');
                    };
                    reader.readAsDataURL(f);
                }
            */
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
                                <div className="col-md-1">
                                    <div className="row fileupload-buttonbar">
                                        <div className="col-md-7">
                                            <span className="btn btn-success fileinput-button">
                                                <i className="fa fa-plus"></i>
                                                <span>&nbsp;上传</span>
                                                <input type="file" name="file" ref="input" onChange={this.changeUploadFile} />
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
                                <label className="col-md-8 control-label text-left" ref="showfilename" >{this.state.filename}</label>
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