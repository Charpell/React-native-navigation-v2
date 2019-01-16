import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Navigation } from 'react-native-navigation';

class WelcomeScreen extends Component {
  state = {  }
  goToScreen = (screenName) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName
      }
    })
  }

  render() { 
    return ( 
      <View style={styles.container}>
        <Text>Welcome Screen</Text>

        <Button 
          title="Sign In"
          onPress={() => this.goToScreen('SignIn')}
        />
      </View>
     );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eaeaea'
  }
})

export default WelcomeScreen;