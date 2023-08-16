import { useCallback, useMemo, useState } from 'react';

interface UseMouseBind {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type UseHoverResult = [
    boolean,
    UseMouseBind
]

export const useHover = () => {
    const [isHover, setIsHover] = useState(false);
    const onMouseEnter = useCallback(() => {
        setIsHover(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsHover(false);
    }, []);

    return useMemo(
        () => [isHover,
            {
                onMouseEnter, onMouseLeave,
            },
        ],
        [isHover, onMouseEnter, onMouseLeave],
    );
};
