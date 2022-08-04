import React from 'react';

import ColorCard, { ColorCardProps } from '../color-card/component';
import Row from 'antd/lib/grid/row';
import LoadingOutlined from '@ant-design/icons/lib/icons/LoadingOutlined';

import { generateRandomHexColor, generateRandomInt } from '../../helpers';

import './styles.css';
import useIntersection from '../../hooks/useIntersection';

const MIN_LOAD_TIME_MS = 500;
const MAX_LOAD_TIME_MS = 2000;

const calcCardsPerLoad = () => {
    const [cardWidth, cardHeight] = [200, 300];
    const xCardMargin = 14; // TODO: rems instead of px

    const cardRows = Math.ceil(window.screen.availHeight / cardHeight) + 1;
    const cardsCount = Math.ceil( (cardRows * window.screen.availWidth) / (cardWidth + cardRows * xCardMargin) );
    
    return cardsCount;
}

const generateCards = (count: number) => {
    const nextColors = Array<ColorCardProps>();

    for (let i = 0; i < count; i++)
        nextColors.push({ colorInHex: generateRandomHexColor() } as ColorCardProps);

    return nextColors;
}

const observerOptions = {
    root: null,
    rootMargin: "40px",
    threshold: 0
};

export type ColorCardGridProps = {
    loadDelayActive: boolean;
}

const ColorCardGrid = (props: ColorCardGridProps) => {
    const [colors, setColors] = React.useState<ColorCardProps[]>([]);
    const [isLoading, setIsLoading] = React.useState(false);

    const loadCards = React.useCallback(() => {
        const nextColors = generateCards(calcCardsPerLoad());

        setColors((prevColors) => [...prevColors, ...nextColors])

        setIsLoading(false);
    }, []);

    const onIntersect = React.useCallback(() => {
        if (isLoading)
            return;

        setIsLoading(true);

        if (props.loadDelayActive)
            setTimeout(loadCards, generateRandomInt(MIN_LOAD_TIME_MS, MAX_LOAD_TIME_MS));
        else
            loadCards();
    }, [isLoading, loadCards]);

    const loaderLine = useIntersection(onIntersect, observerOptions)

    return (
        <div className="cards-grid">
            <Row justify='center'>
                {
                    colors.map((c, i) => <ColorCard {...c} key={i} />)
                }
            </Row>

            <div ref={loaderLine}></div>

            {
                isLoading
                ? 
                <Row justify='center' style={{ margin: "2rem 0" }}>
                    <LoadingOutlined style={{ fontSize: 64 }} spin />
                </Row>
                : <></>
            }
        </div>
    );
}

export default ColorCardGrid;