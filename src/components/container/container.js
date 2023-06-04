import { View } from 'react-native';

import tw from '~/styles/tailwind';

import TabFooter from '~/components/container/tab-footer';

const Container = ({ children }) => {
    return (
        <>
            <View style={tw`flex-1`}>
                {children}
                <TabFooter />
            </View>
        </>
    );
};

export default Container;
