import React from 'react';
import './LecturerMessageContainer.less';

import LecturerCommonHeader from '../LecturerCommonHeader';
import LecturerSidebar from '../LecturerSidebar';
import LecturerMessageContent from '../LecturerMessageContent';

import ajax from '../../api/ApiService';

const LecturerMessageContainer = React.createClass({
    /**
     * 
     * @returns
     */
    render () {
        return (
            <div id="page-container" className="fade page-sidebar-fixed page-header-fixed page-with-wide-sidebar">
                <LecturerCommonHeader />
                <LecturerSidebar />
                <LecturerMessageContent />
            </div>
        );
    }
});

export default LecturerMessageContainer;