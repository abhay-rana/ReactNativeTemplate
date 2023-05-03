import React, { useState } from 'react';
import { Text, View } from 'react-native';

import CompOne from './src/components/comp-one';

const App = () => {
    const [state, setState] = useState();
    return (
        <View>
            <Text>Abhay rana</Text>
            <CompOne />
        </View>
    );
};

export default App;
