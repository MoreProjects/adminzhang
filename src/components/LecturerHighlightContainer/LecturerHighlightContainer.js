import React from 'react';
import './LecturerHighlightContainer.less';

import LecturerCommonHeader from '../LecturerCommonHeader';
import LecturerSidebar from '../LecturerSidebar';
import LecturerHighlightContent from '../LecturerHighlightContent';

const LecturerHighlightContainer = React.createClass({
    /**
     * 
     * @returns
     */
    render () {
        return (
            <div id="page-container" className="fade page-sidebar-fixed page-header-fixed page-with-wide-sidebar">
                <LecturerCommonHeader />
                <LecturerSidebar />
                <LecturerHighlightContent />
            </div>
        );
    }
});

export default LecturerHighlightContainer;