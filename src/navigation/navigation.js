import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import { navigationRef } from '~/hooks/useLocation';
import {
    CHECKBOX_SCREEN,
    COMPONENT_SCREEN,
    INPUT_SCREEN,
    TEXT_SCREEN,
    TOAST_SCREEN,
} from '~/navigation/navigation-constant';

import CheckboxScreen from '~/screens/main-screens/checkbox-screen';
import ComponentScreen from '~/screens/main-screens/component-screen';
import InputScreen from '~/screens/main-screens/input-screen';
import TextScreen from '~/screens/main-screens/text-screen';
import ToastScreen from '~/screens/main-screens/toast-screen';

enableScreens();
const Stack = createNativeStackNavigator();

const Navigation = (props) => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                initialRouteName={COMPONENT_SCREEN}
                screenOptions={{
                    headerShown: false,
                }}
            >
                {/* OnBoarding Screen */}
                {/* Auth Screens */}

                {/* Main Screens */}
                <Stack.Screen
                    name={COMPONENT_SCREEN}
                    component={ComponentScreen}
                />
                <Stack.Screen name={TEXT_SCREEN} component={TextScreen} />
                <Stack.Screen name={INPUT_SCREEN} component={InputScreen} />
                <Stack.Screen
                    name={CHECKBOX_SCREEN}
                    component={CheckboxScreen}
                />
                <Stack.Screen name={TOAST_SCREEN} component={ToastScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
