// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  ScrollView,
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



class Screen extends Component {
  static navigationOptions = {
    title: 'ScrollView',
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          style={{
            alignSelf: 'stretch',
          }}
        >
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
          <Text>Text</Text>
        </ScrollView>
      </View>
    );
  }
}

export default Screen;
