import React from 'react';

import Theme from '@utils/Theme';

const CheckBox = (props) => {
    const { checked } = props;
    const theme = Theme.getStyle('popup');
    return (
        <input
            type="checkbox"
            className={`${theme.checkbox}`}
            checked={checked}
            onChange={(e) => {
                e.preventDefault();
            }}
        />
    );
};

export default CheckBox;
