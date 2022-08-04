import Divider from 'antd/lib/divider';
import React from 'react';
import ColorCardsFilter from '../components/color-cards-filter/component';
import ColorCardGrid from '../components/color-cards-grid/component';
import useToggle from '../hooks/useToggle';

const ColorCardsPage = () => {
    const [loadDelayChecked, toggleLoadDelayChecked] = useToggle(true);

    return (
        <>
            <ColorCardsFilter
                loadDelayChecked={loadDelayChecked}
                onLoadDelayCheckboxClicked={toggleLoadDelayChecked}
            />

            <Divider />
            <ColorCardGrid loadDelayActive={loadDelayChecked} />
        </>
    )
}

export default ColorCardsPage;