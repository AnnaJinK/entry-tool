import React from 'react';
import SideBar from './SideBar';
import BigICON from './BigICON';

export default (props) => {
    if (props.sidebar) {
        return <SideBar {...props} />;
    }
    return <BigICON {...props} />;
};
