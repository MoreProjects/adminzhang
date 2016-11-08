import React from 'react';
import './LecturerCourseContainer.less';

import LecturerCommonHeader from '../LecturerCommonHeader';
import LecturerSidebar from '../LecturerSidebar';
import LecturerCourseContent from '../LecturerCourseContent';

import ajax from '../../api/ApiService';

const LecturerCourseContainer = React.createClass({
    /**
     * 
     * @returns
     */
    render () {
        return (
            <div id="page-container" className="fade page-sidebar-fixed page-header-fixed page-with-wide-sidebar">
                <LecturerCommonHeader />
                <LecturerSidebar />
                <LecturerCourseContent />
            </div>
        );
    }
});

export default LecturerCourseContainer;