import { StackActions, createNavigationContainerRef, useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { ERROR_SCREEN, SECURE_ROUTES } from '~/navigation/navigation-constant';



import store from '~/reducers/store';


export const navigationRef = createNavigationContainerRef();

const navigate = (name, params, replace) => {
    if (navigationRef.isReady()) {
        if (
            SECURE_ROUTES.includes(name) &&
            !store.getState().auth_store.is_login
        ) {
            navigationRef.navigate('Login');
        } else if (navigationRef.getRootState().routeNames.includes(name)) {
            //if the redirection to the the product-detail page then push it to the stack
            if (!!replace)
                navigationRef.current.dispatch(
                    StackActions.replace(name, params)
                );
            //replace the stack with the new upcoming route
            else navigationRef.navigate(name, params);
        } else{
            navigationRef.navigate(ERROR_SCREEN); // if the route is not present then redirect to the ErrorScreen
        } 
        console.log(
            '<-- Navigated To -->',
            navigationRef.isReady() && navigationRef.getCurrentRoute().name
        );
        return navigationRef.isReady()
            ? navigationRef.getCurrentRoute().name
            : 'Error';
    }
};

export const useLocation = () => {
    const [location, setRoute] = useState();
    useFocusEffect(
        useCallback(() => {
            if (navigationRef.isReady()) {
                const screen_name = navigationRef.getCurrentRoute().name;
                setRoute(screen_name);
            } else {
                setTimeout(() => {
                    const screen_name = navigationRef.getCurrentRoute().name;
                    setRoute(screen_name);
                }, 0);
            }
        }, [])
    );

    const setLocation = (route, params, replace) => {
        setRoute(navigate(route, params, replace));
    };

    return [location, setLocation];
};