import React from 'react';
import './LecturerClassroomContainer.less';

import LecturerCommonHeader from '../LecturerCommonHeader';
import LecturerSidebar from '../LecturerSidebar';
import LecturerClassroomContent from '../LecturerClassroomContent';

import ajax from '../../api/ApiService';

const LecturerClassroomContainer = React.createClass({
    /**

     * 
     * @returns
     */
    render () {
        return (
            <div id="page-container" className="fade page-sidebar-fixed page-header-fixed page-with-wide-sidebar">
                <LecturerCommonHeader />
                <LecturerSidebar />
                <LecturerClassroomContent />
            </div>
        );
    },

    componentDidMount () {
        ajax.liveInfo({
            params: {}
        }, (responseData) => {
            console.log(responseData);
        });

    }
});

export default LecturerClassroomContainer;