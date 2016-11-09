import React from 'react';
import './LecturerFollowerContent.less';

import ajax from '../../api/ApiService';

const LecturerFollowerContent = React.createClass({
    getInitialState() {
        return {
            allFollowerList: [],
            allReqFollowerList: []
        };
     },

     /**
      * 获取 已通过/申请中 的followe列表
      */
    getFollowerList (status) {
        const _self = this;

        ajax.followerList({
            params: {
                page: 1,
                page_size: 10,
                status: status
            }
        }, (responseData) => {
            if (responseData) {
                if (status === 1) {
                    _self.setState({
                        allReqFollowerList: responseData.list
                    });
                } else if (status === 2) {
                    _self.setState({
                        allFollowerList: responseData.list
                    });
                }
            }
        });
    },

    /**
     * 拒绝 拜徒 请求
     * 
     * @returns
     */
    refuseReqFollower (event) {
        const _self = this;
        let uid = event.target.getAttribute('data-fid') || '';
        
        if (!uid) {
            return false;
        }

        this.ajaxReqFollower(uid, 3, function () {
            // 1 === 申请中 的follower列表
            _self.getFollowerList(1);
        });
    },

    /**
     * 接受 拜徒 请求
     * 
     * @returns
     */
    acceptReqFollower (event) {
        const _self = this;
        let uid = event.target.getAttribute('data-fid') || '';
        
        if (!uid) {
            return false;
        }

        this.ajaxReqFollower(uid, 2, function () {
            // 1 === 申请中 的follower列表
            _self.getFollowerList(1);

            // 2 === 已通过 的follower列表
            _self.getFollowerList(2);
        });
    },

    /**
     * @param {any} uid
     * @param {any} status  1 等待确认  2 接受请求  3 拒绝
     * @param {any} callback
     * @returns
     */
    ajaxReqFollower (uid, status, callback) {        
        if (!uid) {
            return false;
        }

        ajax.followerState(uid, {
            params: {
                relation_status: status
            }
        }, (responseData) => {
            if (responseData) {
                callback && callback();
            }
        });
    },

    /**
     * 渲染 申请中 的follower列表
     * 
     * @returns
     */
    renderReqFollowerList () {

        let reqFollowerListEle = this.state.allReqFollowerList && this.state.allReqFollowerList.map((item, index) => {
            return (
                <div className="alert alert-success invoice" key={'l-followercontent-' + index} >
                    <div className="invoice-company text-inverse">
                        <span className="pull-right hidden-print">
                            <a href="javascript:;" onClick={this.refuseReqFollower} data-fid={item.id} className="btn btn-white btn-sm m-r-10 p-l-20 p-r-20"> 拒绝 </a>
                            <a href="javascript:;" onClick={this.acceptReqFollower} data-fid={item.id} className="btn btn-primary btn-sm btn-primary p-l-20 p-r-20"> 同意 </a>
                        </span>
                        我是{item.name}，请求拜你为师
                    </div>
                </div>
            );
        });

        reqFollowerListEle = reqFollowerListEle || (
            <div className="alert alert-success invoice">
                <div className="invoice-company text-inverse">
                    暂时没有拜师请求
                </div>
            </div>
        );

        return reqFollowerListEle;
    },

    /**
     * 渲染 已通过 的follower列表
     * 
     * @returns
     */
    renderFollowerList () {

        let followerListEle = this.state.allFollowerList && this.state.allFollowerList.map((item, index) => {
            return (
                <div className="media media-sm note note-success" key={'l-followercontentreq-' + index} >
                    <a className="media-left" href="javascript:;">
                        <img src={item.photo} alt="" className="media-object rounded-corner" />
                    </a>
                    <div className="media-body">
                        <h4 className="media-heading">&nbsp;</h4>
                        <p>{item.name}</p>
                    </div>
                </div>
            );
        });

        followerListEle = followerListEle || (
            <div className="alert alert-success invoice">
                <div className="invoice-company text-inverse">
                    暂时没有徒弟，现在就去收徒弟
                </div>
            </div>
        );

        return followerListEle;
    },

    /**
     * 
     * @returns
     */
    render () {
        let followerListEle = this.renderFollowerList();
        let reqFollowerListEle = this.renderReqFollowerList();

        return (
            <div id="content" className="content l-followercontent">
                
                {/* begin panel */}
                <div className="panel panel-success" data-sortable-id="ui-widget-12">
                    <div className="panel-heading">
                        <h4 className="panel-title">拜师请求</h4>
                    </div>
                    <div className="panel-body">
                        {reqFollowerListEle}
                    </div>
                </div>
                {/* end panel */}

                {/* begin panel */}
                <div className="panel panel-success" data-sortable-id="ui-widget-12">
                    <div className="panel-heading">
                        <h4 className="panel-title">我的徒弟</h4>
                    </div>
                    <div className="panel-body">
                        {followerListEle}
                    </div>
                </div>
            </div>
        );
    },

    componentDidMount () {
        // 1 === 申请中 的follower列表
        this.getFollowerList(1);

        // 2 === 已通过 的follower列表
        this.getFollowerList(2);
    }
});

export default LecturerFollowerContent;