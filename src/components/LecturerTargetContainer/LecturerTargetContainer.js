import React from 'react';
import './LecturerTargetContainer.less';

import LecturerCommonHeader from '../LecturerCommonHeader';
import LecturerSidebar from '../LecturerSidebar';
import LecturerTargetContent from '../LecturerTargetContent';

const LecturerTargetContainer = React.createClass({
    /**
     * 
     * @returns
     */
    render () {
        return (
            <div id="page-container" className="fade page-sidebar-fixed page-header-fixed page-with-wide-sidebar">
                <LecturerCommonHeader />
                <LecturerSidebar />
                <LecturerTargetContent />
            </div>
        );
    }
});

export default LecturerTargetContainer;