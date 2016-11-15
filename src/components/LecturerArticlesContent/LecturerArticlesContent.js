import React from 'react';
import './LecturerArticlesContent.less';

import ajax from '../../api/ApiService';
import moment from 'moment';
//import {Editor, EditorState} from 'draft-js';
//import 'draft-js/dist/Draft.less';

const LecturerArticlesContent = React.createClass({
    getInitialState() {
        return {
            articleList: []
        };
     },

    /**
     * 获取文章列表
     */
    getArticleList () {
        const _self = this;

        ajax.articleList({
            params: {
                page: 1,
                page_size: 10
            }
        }, (responseData) => {
            if (responseData && responseData.list) {
                _self.setState({
                    articleList: responseData.list
                });
            }
        });
    },

     /**
      * 发布新文章
      */
    postArticle () {
        const _self = this;
        let title = this.refs.articletitle.value || '';
        let content = this.refs.articlecontent.value || '';
        let hasError = false;

        if (!title) {
            this.refs.l_articlecontent_title.classList.add('has-error');
            this.refs.l_articlecontent_error.classList.remove('hide');
            hasError = true;
        }

        if (!content) {
            this.refs.l_articlecontent_content.classList.add('has-error');
            this.refs.l_articlecontent_error.classList.remove('hide');
            hasError = true;
        }

        if (hasError) {
            return;
        }

        ajax.postArticle({
            params: {
                content: content,
                title: title
            }
        }, (responseData) => {
            _self.refs.articletitle.value = '';
            _self.refs.articlecontent.value = '';
            _self.refs.l_articlecontent_error.classList.add('hide');
            _self.getArticleList();
        });
    },

    /**
     * 删除文章
     * 
     * @returns
     */
    deleteArticle (event) {
        const _self = this;          
        let articleId = event.target.getAttribute('data-aid') || '';

        if (!articleId) {
            return;
        }

        ajax.deleteArticle(articleId, {
            params: {
            }
        }, (responseData) => {
            if (responseData) {
                _self.getArticleList();
            }
        });
    },

    changeTitle (event) {
        let value = event.target.value;

        if (value) {
            this.refs.l_articlecontent_title.classList.remove('has-error');
        }
    },

    changeContent (event) {
        let value = event.target.value;

        if (value) {
            this.refs.l_articlecontent_content.classList.remove('has-error');
        }
    },

    /**
     * 渲染文章列表
     * 
     * @returns
     */
    renderArticleList () {
        let articleListEle = this.state.articleList && this.state.articleList.map((item, index) => {
            let ctime = moment(item.create_date).format('YYYY-MM-DD HH:mm');
            return (
                <div className="alert alert-success" key={'l-articlescontent-' + index}>
                    <div className="invoice-company text-inverse">
                        <span className="pull-right hidden-print">
                            <a href="javascript:;" onClick={this.deleteArticle} className="btn btn-primary btn-sm p-l-20 p-r-20" data-aid={item.id} > 删除 </a>
                        </span>
                        <div>{item.title} <a href="javascript:;" target="_blank" className="pull-right l-articlescontent-file" >{ctime}</a></div>
                    </div>
                </div>
            );
        });

        if (!articleListEle || articleListEle.length === 0) {
            articleListEle = [];
            articleListEle.push(
                <p key={'l-articlescontent-0'}>暂时没有文章</p>
            );
        }

        if (articleListEle.length > 1) {
            //articleListEle = articleListEle.reverse();
        }

        return articleListEle;
    },

    /**
     * 
     * @returns
     */
    render () {
        let articleListEle = this.renderArticleList();

        return (
            <div id="content" className="l-articlescontent content">
                <div className="panel panel-success" data-sortable-id="form-wysiwyg-2">
                    <div className="panel-heading">
                        <h4 className="panel-title">写文章</h4>
                    </div>
                    <div className="panel-body">
                        <div className="alert alert-danger fade in m-b-15 hide" ref="l_articlecontent_error">
                            <strong>Error!&nbsp;&nbsp;</strong>
                            请输入文章标题和内容
                            <span className="close" data-dismiss="alert">×</span>
                        </div>

                        <form className="form-horizontal" encType="multipart/form-data">
                            <div className="form-group" ref="l_articlecontent_title">
                                <label className="col-md-1 control-label">标题</label>
                                <div className="col-md-11">
                                    <input onChange={this.changeTitle} className="form-control" type="text" ref="articletitle" name="fullname" placeholder="文章标题" />
                                </div>
                            </div>
                            <div className="form-group" ref="l_articlecontent_content">
                                <div className="col-md-12">
                                    <textarea onChange={this.changeContent} className="form-control" placeholder="请输入文章正文内容" rows="5" ref="articlecontent"></textarea>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">&nbsp;</label>
                                <div className="col-md-9 text-right">
                                    <div onClick={this.postArticle} className="btn btn-sm btn-success p-l-20 p-r-20">发&nbsp;布</div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="panel panel-success" data-sortable-id="ui-widget-12">
                    <div className="panel-heading">
                        <h4 className="panel-title">已发布文章</h4>
                    </div>
                    <div>&nbsp;</div>
                    {articleListEle}
                </div>
            </div>
        );
    },

    componentDidMount () {
        this.getArticleList();
    }
});

export default LecturerArticlesContent;