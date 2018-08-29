// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  SafeAreaView,
} from 'react-native';

import { ratio, colors } from '../../utils/Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
  },
});



/**
 * only for ios
 */

class Screen extends Component {
  static navigationOptions = {
    title: 'SafeAreaView',
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          <View style={{flex: 1}}>
            <Text>Hello World!</Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

export default Screen;
