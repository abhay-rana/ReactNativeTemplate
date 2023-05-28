import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from '~/hooks/useLocation';
import { INPUT_SCREEN, TEXT_SCREEN } from '~/navigation/navigation-constant';

import InputScreen from '~/screens/main-screens/input-screen';
import TextScreen from '~/screens/main-screens/text-screen';

const Stack = createStackNavigator();

const Navigation = (props) => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                initialRouteName={TEXT_SCREEN}
                screenOptions={{
                    headerShown: false,
                }}
            >
                {/* OnBoarding Screen */}
                {/* Auth Screens */}

                {/* Main Screens */}
                <Stack.Screen name={TEXT_SCREEN} component={TextScreen} />
                <Stack.Screen name={INPUT_SCREEN} component={InputScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
