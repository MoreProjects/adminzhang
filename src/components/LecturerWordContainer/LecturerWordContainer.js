import React from 'react';
import './LecturerWordContainer.less';

import LecturerCommonHeader from '../LecturerCommonHeader';
import LecturerSidebar from '../LecturerSidebar';
import LecturerWordContent from '../LecturerWordContent';

import ajax from '../../api/ApiService';

const LecturerWordContainer = React.createClass({
    /**
     * 
     * @returns
     */
    render () {
        return (
            <div id="page-container" className="fade page-sidebar-fixed page-header-fixed page-with-wide-sidebar">
                <LecturerCommonHeader />
                <LecturerSidebar />
                <LecturerWordContent />
            </div>
        );
    }
});

export default LecturerWordContainer;