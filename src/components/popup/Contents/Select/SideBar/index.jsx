import React, { useState, useEffect } from 'react';
import Item from './Item';
import SideBar from './SideBar';
import SubMenu from './SubMenu';
import Selected from './Selected';
import Foot from '../foot';
import { CommonUtils } from '@utils/Common';
import Theme from '@utils/Theme';
import { EMIT_TYPES as Types } from '@constants';
import { triggerEvent } from '@actions/index';
import { connect } from 'react-redux';

const Index = (props) => {
    const { data, type, sidebar, multiSelect = true, isVectorOnly = false, fetch, baseUrl } = props;
    const [selectedSidebar, selectSidebar] = useState(Object.keys(sidebar)[0]);
    const [selectedSubMenu, selectSubMenu] = useState(null);
    const theme = Theme.getStyle('popup');
    const subMenu = sidebar[selectedSidebar].sub;
    const drawItems = () =>
        data
            .filter((item) => !isVectorOnly || CommonUtils.isVectorItem(item))
            .map((item, index) => (
                <Item
                    key={index}
                    item={item}
                    multiSelect={multiSelect}
                    type={type}
                    baseUrl={baseUrl}
                />
            ));

    useEffect(() => {
        if (subMenu[selectedSubMenu]) {
            fetch(type, selectedSidebar, selectedSubMenu);
        }
    }, [selectedSidebar, selectedSubMenu]);

    return (
        <>
            <div className={theme.pop_content}>
                <h2 className={theme.blind}>Popup</h2>
                <SideBar type={type} sidebar={sidebar} onClick={(item) => selectSidebar(item)} />
                <div className={theme.section_cont}>
                    <SubMenu menus={subMenu} onClick={(item) => selectSubMenu(item)} />
                    {type === 'sound' && (
                        <div id="popupList" className={theme.sound_list_box}>
                            <div className={theme.list_area}>
                                <ul className={theme.obj_list}>{drawItems()}</ul>
                            </div>
                        </div>
                    )}
                    {type !== 'sound' && (
                        <div id="popupList" className={theme.list_area}>
                            <ul className={theme.obj_list}>{drawItems()}</ul>
                        </div>
                    )}
                    {multiSelect && <Selected type={type} baseUrl={baseUrl} />}
                </div>
            </div>
            <Foot />
        </>
    );
};

const mapDispatchToProps = (dispatch) => ({
    fetch: (type, sidebar, subMenu) =>
        dispatch(triggerEvent(Types.fetch, { type, sidebar, subMenu }, false)),
});

export default connect(
    null,
    mapDispatchToProps
)(Index);
