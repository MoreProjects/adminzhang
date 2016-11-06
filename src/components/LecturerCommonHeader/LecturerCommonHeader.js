import React from 'react';
import './LecturerCommonHeader.less';

const LecturerCommonHeader = React.createClass({
    /**
     * 
     * 
     * @returns
     */
    render () {
        return (
            //{/* begin #header */}
            <div id="header" className="header navbar navbar-default navbar-fixed-top">
                {/* begin container-fluid */}
                <div className="container-fluid">
                    {/* begin mobile sidebar expand / collapse button */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed navbar-toggle-left" data-click="sidebar-minify">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <button type="button" className="navbar-toggle" data-click="sidebar-toggled">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="https://www.baidu.com" className="navbar-brand">
                            江苏
                        </a>
                    </div>
                    {/* end mobile sidebar expand / collapse button */}
                    
                    {/* begin header navigation right */}
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#" className="icon notification waves-effect waves-light" data-toggle="navbar-search"><i className="material-icons">search</i></a>
                        </li>
                        <li>
                            <a href="#" className="icon notification waves-effect waves-light" data-toggle="navbar-search"><i className="material-icons">file_download</i>下载</a>
                        </li>
                        <li>
                            <a href="#" className="icon notification waves-effect waves-light" data-toggle="navbar-search"><i className="material-icons">history</i>历史</a>
                        </li>
                        <li>
                            <a href="#" className="icon notification waves-effect waves-light" data-toggle="navbar-search"><i className="material-icons">star_border</i>关注</a>
                        </li>
                        <li className="dropdown navbar-user">
                            <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown">
                                <img src="http://e.hiphotos.baidu.com/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=7f8a91998644ebf8797c6c6db890bc4f/32fa828ba61ea8d3e9f5dc9e960a304e241f5850.jpg" alt="" /> 
                                <span className="hidden-xs">Hi, Bill Gates</span>
                            </a>
                            <ul className="dropdown-menu animated fadeInLeft">
                                <li className="arrow"></li>
                                <li><a href="javascript:;">个人中心</a></li>
                                <li><a href="javascript:;">设置</a></li>
                                <li className="divider"></li>
                                <li><a href="javascript:;">退出登录</a></li>
                            </ul>
                        </li>
                    </ul>
                    {/* end header navigation right */}
                    
                    <div className="search-form">
                        <button className="search-btn" type="submit"><i className="material-icons">search</i></button>
                        <input type="text" className="form-control" placeholder="Search Something..." />
                        <a href="#" className="close" data-dismiss="navbar-search"><i className="material-icons">close</i></a>
                    </div>
                </div>
                {/* end container-fluid */}
            </div>
            //{/* end #header */}
        );
    }
});

export default LecturerCommonHeader;