import React from 'react';
import './LecturerArticlesContainer.less';

import LecturerCommonHeader from '../LecturerCommonHeader';
import LecturerSidebar from '../LecturerSidebar';
import LecturerArticlesContent from '../LecturerArticlesContent';

const LecturerArticlesContainer = React.createClass({
    /**
     * 
     * @returns
     */
    render () {
        return (
            <div id="page-container" className="fade page-sidebar-fixed page-header-fixed page-with-wide-sidebar">
                <LecturerCommonHeader />
                <LecturerSidebar />
                <LecturerArticlesContent />
            </div>
        );
    }
});

export default LecturerArticlesContainer;