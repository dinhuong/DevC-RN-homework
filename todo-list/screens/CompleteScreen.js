import React from 'react';
import { Text, View, FlatList } from 'react-native';

export default function CompleteScreen() {
  return (
    <View style={styles.container}>
      <Text>Complete Screen</Text>
    </View>
  );
}

CompleteScreen.navigationOptions = {
  header: null
};
