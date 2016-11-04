import React from 'react';
import './LecturerSideBarItem.less';

const LecturerSideBarItem = React.createClass({
    /**
     * this.props 解析
     * 
     * icon - Material Icon对应的名称
     * text - 菜单项对应的文案
     * 
     * @returns
     */
    render () {
        return (
            <li className="">
                <a href="javascript:;">
                    <b className="badge pull-right"></b>
                    <i className="material-icons">{this.props.icon}</i>
                    <span>{this.props.text}</span>
                </a>
            </li>
        );
    }
});

export default LecturerSideBarItem;