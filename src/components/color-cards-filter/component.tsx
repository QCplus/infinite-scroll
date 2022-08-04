import React from 'react';

import Row from 'antd/lib/grid/row';
import Checkbox from 'antd/lib/checkbox/Checkbox';

export type ColorCardsFilterProps = {
    loadDelayChecked: boolean;
    onLoadDelayCheckboxClicked: () => void;
}

const ColorCardsFilter = (props: ColorCardsFilterProps) => {
    return (
        <Row style={{ margin: "1rem" }}>
            <Checkbox onChange={props.onLoadDelayCheckboxClicked}
                checked={props.loadDelayChecked}
            >
                Load delay
            </Checkbox>
        </Row>
    );
}

export default ColorCardsFilter;