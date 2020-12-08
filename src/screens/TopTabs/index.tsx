import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Center from '../../components/Center';
import { TopTabParamList } from './types';

const TopTab = createMaterialTopTabNavigator<TopTabParamList>();

const Overview = () => {
  return (
    <Center>
      <Text>Overview Tab</Text>
    </Center>
  );
};

const History = () => {
  return (
    <Center>
      <Text>History Tab</Text>
    </Center>
  );
};

const Notes = () => {
  return (
    <Center>
      <Text>Notes Tab</Text>
    </Center>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <TopTab.Navigator>
        <TopTab.Screen name="Overview" component={Overview} />
        <TopTab.Screen name="History" component={History} />
        <TopTab.Screen name="Notes" component={Notes} />
      </TopTab.Navigator>
    </NavigationContainer>
  );
};
