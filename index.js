import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

LogBox.ignoreAllLogs(); //Ignore all log notifications

// initialize all the notification state handlers in the starting of app
InitializeNotification();

AppRegistry.registerComponent(appName, () => App);
