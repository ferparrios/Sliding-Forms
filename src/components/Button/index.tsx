import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
  title: string
  onPress: () => void
}

const Button = ({title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
      }}
      onPress={onPress}
      
      >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
