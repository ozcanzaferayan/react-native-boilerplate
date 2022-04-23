import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import MyButton from '@common/MyButton';
import { add } from '@lib/MyLib';

const Home = () => {
  useEffect(() => {
    console.log(add(2, 3));
  }, []);

  return (
    <View>
      <Text>Home</Text>
      <MyButton onPress={() => alert('Hello')} title="Click me" />
    </View>
  );
};

export default Home;
