export const generateRandomInt = (min: number, max: number) => {
    return min + Math.floor(Math.random() * (max - min + 1));
}

export const generateRandomRgb = () => {
    const clrs = [generateRandomInt(0, 255), generateRandomInt(0, 255), generateRandomInt(0, 255)];
    return `rgb(${clrs[0]},${clrs[1]},${clrs[2]})`;
}

export const generateRandomHexColor = () => {
    return generateRandomInt(0, 16777215);
}