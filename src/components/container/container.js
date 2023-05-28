import { View } from 'react-native';

import tw from '~/styles/tailwind';

const Container = ({ children }) => {
    return (
        <>
            <View style={tw`flex-1`}>{children}</View>
        </>
    );
};

export default Container;
