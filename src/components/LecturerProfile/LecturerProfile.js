import React from 'react';
import './LecturerProfile.less';

const LecturerProfile = React.createClass({
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
                            <img src="assets/img/profile-cover.jpg" />
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
                                                <h4>Bill Gates <small>钻石会员</small></h4>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="field">用户昵称</td>
                                            <td><a href="#">轻舞飞扬</a></td>
                                        </tr>
                                        <tr>
                                            <td className="field">用户等级</td>
                                            <td>
                                                <div className="progress">
                                                    <div className="progress-bar">80%</div>
                                                </div>
                                                <span className="label label-success">LV1</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="field">我的财豆</td>
                                            <td>988 财豆<a href="javascript:;" className="btn btn-danger btn-block gocharge">去充值</a></td>
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
                {/* begin profile-section */}
                <div className="profile-section">
                </div>
                {/* end profile-section */}
            </div>
			//{/* end profile-container */}
        );
    }
});

export default LecturerProfile;