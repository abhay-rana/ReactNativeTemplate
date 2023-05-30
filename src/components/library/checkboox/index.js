import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import tw from '~/styles/tailwind';

import Text from '~/components/library/text';

const Checkbox = ({
    label,
    labelColor,
    boxColor,
    shape,
    position,
    gap,
    onChange,
}) => {
    const handleCheckBox = () => {};
    const extra_class = {};
    if (!!gap) {
        extra_class[gap] = gap;
    }
    const [toggle, setToggle] = useState();
    return (
        <View style={[tw`flex flex-row gap-1`, extra_class]}>
            <TouchableOpacity
                onPress={handleCheckBox}
                style={{ width: 10, height: 10 }}
            ></TouchableOpacity>
            <Text>{label}</Text>
        </View>
    );
};

export default Checkbox;
