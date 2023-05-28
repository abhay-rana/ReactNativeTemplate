import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';

import tw from '~/styles/tailwind';

import ArrowNext from '~/assets/svg/arrow-next.svg';

import CompTwo from '~/components/comp-two';
import Button from '~/components/library/button';
import Text from '~/components/library/text';

const App = () => {
    const [state, setState] = useState();
    return (
        <View style={tw`flex-1`}>
            <Text
                as="p2"
                font_type="secondary"
                font_weight={'w300'}
                color="success"
                font_size={25}
            >
                hello this is abhay
            </Text>
            <Button
                variant="success"
                style={tw`w-[300px]`}
                shape="pill"
                disabled
            >
                This is button component
            </Button>
            <Button>
                <Text
                    as="p2"
                    font_type="secondary"
                    font_weight={'w300'}
                    color="white"
                    font_size={25}
                >
                    hello this is abhay
                </Text>
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({});

export default App;
