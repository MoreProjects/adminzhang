import React from 'react';
import './LecturerProfile.less';

import ajax from '../../api/ApiService';

const LecturerProfile = React.createClass({
    getInitialState() {
        return {
            // 用户名
            userName: '',

            // 房间ID
            classroomID: '',

            // 关注数
            followerNum: '',

            // 房间名
            classroomName: '',

            // 用户头像
            userImage: ''
        };
    },

    loadUserInfo () {
        const _self = this;

        ajax.liveInfo({
            params: {}
        }, (responseData) => {
            //console.log(responseData);

            if (responseData) {
                 _self.setState({
                    userName: responseData.owner_name,
                    classroomID: responseData.id,
                    classroomName: responseData.room_name,
                    followerNum: responseData.following,
                    userImage: responseData.portrait_url
                });
            }
        });
    },

    /**
     * this.props 解析
     * 
     * 
     * @returns
     */
    render () {
        return (
            
            //{/* begin profile-container */}
            <div className="profile-container">
                {/* begin profile-section */}
                <div className="profile-section">
                    {/* begin profile-left */}
                    <div className="profile-left">
                        {/* begin profile-image */}
                        <div className="profile-image">
                            <img src={this.state.userImage} />
                            <i className="fa fa-user hide"></i>
                        </div>
                        {/* end profile-image */}
                        <div className="m-b-10">
                            <a href="#" className="btn btn-warning btn-block btn-sm">修改头像</a>
                        </div>
                    </div>
                    {/* end profile-left */}
                    {/* begin profile-right */}
                    <div className="profile-right">
                        {/* begin profile-info */}
                        <div className="profile-info">
                            {/* begin table */}
                            <div className="table-responsive">
                                <table className="table table-profile">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>
                                                <h4>{this.state.userName}</h4>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="field">房间号</td>
                                            <td><a href="#">{this.state.classroomID}</a></td>
                                        </tr>
                                        <tr>
                                            <td className="field">关注数</td>
                                            <td><a href="#">{this.state.followerNum}</a></td>
                                        </tr>
                                        <tr>
                                            <td className="field">房间标题</td>
                                            <td>{this.state.classroomName}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* end table */}
                        </div>
                        {/* end profile-info */}
                    </div>
                    {/* end profile-right */}
                </div>
                {/* end profile-section */}
            </div>
			//{/* end profile-container */}
        );
    },

    componentDidMount () {
        this.loadUserInfo();
    }
});

export default LecturerProfile;