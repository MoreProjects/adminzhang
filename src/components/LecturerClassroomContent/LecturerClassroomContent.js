import React from 'react';
import './LecturerClassroomContent.less';

import LecturerProfile from '../LecturerProfile';

const LecturerClassroomContent = React.createClass({
    /**

     * 
     * @returns
     */
    render () {
        return (
            //<!-- begin #content -->
            <div id="content" className="content">
                <LecturerProfile />
            </div>
		    //<!-- end #content -->
        );
    }
});

export default LecturerClassroomContent;