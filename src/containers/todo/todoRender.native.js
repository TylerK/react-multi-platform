
import React, {
  StyleSheet,
  View,
  Text
} from 'react-native';

const styles = StyleSheet.create(require('./todo.styles'));

export default function (props, state) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, world!</Text>
    </View>
  );
}

