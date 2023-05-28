import { AppRegistry, LogBox } from 'react-native';

import App from './app';
import { name as appName } from './app.json';

// import {InitializeNotification} from './src/scripts/notification';

LogBox.ignoreAllLogs(); //Ignore all log notifications

// initialize all the notification state handlers in the starting of app
// InitializeNotification();

const Root = () => {
    return (
        // <Provider store={store}>
        <App />
        // </Provider>
    );
};

AppRegistry.registerComponent(appName, () => Root);
