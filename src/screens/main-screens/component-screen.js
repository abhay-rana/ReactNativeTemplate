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
            <Text style={tw`text-10 font-400`}>Hello this is one</Text>
            <Text style={tw`text-11 font-500`}>Hello this is one</Text>
            <Text style={tw`text-12 font-600`}>Hello this is one</Text>
            <Text style={tw`text-14 font-400`}>Hello this is one</Text>
            <Text style={tw`text-16 font-500`} color="danger">
                Hello this is one
            </Text>
            <Text style={tw`text-18 font-600`} color="gray">
                Hello this is one
            </Text>
            <Text style={tw`text-24 font-700`}>Hello this is one</Text>
        </View>
    );
};

export default ComponentScreen;
