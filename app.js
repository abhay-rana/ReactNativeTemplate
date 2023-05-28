import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import tw from '~/styles/tailwind';

import ArrowNext from '~/assets/svg/arrow-next.svg';

import CompTwo from '~/components/comp-two';

import { POPPINS_BOLD } from '~/scripts/theme-var';

const App = () => {
    const [state, setState] = useState();
    return (
        <View style={tw`flex-1`}>
            <Text style={tw` text-3xl font-poppins`}>this is normal text</Text>
            <Text style={tw` text-3xl font-kalam font-bold`}>
                this is normal text
            </Text>
            <Text style={[styles.kalam, tw``]}>this is normal text</Text>
            <CompTwo />
            <ArrowNext width={10} height={20} className="text-red-600" />
        </View>
    );
};

const styles = StyleSheet.create({
    kalam: {
        fontFamily: POPPINS_BOLD,
        fontSize: 30,
    },
});

export default App;
