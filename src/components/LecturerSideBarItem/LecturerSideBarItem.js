import React from 'react';
import './LecturerSideBarItem.less';

import ClassNames from 'classnames';

const LecturerSideBarItem = React.createClass({
    /**
     * 为了使用context内的router，必须声明下contextTypes
     */
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    /**
     * 左侧菜单点击事件处理
     */
    clickSideBarMenu (event) {
        this.context.router.push({
            pathname: this.props.hash,
            query:{

            }
        });
    },

    /**
     * this.props 解析
     * 
     * icon - Material Icon对应的名称
     * text - 菜单项对应的文案
     * hash - 菜单链接
     * defaultClassName - 默认样式
     * 
     * @returns
     */
    render () {
        let index = window.location.hash.indexOf('?');
        let currHash = window.location.hash.substring(1, index);

        return (
            <li className={ClassNames({'active': this.props.hash === currHash })} onClick={this.clickSideBarMenu}>
                <a href="javascript:void(0);">
                    <b className="badge pull-right"></b>
                    <i className="material-icons">{this.props.icon}</i>
                    <span>{this.props.text}</span>
                </a>
            </li>
        );
    }
});

export default LecturerSideBarItem;