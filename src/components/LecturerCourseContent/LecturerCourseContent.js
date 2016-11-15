import React from 'react';
import './LecturerCourseContent.less';

import ajax from '../../api/ApiService';

import moment from 'moment';

const LecturerCourseContent = React.createClass({
     getInitialState() {
        return {
            coursesList: [],
            background: '',
            coursesURLCount: [1]
        };
     },

     /**
      * 获取课程列表
      */
    getCoursesList () {
        const _self = this;

        ajax.coursesList({
            params: {
                page: 1,
                page_size: 5
            }
        }, (responseData) => {
            if (responseData && responseData.list) {
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

        let file = this.refs.uploadimage.files[0];
        let title = this.refs.coursetitle.value;
        let desc = this.refs.coursedesc.value;

        let firstUrlInput;

        let form = this.refs.courseform;
        let urls = [];

        for (let key in form) {
            if (form.hasOwnProperty(key) && form[key].name === 'url') {
                urls.push({
                    'video_url': form[key].value
                });

                if (!firstUrlInput) {
                    firstUrlInput = form[key];
                }
            }
        }

        let fields = [];       

        fields.push({name: 'title', value: title});
        fields.push({name: 'desc', value: desc});
        fields.push({name: 'videos', value: JSON.stringify(urls)});

        if (!file) {
            return;
        }

        ajax.postCourse({name: 'cover_img', value: file, filename: file.name}, fields, {
            params: {
            }
        }, (responseData) => {
            if (responseData) {
                this.refs.coursetitle.value = '';
                this.refs.coursedesc.value = '';
                this.refs.uploadimage.value = null;

                /**
                 * 重置 URL地址个数， 重置封面图片背景
                 */
                _self.setState({
                    coursesURLCount: [1],
                    background: ''
                });

                if (firstUrlInput) {
                    firstUrlInput.value = '';
                }

                window.alert('发布成功');
            }
        });
    },

    /**
     * 上传 视频封面
     */
    changeUploadImage () {
        const _self = this;
        let f = this.refs.uploadimage.files[0];

         if (f) {
            // 支持 FileReader 的浏览器版本
            if (window.FileReader) {
                // size 单位是 字节（b）
                if (f.size > 5 * 1024 * 1024) {
                    return;
                } else {
                    
                }

                var reader = new FileReader();
                reader.onload = function() {
                    _self.setState({
                        background: this.result
                    });
                };
                reader.readAsDataURL(f);
            } else {
                console.log('Not support browser!');
            }
         }
    },

    /**
     * 增加新的课程URL
     */
    addNewCourseURL () {
        let result = this.state.coursesURLCount;

        result.push(1);

        this.setState({
            coursesURLCount: result
        });
    },

    /**
     * 删除课程
     * 
     * @returns
     */
    deleteCourse (event) {
        const _self = this;
        let courseId = event.target.getAttribute('data-cid') || '';

        if (!courseId) {
            return false;
        }

        ajax.deleteCourse(courseId, {
            params: {
            }
        }, (responseData) => {
            if (responseData) {
                _self.getCoursesList();
            }
        });
    },

    /**
     * 渲染课程url部分
     * 
     * @returns
     */
    renderCourseURL () {
        var ele = this.state.coursesURLCount && this.state.coursesURLCount.map((item, index) => {
            return (
                <div className="form-group" key={'l-courseurl-' + index}>
                    <label className="col-md-2 control-label">{('0' + index).substr(0, 2)} 课程地址URL:</label>
                    <div className="col-md-8">
                        <input type="text" className="form-control" placeholder="请输入课程地址" name="url" />
                    </div>
                </div>
            );
        });

        if (ele.length > 1) {
            ele = ele.reverse();
        }

        return ele;        
    },

    /**
     * 渲染课程列表
     * 
     * @returns
     */
    renderCourseList () {
        let courseListEle = this.state.coursesList && this.state.coursesList.map((item, index) => {
            return (
                <div className="media media-sm note note-success" key={'l-coursecontent-' + index} >
                    <a className="media-left" href="javascript:;">
                        <img src={item.cover_img} alt="" className="media-object" />
                    </a>
                    <div className="media-body">
                        <h4 className="media-heading">{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                    <div className="media-right">
                        <a href="javascript:;" onClick={this.deleteCourse} data-cid={item.id} className="btn btn-primary btn-sm m-r-10 m-t-20 p-l-20 p-r-20"> 删除 </a>
                    </div>
                </div>
            );
        });

        if (!courseListEle || courseListEle.length === 0) {
            courseListEle = [];
            courseListEle.push(
                <p>暂时没有课程</p>
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
        let courseURLEle = this.renderCourseURL();

        return (
            <div id="content" className="l-coursecontent content">
                 <div className="panel panel-success" data-sortable-id="ui-widget-12">
                    <div className="panel-heading">
                        <h4 className="panel-title">发布课程</h4>
                    </div>
                    <div className="panel-body">
                        <form className="form-horizontal" encType="multipart/form-data" ref="courseform">
                            <div className="form-group upload-image profile-left">
                                <div className="profile-image" ref="showuploadimage" style={{background: 'url(' + this.state.background + ') no-repeat center center / cover'}} ></div>
                                <div className="m-b-10">
                                    <span className="btn btn-success fileinput-button">
                                        <span>&nbsp;上传课程封面</span>
                                        <input type="file" name="file" ref="uploadimage" accept="image/*" onChange={this.changeUploadImage} />
                                    </span>
                                </div>
                            </div>

                            <div className="form-group common-info common-info-title">
                                <label className="col-md-1 control-label">课程标题：</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" placeholder="请输入课程标题" ref="coursetitle" />
                                </div>
                            </div>   

                            <div className="form-group common-info common-info-desc">
                                <label className="col-md-1 control-label">课程描述：</label>
                                <div className="col-md-9">
                                    <textarea className="form-control" placeholder="请输入课程描述" rows="5" ref="coursedesc"></textarea>
                                </div>
                            </div>                   

                            {courseURLEle}

                            <div className="form-group">
                                <label className="col-md-2 control-label">&nbsp;</label>
                                <div className="col-md-8">
                                    <div onClick={this.addNewCourseURL} className="btn btn-sm btn-success p-l-20 p-r-20">
                                        <i className="fa fa-plus"></i>
                                        &nbsp;为该课程增加一个视频
                                    </div>
                                </div>
                            </div>

                            <div className="form-group dispath-course">
                                <label className="col-md-2 control-label">&nbsp;</label>
                                <div className="col-md-5">
                                    <div onClick={this.sendNewCourse} className="btn btn-sm btn-success p-l-20 p-r-20">发布课程</div>
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