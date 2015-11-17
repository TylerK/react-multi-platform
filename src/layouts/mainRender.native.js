import Todo from '../containers/todo/todo'

import React, {
  StyleSheet,
  View
} from 'react-native';

export default function () {
  return (
    <View styles={Styles.container}>
      <Todo />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1
  }
})
