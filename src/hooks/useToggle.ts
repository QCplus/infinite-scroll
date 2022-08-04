import { useState, useCallback } from 'react';

const useToggle = (initialState=false):[boolean, () => void] => {
    const [isActive, setIsActive] = useState(initialState);

    const toggle = useCallback(() => {
        setIsActive((prevState) => !prevState);
    }, [])

    return [isActive, toggle];
}

export default useToggle;
