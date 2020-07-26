import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CompleteScreen from './screens/CompleteScreen';
import AllScreen from './screens/AllScreen';
import ActiveScreen from './screens/ActiveScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Complete" component={CompleteScreen} />
        <Tab.Screen name="All" component={AllScreen} />
        <Tab.Screen name="Active" component={ActiveScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
