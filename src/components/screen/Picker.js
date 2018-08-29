// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Picker,
} from 'react-native';

import { ratio, colors } from '../../utils/Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});



class Screen extends Component {
  static navigationOptions = {
    title: 'Picker',
  };

  state = {
    val: 'dooboolab',
  }

  render() {
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.val}
          style={{ height: 100, width: 100 }}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
          <Picker.Item label="dooboolab" value="dooboolab" />
          <Picker.Item label="react" value="react" />
          <Picker.Item label="react native" value="reactnative" />
          <Picker.Item label="react-native-seoul" value="react-native-seoul" />
          <Picker.Item label="dart" value="dart" />
          <Picker.Item label="flutter" value="flutter" />
          <Picker.Item label="objective c" value="objective-c" />
          <Picker.Item label="swift" value="swift" />
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="Kotlin" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    );
  }
}

export default Screen;
