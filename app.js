import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';

import tw from '~/styles/tailwind';

import ArrowNext from '~/assets/svg/arrow-next.svg';

import CompTwo from '~/components/comp-two';
import Text from '~/components/library/text';

const App = () => {
    const [state, setState] = useState();
    return (
        <View style={tw`flex-1`}>
            <Text
                as="h3"
                font_type="secondary"
                font_weight={'w300'}
                color="black"
            >
                hello this is abhay
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default App;
