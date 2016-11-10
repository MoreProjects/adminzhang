import React from 'react';
import './LecturerSidebar.less';

import LecturerSideBarItem from '../LecturerSideBarItem';

const LecturerSidebar = React.createClass({
    getInitialState() {
        return {
            userImage: '',
            userName: ''
        };
     },

    SidebarMenu: [
        { text: '房间管理', icon: 'room', hash: '/classroom' },
        { text: '文字直播', icon: 'text_format', hash: '/word' },
        { text: '视频管理', icon: 'settings_input_svideo', hash: '/video' },
        { text: '课程管理', icon: 'assignment', hash: '/course' },
        { text: '指标管理', icon: 'invert_colors', hash: '/target' },
        { text: '消息管理', icon: 'message', hash: '/message' },
        { text: '师徒管理', icon: 'face', hash: '/follower' },
        { text: '文章管理', icon: 'library_books', hash: '/articles' },
    ],   

    renderSidebarMenu () {
        let menu = this.SidebarMenu.map((item, index) => {
            return (
                <LecturerSideBarItem text={item.text} icon={item.icon} hash={item.hash} key={'l-sidebar-' + index} />
            );
        });

        return menu;
    },
    
    /**
     * 
     * @returns
     */
    render () {
        let menu = this.renderSidebarMenu();

        return (
            <div className="l-sidebar">
                {/* begin #sidebar */}
                <div id="sidebar" className="sidebar">
                    {/* begin sidebar scrollbar */}
                    <div data-scrollbar="true" data-height="100%">
                        {/* begin sidebar user */}
                        <ul className="nav">
                            <li className="nav-profile">
                                <a href="#" data-toggle="nav-profile">
                                    <div className="image">
                                        <img src={this.state.userImage} alt="" />
                                    </div>
                                    <div className="info">
                                        <b className="badge pull-right"></b>
                                        {this.state.userName}
                                        <small></small>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        {/* end sidebar user */}
                        {/* begin sidebar nav */}
                        <ul className="nav">
                            <li className="nav-header"></li>
                            {menu}
                            {/* begin sidebar minify button */}
                            <li><a href="javascript:;" className="sidebar-minify-btn" data-click="sidebar-minify"><i className="fa fa-angle-double-left"></i></a></li>
                            {/* end sidebar minify button */}
                        </ul>
                        {/* end sidebar nav */}
                    </div>
                    {/* end sidebar scrollbar */}
                </div>
                <div className="sidebar-bg"></div>
                {/* end #sidebar */}
            </div>
        );
    },

    componentDidMount () {
        const _self = this;

        window.registerToGetUserInfo('l_sidebar', function () {
            _self.setState({
                userImage: window.globalUserInfo.userImage,
                userName: window.globalUserInfo.userName
            });
        });
    }
});

export default LecturerSidebar;