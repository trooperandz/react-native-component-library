import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Animated,
  View,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

import data from '../../utils/mockData.json';
import * as S from './styles';

const { styles } = S;
const Stack = createStackNavigator();

interface CardProps {
  item: {
    id: string;
    name: string;
    title: string;
  };
}

const DemoScreen = () => {
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 60);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 60],
    outputRange: [0, -60],
  });

  const translateStyle = {
    transform: [{ translateY }],
  };

  const handleScrollBegin = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    console.log(e.nativeEvent.contentOffset);
  };

  const handleOnScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollY.setValue(e.nativeEvent.contentOffset.y);
  };

  const Card = (props: CardProps) => {
    const { item } = props;

    return (
      <S.CardContainer key={item.name}>
        <Text>{item.name}</Text>
        <Text>{item.title}</Text>
      </S.CardContainer>
    );
  };

  return (
    <View>
      <Animated.View style={[styles.subheader, translateStyle]}>
        <S.Text>Subheader</S.Text>
      </Animated.View>
      <Animated.FlatList
        bounces={false}
        style={translateStyle}
        keyExtractor={(item) => item.id.toString()}
        onMomentumScrollBegin={handleScrollBegin}
        onScroll={handleOnScroll}
        scrollEventThrottle={16}
        data={data}
        renderItem={({ item }) => <Card item={item} />}
      />
    </View>
  );
};

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="DemoScreen"
        component={DemoScreen}
        options={{
          headerStyle: { backgroundColor: '#51a7f9', height: 60 },
          headerTitle: () => <S.Text>Revealing Subheader</S.Text>,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
