import React, {
  StyleSheet,
  View
} from 'react-native';

import Todo from '../containers/todo/todo';
import Styles from './main.styles';

export default function () {
  return (
    <View style={Styles.container}>
      <Todo />
    </View>
  );
}
