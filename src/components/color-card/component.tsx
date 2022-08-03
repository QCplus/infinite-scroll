import React from 'react';

import Card from 'antd/lib/card/Card';
import Meta from 'antd/lib/card/Meta';

import icon from '../../assets/white-block.png';

export type ColorCardProps = {
    colorInHex: number;
}

const ColorCard = (props: ColorCardProps) => {
    const cardColor = '#' + props.colorInHex.toString(16).padEnd(6, '0');

    const onCopyClicked = () => {
        navigator.clipboard.writeText(cardColor);
    }

    return (
        <Card className="color-card"
            cover={
                <img src={icon} alt="color" width="100" style={{ background: cardColor }} />
            }
            onClick={onCopyClicked}
            hoverable
        >
            <Meta
                title={cardColor}
            />
        </Card>
    )
}

export default ColorCard;