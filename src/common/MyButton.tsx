import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
};

const MyButton = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={{ fontSize: 20, color: 'royalblue', textAlign: 'center' }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default MyButton;
