import { getStatusBarHeight } from 'react-native-status-bar-height';
import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Dimensions, AsyncStorage, Alert } from 'react-native';
import SwitchNavigator from './components/navigation/SwitchNavigator';


class App extends React.Component {
  render() {
    return (
     
        <View style={styles.container}>
          <SwitchNavigator />
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
});

export default App;
