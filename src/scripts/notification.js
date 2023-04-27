import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';

// this is for the priority setup
// {
//     "android": {
//         "priority": "high" // "high" , "low" , "normal"
//     }
// }

/**
 * @description Get the device token if permission is granted
 */
export const GetFCMToken = async () => {
  try {
    const fcm_token = await messaging().getToken();

    if (fcm_token) {
      console.log('** FCM Token **', fcm_token);
      return fcm_token;
    }
  } catch (err) {
    console.error('Get FCM Token:', err);
  }
};

export const InitializeNotification = () => {
  GetFCMToken();
  // if the app is the background state -> clicked/tapped
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
  });

  // Quiet and Background State -> Check whether an initial notification is available ->clicked/tapped
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    })
    .catch(error => console.log('failed', error));

  // Foreground State if the push notification is trigger when the app is open
  messaging().onMessage(async remoteMessage => {
    console.log('foreground', remoteMessage);
  });

  // Register background handler
  // this create the service and register the app
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
};
