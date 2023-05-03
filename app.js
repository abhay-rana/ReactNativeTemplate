import React, { useState } from 'react';
import { Text, View } from 'react-native';

import CompTwo from '~/components/comp-two';

const App = () => {
    const [state, setState] = useState();
    return (
        <View className="flex-1">
            <Text className="bg-blue-400 text-red-300">Abhay rana</Text>
            <CompTwo />
        </View>
    );
};

export default App;
