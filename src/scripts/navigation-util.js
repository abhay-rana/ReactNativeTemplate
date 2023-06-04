import { createNavigationContainerRef } from '@react-navigation/native';

import { CONTAINER_SET_CURRENT_SCREEN_NAME } from '~/actions/types';

import store from '~/reducers/store';

import { navigationRef } from '~/hooks/useLocation';

export const SetScreenName = () => {
    console.log(navigationRef.isReady());
    if (navigationRef.isReady()) {
        store.dispatch({
            type: CONTAINER_SET_CURRENT_SCREEN_NAME,
            screen_name: navigationRef.getCurrentRoute().name,
        });
    }
};
