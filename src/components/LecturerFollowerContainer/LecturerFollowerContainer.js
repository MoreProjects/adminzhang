import React from 'react';
import './LecturerFollowerContainer.less';

import LecturerCommonHeader from '../LecturerCommonHeader';
import LecturerSidebar from '../LecturerSidebar';
import LecturerFollowerContent from '../LecturerFollowerContent';

const LecturerFollowerApp = React.createClass({
    /**
     * 
     * @returns
     */
    render () {
        return (
            <div id="page-container" className="fade page-sidebar-fixed page-header-fixed page-with-wide-sidebar">
                <LecturerCommonHeader />
                <LecturerSidebar />
                <LecturerFollowerContent />
            </div>
        );
    }
});

export default LecturerFollowerApp;