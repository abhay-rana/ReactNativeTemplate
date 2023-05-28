import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { INPUT_SCREEN } from '~/navigation/navigation-constant';

import tw from '~/styles/tailwind';
import { SECONDARY_FONT_BLACK } from '~/styles/theme-var';

import ArrowNext from '~/assets/svg/arrow-next.svg';

import Button from '~/components/library/button';
import Text from '~/components/library/text';

const TextScreen = () => {
    const navigation = useNavigation();
    const navigationHandle = (screen) => {
        navigation.navigate(screen);
    };
    console.log('text-screen');
    return (
        <View style={tw`flex-1 border-4 border-red-400 bg-black`}>
            <Text>Test Components</Text>
            <View style={tw`flex-1`}>
                <View style={tw`border border-black`}>
                    <Text
                        as="p"
                        font_type="primary"
                        font_weight={'w700'}
                        color="danger"
                        font_size={25}
                    >
                        hello this is abhay
                    </Text>
                    <Text as="h1" font_weight={'w700'}>
                        hello this is abhay
                    </Text>
                    <Text
                        as="p2"
                        font_type="secondary"
                        font_weight={'w300'}
                        color="success"
                        font_size={25}
                    >
                        hello this is abhay
                    </Text>
                </View>
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
                <Button
                    font_style={{
                        fontSize: 23,
                        fontFamily: SECONDARY_FONT_BLACK,
                        color: 'white',
                    }}
                    style={{ marginTop: 1 }}
                    loader
                    variant="secondary"
                >
                    hello this is abhay
                </Button>
                <Button loader style={tw`w-[200px]`}>
                    <View
                        style={tw`flex flex-row gap-2 justify-center items-center`}
                    >
                        <ArrowNext width={10} height={10} />
                        <Text font_type="secondary" color="danger">
                            Abhay Rana
                        </Text>
                    </View>
                </Button>
                <View style={tw`w-44 mt-4`}>
                    <Button
                        variant="primary"
                        shape="block"
                        onPress={() => navigationHandle(INPUT_SCREEN)}
                    >
                        <View
                            style={tw`flex flex-row gap-2 justify-center items-center`}
                        >
                            <ArrowNext width={10} height={10} />
                            <Text
                                font_type="secondary"
                                color="danger"
                                font_size={18}
                            >
                                Abhay Rana
                            </Text>
                        </View>
                    </Button>
                </View>
            </View>
        </View>
    );
};

export default TextScreen;
