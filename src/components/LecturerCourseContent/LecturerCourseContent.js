import React from 'react';
import './LecturerCourseContent.less';

import ajax from '../../api/ApiService';

import moment from 'moment';

const LecturerCourseContent = React.createClass({
     getInitialState() {
        return {
            coursesList: []
        };
     },

     /**
      * 获取获取课程列表
      */
    getCoursesList () {
        const _self = this;

        ajax.targetList({
            params: {
                page: 1,
                page_size: 20
            }
        }, (responseData) => {
            if (responseData) {
                 _self.setState({
                    coursesList: responseData.list
                });
            }
        });
    },

     /**
      * 创建新课程
      */
    sendNewCourse () {
        const _self = this;  
        let file = this.refs.input.files[0];

        if (!file) {
            return;
        }

        ajax.postTarget({name: 'file', value: file, filename: file.name}, {name: 'desc', value: this.refs.desc.value}, {
            params: {
            }
        }, (responseData) => {
            if (responseData) {
                _self.refs.desc.value = '';
                _self.getCoursesList();
            }
        });
    },

    /**
     * 渲染课程列表
     * 
     * @returns
     */
    renderCourseList () {
        let courseListEle = this.state.coursesList && this.state.coursesList.map((item, index) => {
            let ctime = moment(item.create_time).format('HH:mm');
            return (
                <div className="alert alert-success" key={'l-coursecontent-' + index}>
                    <div className="invoice-company text-inverse">
                        <span className="pull-right hidden-print">
                            <a href="javascript:;" onClick={this.deleteTarget} className="btn btn-primary btn-sm btn-primary p-l-20 p-r-20" data-tid={item.id} > 删除 </a>
                        </span>
                        <div>{item.desc} <a href={item.file_url} target="_blank" className="pull-right l-coursecontent-file" >{item.filename}</a></div>
                    </div>
                </div>
            );
        });

        if (!courseListEle || courseListEle.length === 0) {
            courseListEle = [].push(
                <p>暂时没有数据</p>
            );
        }

        if (courseListEle.length > 1) {
            courseListEle = courseListEle.reverse();
        }

        return courseListEle;
    },

    /**
     * 
     * @returns
     */
    render () {
        let courseListEle = this.renderCourseList();

        return (
            <div id="content" className="l-coursecontent content">
                 <div className="panel panel-success" data-sortable-id="ui-widget-12">
                    <div className="panel-heading">
                        <h4 className="panel-title">上传课程视频</h4>
                    </div>
                    <div className="panel-body">
                        <form className="form-horizontal" encType="multipart/form-data">
                            <div className="form-group">
                                <label className="col-md-3 control-label">课程描述：</label>
                                <div className="col-md-9">
                                    <textarea className="form-control" placeholder="请输入指标描述" rows="5" ref="desc"></textarea>
                                </div>
                            </div>
                           

                            <div className="form-group">
                                <label className="col-md-3 control-label">课程视频文件：</label>
                                <div className="col-md-9">
                                    <div className="row fileupload-buttonbar">
                                        <div className="col-md-7">
                                            <span className="btn btn-success fileinput-button">
                                                <i className="fa fa-plus"></i>
                                                <span>&nbsp;上传视频</span>
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
                                    <div onClick={this.sendNewCourse} className="btn btn-sm btn-success p-l-20 p-r-20">提&nbsp;交</div>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                </div>
                <div className="panel panel-success" data-sortable-id="ui-widget-12">
                    <div className="panel-heading">
                        <h4 className="panel-title">课程列表</h4>
                    </div>
                    <div>&nbsp;</div>
                    {courseListEle}
                </div>
            </div>
        );
    },

    componentDidMount () {
        this.getCoursesList();
    }
});

export default LecturerCourseContent;