import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import {InitializeNotification} from './src/scripts/notification';

LogBox.ignoreAllLogs(); //Ignore all log notifications

// initialize all the notification state handlers in the starting of app
// InitializeNotification();

const Root = () => {
  return (
    // <Provider store={store}>
      // <GestureHandlerRootView style={{flex: 1}}>
        <App />
      // </GestureHandlerRootView>
    // </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
