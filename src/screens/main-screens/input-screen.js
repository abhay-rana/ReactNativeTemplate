import React from 'react';
import { View } from 'react-native';
import Text from '~/components/library/text';
import TextInput from '~/components/library/text-input';
import tw from '~/styles/tailwind';

const InputScreen = () => {
    return (
        <View style={tw`flex-1 flex flex-col`}>
            <Text>InputScreen</Text>
            <View style={tw`mt-4`}>
                <TextInput
                    label="this is label"
                    placeholder="this is placeholder"
                    bordered
                    large
                />
            </View>
            <View style={tw`mt-4`}>
                <TextInput
                    label="this is label"
                    placeholder="this is placeholder"
                    bordered
                    large
                />
            </View>
            <View style={tw`mt-4`}>
                <TextInput
                    label="this is label"
                    placeholder="this is placeholder"
                    stacked
                    large
                />
            </View>
            <View style={tw`mt-4`}>
                <TextInput
                    label="this is label"
                    placeholder="Enter Password"
                    large
                    type="password"
                    bordered
                />
            </View>
        </View>
    );
};

export default InputScreen;
