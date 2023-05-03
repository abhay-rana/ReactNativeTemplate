import React, { useState } from 'react';
import { Text, View } from 'react-native';

import CompOne from './src/components/comp-one';

const App = () => {
    const [state, setState] = useState();
    return (
        <View className="flex-1">
            <Text className="bg-blue-400 text-red-300">Abhay rana</Text>
            <CompOne className="h-4 w-4 p-4" />
        </View>
    );
};

export default App;
