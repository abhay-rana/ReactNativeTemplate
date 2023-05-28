import React, { useState } from 'react';
import { Text, View } from 'react-native';
import 'react-native-gesture-handler';

import tw from '~/styles/tailwind';

import ArrowNext from '~/assets/svg/arrow-next.svg';

import CompTwo from '~/components/comp-two';

const App = () => {
    const [state, setState] = useState();
    return (
        <View style={tw`flex-1`}>
            <Text style={tw` text-3xl font-poppins`}>this is normal text</Text>
            <Text style={tw` text-3xl font-poppins font-bold`}>
                this is normal text
            </Text>
            <CompTwo />
            <ArrowNext width={10} height={20} className="text-red-600" />
        </View>
    );
};

export default App;
