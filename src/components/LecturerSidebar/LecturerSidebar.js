import React from 'react';
import './LecturerSidebar.less';

import LecturerSideBarItem from '../LecturerSideBarItem';

const LecturerSidebar = React.createClass({
    SidebarMenu: [
        { text: '房间管理', icon: 'room' },
        { text: '文字直播', icon: 'text_format' },
        { text: '视频管理', icon: 'settings_input_svideo' },
        { text: '课程管理', icon: 'assignment' },
        { text: '指标管理', icon: 'invert_colors' },
        { text: '消息管理', icon: 'message' },
        { text: '师徒管理', icon: 'face' },
        { text: '文章管理', icon: 'library_books' },
    ],

    renderSidebarMenu () {
        let menu = this.SidebarMenu.map((item, index) => {
            return (
                <LecturerSideBarItem text={item.text} icon={item.icon} key={'l-sidebar-' + index} />
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
                                        <img src="../assets/img/user.jpg" alt="" />
                                    </div>
                                    <div className="info">
                                        <b className="badge pull-right"></b>
                                        Bill Gates
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
    }
});

export default LecturerSidebar;