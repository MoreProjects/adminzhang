import React from 'react';
import './LecturerClassroomContainer.less';

import LecturerCommonHeader from '../LecturerCommonHeader';
import LecturerSidebar from '../LecturerSidebar';
import LecturerClassroomContent from '../LecturerClassroomContent';

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
    }
});

export default LecturerClassroomContainer;