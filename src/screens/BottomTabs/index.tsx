import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-eva-icons';

import Center from '../../components/Center';
import { BottomTabStackParamList } from './types';

const Tab = createBottomTabNavigator<BottomTabStackParamList>();

const HomeScreen = () => {
  return (
    <Center>
      <Text>Home Screen</Text>
    </Center>
  );
};

const FeedScreen = () => {
  return (
    <Center>
      <Text>Feed Screen</Text>
    </Center>
  );
};

const SettingsScreen = () => {
  return (
    <Center>
      <Text>Settings Screen</Text>
    </Center>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            let fill = focused ? '#51a7f9' : 'gray';

            switch (route.name) {
              case 'Home':
                iconName = 'home-outline';
                break;
              case 'Feed':
                iconName = 'car-outline';
                break;
              case 'Settings':
                iconName = 'settings-outline';
                break;
              default:
                break;
            }

            return <Icon name={iconName} width={24} height={24} fill={fill} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#51a7f9',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
