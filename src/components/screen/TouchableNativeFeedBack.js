// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Alert,
  TouchableNativeFeedback,
} from 'react-native';

import { ratio, colors } from '../../utils/Styles';

/**
 * android only
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
});


class Screen extends Component {
  static navigationOptions = {
    title: 'TouchableNativeFeedBack',
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableNativeFeedback
          underlayColor='#ccc'
          onPress={() => Alert.alert('Pressed!!')}
        >
          <Text style={{
            fontSize: 16,
          }}>This is Hightlight.</Text>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

export default Screen;
