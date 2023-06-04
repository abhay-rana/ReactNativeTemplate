import {
    createNavigationContainerRef,
    useFocusEffect,
} from '@react-navigation/native';
import { useCallback, useState } from 'react';

export const navigationRef = createNavigationContainerRef();

export const useLocation = () => {
    const [location, setLocation] = useState();
    useFocusEffect(
        useCallback(() => {
            if (navigationRef.isReady()) {
                const screen_name = navigationRef.getCurrentRoute().name;
                setLocation(screen_name);
            } else {
                setTimeout(() => {
                    const screen_name = navigationRef.getCurrentRoute().name;
                    setLocation(screen_name);
                }, 0);
            }
        }, [])
    );

    return [location, setLocation];
};
