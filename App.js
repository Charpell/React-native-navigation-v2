import { Navigation } from 'react-native-navigation';

import Welcome from './screens/Welcome'
import SignIn from './screens/Signin'

Navigation.registerComponent('Welcome', () => Welcome)
Navigation.registerComponent('SignIn', () => SignIn)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AppStack',
        children: [{
          component: {
            name: "Welcome",
            options: {
              topBar: {
                title: {
                  text: 'Welcome'
                }
              }
            }
          }
        }]
      }
    }
  });
});