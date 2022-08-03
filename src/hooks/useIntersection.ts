import { useRef, useEffect } from 'react';

const useIntersection = (onIntersect: () => void, observerOptions?: IntersectionObserverInit) => {
    const observeTarget = useRef(null);
    
    useEffect(() => {
        console.log('HERE');

        const handleObserver = (entries: IntersectionObserverEntry[]) => {
            entries[0].isIntersecting && onIntersect();
        }

        const observer = new IntersectionObserver(handleObserver, observerOptions);
        observeTarget.current &&
            observer.observe(observeTarget.current);

        const observeTargetCurrent = observeTarget.current;

        return () => {
            observeTargetCurrent &&
                observer.unobserve(observeTargetCurrent);
        }
    }, [observeTarget, onIntersect, observerOptions])

    return observeTarget;
}

export default useIntersection;