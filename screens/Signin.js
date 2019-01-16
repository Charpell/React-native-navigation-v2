import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class SignIn extends Component {
  state = {  }
   render() { 
    return ( 
      <View style={styles.container}>
        <Text>Sign In</Text>

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

export default SignIn;