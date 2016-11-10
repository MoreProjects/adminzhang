import React from 'react';
import './LecturerVideoContainer.less';

import LecturerCommonHeader from '../LecturerCommonHeader';
import LecturerSidebar from '../LecturerSidebar';
import LecturerVideoContent from '../LecturerVideoContent';

const LecturerVideoContainer = React.createClass({
    /**
     * 
     * @returns
     */
    render () {
        return (
            <div id="page-container" className="fade page-sidebar-fixed page-header-fixed page-with-wide-sidebar">
                <LecturerCommonHeader />
                <LecturerSidebar />
                <LecturerVideoContent />
            </div>
        );
    }
});

export default LecturerVideoContainer;