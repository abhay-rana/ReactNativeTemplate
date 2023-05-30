import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { CHECKBOX_SCREEN, TEXT_SCREEN } from '~/navigation/navigation-constant';

import tw from '~/styles/tailwind';

import Button from '~/components/library/button';
import Text from '~/components/library/text';

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
            <Text style={tw`text-10`}>Hello this is one</Text>
            <Text style={tw`text-11`}>Hello this is one</Text>
            <Text style={tw`text-12`}>Hello this is one</Text>
            <Text style={tw`text-16`}>Hello this is one</Text>
            <Text style={tw`text-lg`}>Hello this is one</Text>
            <Text style={tw`text-24`}>Hello this is one</Text>
        </View>
    );
};

export default ComponentScreen;
