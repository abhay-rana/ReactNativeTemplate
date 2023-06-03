import React, { memo } from 'react';
import { View } from 'react-native';

import tw from '~/styles/tailwind';

import Button from '~/components/library/button';
import Text from '~/components/library/text';

const ToastScreen = () => {
    return (
        <View style={tw`flex-1`}>
            <View style={tw`mt-4`}>
                <Button variant="primary`">This is success toast</Button>
            </View>
        </View>
    );
};

export default memo(ToastScreen);
