import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { CHECKBOX_SCREEN, TEXT_SCREEN } from '~/navigation/navigation-constant';

import tw from '~/styles/tailwind';

import Button from '~/components/library/button';

const ComponentScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={tw`flex flex-col gap-3`}>
            <Button
                onPress={() => navigation.navigate(CHECKBOX_SCREEN)}
                variant="primary"
            >
                CheckboxScreen
            </Button>
            <Button
                onPress={() => navigation.navigate(TEXT_SCREEN)}
                variant="secondary"
            >
                TestScreen
            </Button>
        </View>
    );
};

export default ComponentScreen;
