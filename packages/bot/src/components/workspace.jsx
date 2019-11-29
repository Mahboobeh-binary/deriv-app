import React                from 'react';
import Flyout               from 'components/flyout.jsx';
import NotificationMessages from 'components/notification-messages.jsx';
import                           'assets/sass/scratch/workspace.scss';
import                           'assets/sass/scratch/toolbox.scss';

const Workspace = () => (
    <React.Fragment>
        {/* <div id='scratch_area' /> */}
        <div id='scratch_div'>
            <NotificationMessages />
            <Flyout />
        </div>
    </React.Fragment>
);

export default Workspace;
